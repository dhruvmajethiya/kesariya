const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const DEFAULT_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const DATA_FILE = path.join(__dirname, 'data', 'leads.json');

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

function readLeads() {
  try {
    if (!fs.existsSync(DATA_FILE)) {
      fs.writeFileSync(DATA_FILE, '[]', 'utf8');
      return [];
    }
    const content = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(content || '[]');
  } catch (err) {
    console.error('Error reading leads:', err);
    return [];
  }
}

function writeLeads(leads) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(leads, null, 2), 'utf8');
    return true;
  } catch (err) {
    console.error('Error saving leads:', err);
    return false;
  }
}

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  let pathname = parsedUrl.pathname;

  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // API Endpoints
  if (pathname === '/api/inquiries' && req.method === 'GET') {
    const leads = readLeads();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(leads));
    return;
  }

  if (pathname === '/api/inquiries' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');
        const leads = readLeads();
        const newId = 'KES-' + Math.floor(10000 + Math.random() * 90000);
        const newLead = {
          id: newId,
          timestamp: new Date().toISOString(),
          fullName: data.fullName || 'Valued Guest',
          phone: data.phone || '',
          whatsapp: data.whatsapp || data.phone || '',
          email: data.email || '',
          city: data.city || 'Ahmedabad',
          eventType: data.eventType || 'Celebration',
          eventDate: data.eventDate || '',
          timeSlot: data.timeSlot || 'Evening',
          guestCount: parseInt(data.guestCount, 10) || 50,
          venueStatus: data.venueStatus || 'Not specified',
          dietary: data.dietary || 'Pure Vegetarian',
          services: Array.isArray(data.services) ? data.services : ['Gourmet Food Catering'],
          decorTheme: data.decorTheme || 'Classic Elegance',
          budgetTier: data.budgetTier || 'Standard',
          specialNotes: data.specialNotes || '',
          status: 'New',
          estimatedQuote: data.estimatedQuote || 'Custom Proposal Pending'
        };

        leads.unshift(newLead);
        writeLeads(leads);

        console.log(`[KESARIYA INQUIRY] Received new booking inquiry from: ${newLead.fullName} (${newLead.eventType}, ${newLead.guestCount} guests) - ID: ${newLead.id}`);

        res.writeHead(201, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, lead: newLead }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // PUT /api/inquiries/:id (update status or lead notes)
  if (pathname.startsWith('/api/inquiries/') && req.method === 'PUT') {
    const leadId = pathname.replace('/api/inquiries/', '');
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const updateData = JSON.parse(body || '{}');
        const leads = readLeads();
        const index = leads.findIndex(l => l.id === leadId);
        if (index === -1) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Lead not found' }));
          return;
        }
        leads[index] = { ...leads[index], ...updateData };
        writeLeads(leads);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true, lead: leads[index] }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid payload' }));
      }
    });
    return;
  }

  // DELETE /api/inquiries/:id
  if (pathname.startsWith('/api/inquiries/') && req.method === 'DELETE') {
    const leadId = pathname.replace('/api/inquiries/', '');
    let leads = readLeads();
    const prevLen = leads.length;
    leads = leads.filter(l => l.id !== leadId);
    if (leads.length === prevLen) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Lead not found' }));
      return;
    }
    writeLeads(leads);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ success: true, message: 'Deleted lead ' + leadId }));
    return;
  }

  // Static File Serving
  if (pathname === '/') {
    pathname = '/index.html';
  }

  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  const filePath = path.join(__dirname, safePath);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html if file doesn't exist
      const indexPath = path.join(__dirname, 'index.html');
      fs.readFile(indexPath, (readErr, indexContent) => {
        if (readErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(indexContent);
      });
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Server Error');
        return;
      }
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    });
  });
});

function startServer(port) {
  server.listen(port, () => {
    console.log(`====================================================`);
    console.log(` ✨ KESARIYA CATERING WEBSITE RUNNING AT:`);
    console.log(` 🌐 Main Website:       http://localhost:${port}/`);
    console.log(` 📋 Owner Leads Portal: http://localhost:${port}/admin.html`);
    console.log(`====================================================`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, attempting ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(DEFAULT_PORT);
