/**
 * KESARIYA CATERING - 5-STAR ROYAL EXPERIENCE APP
 * Founder & Owner: Bharatbhai Gajera
 * Address: 263, Momai residency, umragam, surat-394130
 * Phone / WhatsApp: +91 8758538259
 * Standard: 100% Pure Vegetarian (Shuddh Shakahari) & Soft Drinks / Mocktails Only
 */

const KESARIYA_CONFIG = {
  brandName: "Kesariya Catering",
  ownerName: "Bharatbhai Gajera",
  ownerPhone: "+91 8758538259",
  ownerWhatsAppDigits: "918758538259",
  ownerEmail: "kesariyacateringsurat@gmail.com",
  address: "263, Momai residency, umragam, surat-394130",
  servicePurity: "100% Pure Vegetarian (Strictly No Non-Veg) & Artisan Soft Drinks Only (Zero Alcohol)",
  baseTierRates: {
    silver: { food: 650, beverage: 150, decor: 250, live: 150, staff: 100 },
    gold: { food: 950, beverage: 250, decor: 400, live: 250, staff: 150 },
    diamond: { food: 1450, beverage: 350, decor: 650, live: 400, staff: 250 }
  }
};

// 100% Pure Vegetarian & Artisan Soft Beverages Menu
const MENU_DATA = [
  {
    id: 1,
    category: "royal-indian",
    name: "Kesariya Shahi Paneer (Surat Royal Style)",
    tag: "Chef Signature",
    tagType: "saffron",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Strict Jain Available",
    desc: "Creamy malai paneer steeped in rich Kashmiri saffron, cashew nut and green cardamom gravy, finished with silver vark and toasted almonds.",
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=400&q=80",
    specialty: "Infused with Pure Kashmiri Saffron"
  },
  {
    id: 2,
    category: "royal-indian",
    name: "Dal Dum Pukht (24-Hour Claypot Simmer)",
    tag: "5-Star Classic",
    tagType: "gold",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Strict Jain Available",
    desc: "Black lentils slow-cooked overnight with white churned butter, vine tomatoes and subtle royal spices in an authentic earthen vessel.",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80",
    specialty: "Authentic Claypot Dum Cooking"
  },
  {
    id: 3,
    category: "royal-indian",
    name: "Zafrani Subz Biryani with Burani Raita",
    tag: "Royal Feast",
    tagType: "saffron",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Strict Jain Available",
    desc: "Aged long-grain basmati rice layered with garden vegetables, caramelized saffron glaze, crisp fried cashews and sealed in purdah.",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80",
    specialty: "Handi Sealed with Dough"
  },
  {
    id: 4,
    category: "chaat",
    name: "Surati & Banarasi Tamatar Chaat",
    tag: "Live Counter",
    tagType: "green",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Strict Jain Available",
    desc: "Flash-fried organic spinach crisps, slow-roasted spiced tomato relish, churned sweet yogurt, and tangy tamarind foam.",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
    specialty: "Cooked Live on Cast Iron Tawa"
  },
  {
    id: 5,
    category: "chaat",
    name: "Royal 6-Flavour Pani Puri Boulevard",
    tag: "Crowd Magnet",
    tagType: "saffron",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Strict Jain Available",
    desc: "Handcrafted crispy puris served with 6 artisanal waters: Hing Jeera, Kesariya Pudina, Khatta Meetha Khajur, Guava Chilli, Raw Mango, and Lemon Twist.",
    img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80",
    specialty: "6 Distinct Artisanal Infusions"
  },
  {
    id: 6,
    category: "global-veg",
    name: "Woodfired Truffle & Exotic Veggie Pizza",
    tag: "Live Portable Oven",
    tagType: "gold",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Strict Jain Available",
    desc: "Hand-stretched fermented sourdough, San Marzano tomato sauce, fresh buffalo mozzarella, bell peppers, olives, and fragrant truffle glaze.",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
    specialty: "Baked in Live Portable Woodfire"
  },
  {
    id: 7,
    category: "global-veg",
    name: "Lotus Steam Crystal Dim Sums & Baos",
    tag: "Pan-Asian Veg",
    tagType: "green",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Vegan Friendly",
    desc: "Delicate translucent edamame dumplings, water chestnut pouches, and fluffy steamed bao buns with sweet chilli scallion drizzle.",
    img: "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=400&q=80",
    specialty: "Served in Steaming Bamboo Baskets"
  },
  {
    id: 8,
    category: "soft-drinks",
    name: "Signature Kesariya Badam Sharbat",
    tag: "Royal Welcome Drink",
    tagType: "saffron",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg (Non-Alcoholic)",
    desc: "Rich almond milk steeped with pure Kashmiri saffron threads, crushed green pistachios, and aromatic edible dried rose petals.",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=400&q=80",
    specialty: "24-Hour Saffron & Nut Infusion"
  },
  {
    id: 9,
    category: "soft-drinks",
    name: "Smoked Rosemary Passionfruit Spritz",
    tag: "Artisan Mocktail",
    tagType: "gold",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg (Non-Alcoholic)",
    desc: "Fresh passionfruit puree, sparkling cold soda, citrus lime, and torched mountain rosemary sprig for an enchanting smoky aroma.",
    img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=400&q=80",
    specialty: "Live Torched Herbal Aroma"
  },
  {
    id: 10,
    category: "soft-drinks",
    name: "Fresh Alphonso Mango & Coconut Cooler",
    tag: "Summer Specialty",
    tagType: "saffron",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg (Non-Alcoholic)",
    desc: "Pure Ratnagiri alphonso mango pulp blended with tender coconut water, chia seeds, and mint leaves. 100% natural and preservative-free.",
    img: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=400&q=80",
    specialty: "Zero Preservatives / 100% Natural"
  },
  {
    id: 11,
    category: "royal-desserts",
    name: "Kesariya Angoori Rasmalai Tower",
    tag: "Grand Finale",
    tagType: "saffron",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Strict Jain Available",
    desc: "Delicate miniature chenna dumplings chilled in saffron-condensed milk, adorned with pure 24k gold leaf and toasted slivered pistachios.",
    img: "https://images.unsplash.com/photo-1589119908995-c6837fa14d48?auto=format&fit=crop&w=400&q=80",
    specialty: "24-Karat Edible Gold Leaf"
  },
  {
    id: 12,
    category: "royal-desserts",
    name: "Live Kesariya Jalebi with Lucknowi Rabdi",
    tag: "Live Fryer Counter",
    tagType: "gold",
    diet: "veg-jain",
    dietLabel: "100% Pure Veg • Strict Jain Available",
    desc: "Crispy saffron-infused spiral jalebis fried live in pure Desi Ghee, dipped in warm cardamom syrup and served over thick lachhedar rabdi.",
    img: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=400&q=80",
    specialty: "Fried Live in 100% Pure Desi Ghee"
  }
];

// Document Ready
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPhoneReveal();
  initScrollSpy();
  initHeroConnectForm();
  initEstimator();
  initMenuExplorer();
  initFaqAccordion();
  initFloatingActions();
});

/* ==========================================================================
   CLICK-TO-REVEAL PHONE NUMBER IN HEADER
   ========================================================================== */
function initPhoneReveal() {
  const phoneBtn = document.getElementById('navPhoneBtn');
  const phoneWrap = document.getElementById('navPhoneWrap');

  if (!phoneBtn) return;

  phoneBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isRevealed = phoneBtn.classList.contains('revealed');
    if (!isRevealed) {
      phoneBtn.classList.add('revealed');
      phoneWrap?.classList.add('active');
    } else {
      window.location.href = 'tel:+918758538259';
    }
  });

  // Collapse back to icon on outside click
  document.addEventListener('click', (e) => {
    if (phoneWrap && !phoneWrap.contains(e.target)) {
      phoneBtn.classList.remove('revealed');
      phoneWrap.classList.remove('active');
    }
  });
}

/* ==========================================================================
   NAVBAR & DRAWER (SAFE MOBILE ONLY)
   ========================================================================== */
function initNavbar() {
  const header = document.querySelector('.site-header');
  const toggleBtn = document.getElementById('menuToggleBtn');
  const mobileNav = document.getElementById('mobileNav');
  const backdrop = document.getElementById('mobileNavBackdrop');
  const closeBtn = document.getElementById('closeMobileNavBtn');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 35) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  const openDrawer = () => {
    mobileNav?.classList.add('open');
    backdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileNav?.classList.remove('open');
    backdrop?.classList.remove('open');
    document.body.style.overflow = '';
  };

  toggleBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  backdrop?.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => link.addEventListener('click', closeDrawer));
}

/* ==========================================================================
   DYNAMIC SCROLLSPY SECTION HIGHLIGHTING (ROYAL HEADER ACCENT)
   ========================================================================== */
function initScrollSpy() {
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const desktopLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const mobileLinks = Array.from(document.querySelectorAll('.mobile-nav-link'));
  const allNavLinks = [...desktopLinks, ...mobileLinks];

  if (!sections.length || !allNavLinks.length) return;

  function updateActiveSection() {
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 82;
    const scrollPosition = window.scrollY + headerHeight + 70; // trigger offset
    const totalHeight = document.documentElement.scrollHeight;
    const windowBottom = window.scrollY + window.innerHeight;

    let currentSectionId = '';

    // If near the bottom of the page, prioritize highlighting the contact section
    if (windowBottom >= totalHeight - 70) {
      currentSectionId = 'contact';
    } else if (window.scrollY < 200) {
      currentSectionId = 'home';
    } else {
      // Find the section currently in view
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          currentSectionId = section.getAttribute('id');
          break;
        }
      }
    }

    if (!currentSectionId && sections.length) {
      currentSectionId = sections[0].getAttribute('id');
    }

    // Apply active class to matching nav links
    allNavLinks.forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href === `#${currentSectionId}` || href.endsWith(`#${currentSectionId}`)) {
        link.classList.add('active');
      } else if (href.includes('#')) {
        link.classList.remove('active');
      }
    });
  }

  // Smooth click scrolling with precise sticky header offset
  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetSection = document.querySelector(href);
        if (targetSection) {
          e.preventDefault();
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 82;
          const targetTop = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight + 2;
          window.scrollTo({
            top: targetTop,
            behavior: 'smooth'
          });

          // Optimistically update active state immediately
          allNavLinks.forEach(l => l.classList.remove('active'));
          link.classList.add('active');
        }
      }
    });
  });

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  window.addEventListener('resize', updateActiveSection, { passive: true });
  
  // Initial call
  updateActiveSection();
}

/* ==========================================================================
   HOCCO-STYLE "LET'S CONNECT" HERO FORM
   ========================================================================== */
function initHeroConnectForm() {
  const form = document.getElementById('heroConnectForm');
  const waBtn = document.getElementById('heroWaBtn');

  // Submit Handler
  form?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('heroSubmitBtn');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerText = 'SUBMITTING...';
    }

    const payload = {
      fullName: document.getElementById('heroName')?.value || '',
      email: document.getElementById('heroEmail')?.value || '',
      phone: document.getElementById('heroPhone')?.value || '',
      whatsapp: document.getElementById('heroPhone')?.value || '',
      city: document.getElementById('heroCity')?.value || 'Surat - Umragam',
      eventType: document.getElementById('heroOccasion')?.value || 'Birthday',
      services: [document.getElementById('heroService')?.value || 'All-In-One: Pure Veg Food + Soft Drinks + Decor'],
      guestCount: parseInt(document.getElementById('heroGuests')?.value || 100, 10),
      eventDate: document.getElementById('heroDate')?.value || '',
      timeSlot: 'Evening',
      venueStatus: 'Surat Venue Under Selection',
      dietary: '100% Pure Shuddh Shakahari (Soft Drinks Only)',
      decorTheme: 'Royal Rajwada & Ambient Lights',
      budgetTier: '5-Star Royal Experience',
      specialNotes: 'Submitted via Hocco-style Quick Connect Form'
    };

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      let leadData = null;
      if (response.ok) {
        const json = await response.json();
        leadData = json.lead;
      }

      const localLeads = JSON.parse(localStorage.getItem('kesariya_catering_leads') || '[]');
      const savedLead = leadData || {
        id: 'KES-' + Math.floor(10000 + Math.random() * 90000),
        timestamp: new Date().toISOString(),
        ...payload,
        status: 'New'
      };
      localLeads.unshift(savedLead);
      localStorage.setItem('kesariya_catering_leads', JSON.stringify(localLeads));

      showConfirmationModal(savedLead);
      form.reset();
      showToast("🎉 Details received! Bharatbhai Gajera will connect with you within 2 hours.");

    } catch (err) {
      console.warn('API submission fallback:', err);
      const localLeads = JSON.parse(localStorage.getItem('kesariya_catering_leads') || '[]');
      const fallbackLead = {
        id: 'KES-' + Math.floor(10000 + Math.random() * 90000),
        timestamp: new Date().toISOString(),
        ...payload,
        status: 'New'
      };
      localLeads.unshift(fallbackLead);
      localStorage.setItem('kesariya_catering_leads', JSON.stringify(localLeads));
      showConfirmationModal(fallbackLead);
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerText = 'SUBMIT';
      }
    }
  });

  // Direct WhatsApp Button Handler
  waBtn?.addEventListener('click', () => {
    const name = document.getElementById('heroName')?.value || 'Valued Guest';
    const phone = document.getElementById('heroPhone')?.value || '';
    const city = document.getElementById('heroCity')?.value || 'Surat';
    const occasion = document.getElementById('heroOccasion')?.value || 'Birthday';
    const service = document.getElementById('heroService')?.value || 'Food & Decor';
    const guests = document.getElementById('heroGuests')?.value || '100';
    const date = document.getElementById('heroDate')?.value || 'Upcoming Date';

    if (!name || name === 'Valued Guest' || !phone) {
      alert("Please fill in your Name and Phone Number first to initiate WhatsApp chat.");
      return;
    }

    const message = `👑 *NEW CELEBRATION INQUIRY - KESARIYA CATERING* 👑
------------------------------------------------
👤 *Client Name:* ${name}
📞 *Phone Number:* ${phone}
📍 *Area / Location:* ${city}
🎉 *Occasion:* ${occasion}
📅 *Event Date:* ${date}
👥 *Estimated Guests:* ${guests} Persons
🌿 *Dietary Standard:* 100% Pure Shuddh Shakahari
🍹 *Beverages:* Mocktails & Soft Drinks Only (Zero Alcohol)
💎 *Selected Service:* ${service}
------------------------------------------------
*Attention:* Bharatbhai Gajera (+91 8758538259)
*Office:* 263, Momai residency, umragam, surat-394130`;

    const waUrl = `https://wa.me/${KESARIYA_CONFIG.ownerWhatsAppDigits}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    showToast("Opening WhatsApp directly with Bharatbhai Gajera...");
  });
}

/* ==========================================================================
   INTERACTIVE COST ESTIMATOR
   ========================================================================== */
function initEstimator() {
  const guestsSlider = document.getElementById('calcGuests');
  const guestsVal = document.getElementById('calcGuestsVal');
  const occasionSelect = document.getElementById('calcOccasion');
  const tierSelect = document.getElementById('calcTier');
  const foodCheck = document.getElementById('calcFood');
  const bevCheck = document.getElementById('calcBeverage');
  const decorCheck = document.getElementById('calcDecor');
  const liveCheck = document.getElementById('calcLive');

  const estimatePrice = document.getElementById('estimatePrice');
  const estimatePerPerson = document.getElementById('estimatePerPerson');
  const applyBtn = document.getElementById('applyEstimateToFormBtn');

  function calculate() {
    const guests = parseInt(guestsSlider?.value || 150, 10);
    if (guestsVal) guestsVal.innerText = guests + " Guests";

    const tier = tierSelect?.value || 'gold';
    const rates = KESARIYA_CONFIG.baseTierRates[tier] || KESARIYA_CONFIG.baseTierRates.gold;

    let perPerson = 0;
    if (foodCheck?.checked) perPerson += rates.food;
    if (bevCheck?.checked) perPerson += rates.beverage;
    if (decorCheck?.checked) perPerson += rates.decor;
    if (liveCheck?.checked) perPerson += rates.live;

    if (perPerson === 0) perPerson = 650;

    const totalMin = Math.round((perPerson * guests * 0.95) / 500) * 500;
    const totalMax = Math.round((perPerson * guests * 1.15) / 500) * 500;

    if (estimatePrice) {
      estimatePrice.innerText = `₹${totalMin.toLocaleString('en-IN')} - ₹${totalMax.toLocaleString('en-IN')}`;
    }
    if (estimatePerPerson) {
      estimatePerPerson.innerText = `Approx. ₹${perPerson} per guest (${tier.toUpperCase()} Royal 5-Star Curation)`;
    }
  }

  guestsSlider?.addEventListener('input', calculate);
  occasionSelect?.addEventListener('change', calculate);
  tierSelect?.addEventListener('change', calculate);
  foodCheck?.addEventListener('change', calculate);
  bevCheck?.addEventListener('change', calculate);
  decorCheck?.addEventListener('change', calculate);
  liveCheck?.addEventListener('change', calculate);

  // Apply to Hero Connect Form
  applyBtn?.addEventListener('click', () => {
    const guests = guestsSlider?.value || '150';
    const occasion = occasionSelect?.value || 'Birthday';

    const heroGuests = document.getElementById('heroGuests');
    const heroOccasion = document.getElementById('heroOccasion');

    if (heroGuests) heroGuests.value = guests;
    if (heroOccasion) heroOccasion.value = occasion;

    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast("✨ Applied your preferences to the LET'S CONNECT form above!");
  });

  calculate();
}

/* ==========================================================================
   MENU EXPLORER
   ========================================================================== */
function initMenuExplorer() {
  const tabBtns = document.querySelectorAll('.menu-tab-btn');
  const itemsContainer = document.getElementById('menuItemsGrid');
  const dietFilter = document.getElementById('dietFilterSelect');

  let currentCategory = 'all';
  let currentDiet = 'all';

  function renderMenu() {
    if (!itemsContainer) return;

    const filtered = MENU_DATA.filter(item => {
      const matchCat = (currentCategory === 'all' || item.category === currentCategory);
      const matchDiet = (currentDiet === 'all' || item.diet.includes(currentDiet));
      return matchCat && matchDiet;
    });

    if (filtered.length === 0) {
      itemsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border-radius: 16px;">
          <p style="font-size: 1.1rem; color: #57534E;">Every item at Kesariya is 100% Pure Vegetarian. Contact Bharatbhai Gajera for custom menu creations!</p>
        </div>
      `;
      return;
    }

    itemsContainer.innerHTML = filtered.map(item => `
      <div class="menu-dish-card interactive-picture-card">
        <div class="motion-picture-wrap" style="border-radius: 14px; flex-shrink: 0;">
          <img src="${item.img}" alt="${item.name}" class="dish-img" loading="lazy">
        </div>
        <div class="dish-details">
          <div class="dish-header">
            <h4 class="dish-title">${item.name}</h4>
            <span class="badge-tag" style="background: rgba(197, 160, 89, 0.15); color: #916F2E; border: 1px solid rgba(197, 160, 89, 0.4); font-size: 0.68rem; padding: 2px 7px;">${item.tag}</span>
          </div>
          <p class="dish-desc">${item.desc}</p>
          <div class="dish-specialty">
            <span>👑 ${item.specialty}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category') || 'all';
      renderMenu();
    });
  });

  dietFilter?.addEventListener('change', (e) => {
    currentDiet = e.target.value;
    renderMenu();
  });

  renderMenu();
}

/* ==========================================================================
   CONFIRMATION MODAL & RECEIPT
   ========================================================================== */
function showConfirmationModal(lead) {
  const modal = document.getElementById('confirmationModal');
  const leadIdElem = document.getElementById('modalLeadId');
  const detailsElem = document.getElementById('modalLeadDetails');
  const waBtn = document.getElementById('modalWhatsAppBtn');

  if (leadIdElem) leadIdElem.innerText = lead.id || '#KES-SURAT';

  if (detailsElem) {
    detailsElem.innerHTML = `
      <div style="background: #FDFBF7; padding: 22px; border-radius: 14px; border: 1.5px solid #E7C980; margin: 18px 0; font-size: 0.92rem;">
        <p style="margin-bottom: 6px;"><strong>Host:</strong> ${lead.fullName}</p>
        <p style="margin-bottom: 6px;"><strong>Occasion:</strong> ${lead.eventType} &bull; ${lead.eventDate || 'Upcoming'} (${lead.guestCount} Guests)</p>
        <p style="margin-bottom: 6px;"><strong>Purity Policy:</strong> 🌿 100% Pure Vegetarian & Artisan Soft Drinks Only</p>
        <p style="margin-bottom: 6px;"><strong>Location:</strong> ${lead.city} &bull; ${lead.venueStatus || 'Surat'}</p>
        <p style="margin-bottom: 6px;"><strong>Services:</strong> ${Array.isArray(lead.services) ? lead.services.join(', ') : lead.services}</p>
        <p style="margin-bottom: 0;"><strong>Founder Contact:</strong> Bharatbhai Gajera (+91 8758538259)</p>
      </div>
    `;
  }

  if (waBtn) {
    waBtn.onclick = () => {
      const msg = `👑 *CELEBRATION INQUIRY CONFIRMATION - KESARIYA CATERING* 👑
Ref ID: ${lead.id}
Client: ${lead.fullName} (${lead.phone})
Occasion: ${lead.eventType} on ${lead.eventDate || 'Upcoming'} (${lead.guestCount} Guests)
Area: ${lead.city}
Standard: 100% Pure Vegetarian & Soft Drinks Only
Attn: Bharatbhai Gajera (+91 8758538259)`;
      window.open(`https://wa.me/${KESARIYA_CONFIG.ownerWhatsAppDigits}?text=${encodeURIComponent(msg)}`, '_blank');
    };
  }

  modal?.classList.add('open');
}

function closeConfirmationModal() {
  document.getElementById('confirmationModal')?.classList.remove('open');
}

function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => {
        i.classList.remove('active');
        const ans = i.querySelector('.faq-answer');
        if (ans) ans.style.maxHeight = null;
      });

      if (!isActive && answer) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  document.getElementById('closeConfirmModalBtn')?.addEventListener('click', closeConfirmationModal);
}

function initFloatingActions() {
  const floatWa = document.getElementById('floatWhatsAppBtn');
  floatWa?.addEventListener('click', (e) => {
    e.preventDefault();
    const text = encodeURIComponent("Namaste Bharatbhai! I would like to inquire about Kesariya Catering (100% Pure Veg & Decor) for our upcoming celebration in Surat.");
    window.open(`https://wa.me/${KESARIYA_CONFIG.ownerWhatsAppDigits}?text=${text}`, '_blank');
  });
}

function showToast(message) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>👑</span> <div>${message}</div>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.4s ease';
    setTimeout(() => toast.remove(), 400);
  }, 4500);
}
