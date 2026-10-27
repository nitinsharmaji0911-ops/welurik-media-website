/**
 * WELURIK MEDIA — PROTOTYPE CONTROLLER
 * E-commerce style interactive behavior for high-conversion media agency website
 */

// Portfolio Items Database
const PORTFOLIO_DATA = [
  {
    id: "proj-1",
    category: "cro",
    categoryName: "Shopify & CRO Funnels",
    badge: "18.8% Conv Rate ⚡",
    title: "National EdTech Funnel & Shopify Storefront",
    subtitle: "Turnkey Architecture & Passwordless OTP Integration",
    metricNum: "313K+",
    metricLabel: "Store Views",
    metricSecond: "9,980+ Leads",
    shippingTag: "Turnkey Funnel Architecture ⚡",
    turnaround: "14 Days Deployment",
    image: "./assets/proof/shopify_submissions.webp",
    description: "Built custom high-converting Shopify storefront for 1M+ YouTube subscriber EdTech brand. Integrated passwordless OTP login via SMS & WhatsApp to eliminate checkout drop-offs, with YouTube Shopping sync and Microsoft Clarity conversion heatmaps.",
    problem: "Massive organic audience on YouTube with high drop-off during traditional password registration and checkout.",
    solution: "Eliminated checkout friction with custom passwordless OTP login, YouTube Shopping shelf integration, and GA4 event tracking.",
    results: ["313K+ Verified Store Views", "9,980+ Student Leads Generated", "18.8% Paid Checkout Conversion Rate"]
  },
  {
    id: "proj-2",
    category: "performance",
    categoryName: "Performance Marketing",
    badge: "71.2M Impressions ⚡",
    title: "Nationwide High-Volume Lead Gen Machine",
    subtitle: "Google Search & Display Ads at Scale",
    metricNum: "155K+",
    metricLabel: "Lead Submissions",
    metricSecond: "₹10.66 Avg CPL",
    shippingTag: "Performance Retainer ⚡",
    turnaround: "Continuous Scale",
    image: "./assets/proof/google_ads_dashboard.webp",
    description: "Engineered ultra-targeted Google Ads lead acquisition machine for high-volume B2C manufacturer. Cleaned placement hygiene, eliminated low-intent mobile gaming traffic, and deployed automated instant lead routing.",
    problem: "Ad spend wasted on spam click-farms and generic search queries with escalating cost per acquisition.",
    solution: "Rigorous negative placement lists, demographic segmentation, and automated Lead Form API webhooks.",
    results: ["71.2 Million Ad Impressions", "155,000+ Verified Leads", "₹10.66 Average Cost Per Qualified Lead"]
  },
  {
    id: "proj-3",
    category: "brand",
    categoryName: "Corporate Web Platform",
    badge: "B2B Solar EPC ⚡",
    title: "SM Engineering Corporate Platform & Lead Engine",
    subtitle: "High-Ticket B2B Contracting Digital Presence",
    metricNum: "100%",
    metricLabel: "Regional Dominance",
    metricSecond: "Commercial B2B",
    shippingTag: "Full Custom Deployment ⚡",
    turnaround: "21 Days Deployment",
    image: "./assets/proof/sm_engineering.jpg",
    description: "Architected modern digital presence for Chandrapur's premier Solar EPC and fire safety engineering enterprise. Designed interactive project showcases, commercial cost-saving calculators, and direct quote workflows.",
    problem: "Outdated brand presence failing to establish trust with multi-crore industrial and government clients.",
    solution: "High-authority industrial design, project gallery with drone footage integration, and instant RFP generator.",
    results: ["Premier Regional Authority", "3x Increase in High-Ticket EPC Inquiries", "100% Mobile & Desktop Performance Score"]
  },
  {
    id: "proj-4",
    category: "brand",
    categoryName: "Creator Incubation & Media",
    badge: "Intellectual IP ⚡",
    title: "The Ketan Singh Creator System",
    subtitle: "Intellectual Thought Leadership & Audience IP",
    metricNum: "13+",
    metricLabel: "Deck Modules",
    metricSecond: "Omnichannel Scale",
    shippingTag: "Full Media Incubation ⚡",
    turnaround: "Quarterly Roadmap",
    image: "./assets/pitch/cover.png",
    description: "End-to-end positioning roadmap and multi-platform content distribution framework designed to establish India's next intellectual creator brand across YouTube, Spotify, and newsletter funnels.",
    problem: "High-value insights trapped in unoptimized formatting without systemic distribution channels.",
    solution: "Built comprehensive strategic pitch, content repurposing engine, and intellectual monetization funnels.",
    results: ["Complete Brand Identity & Deck", "Multi-tier Monetization Pipeline", "Streamlined Production Architecture"]
  },
  {
    id: "proj-5",
    category: "automation",
    categoryName: "Lead Automation & Bots",
    badge: "0-Second Latency ⚡",
    title: "n8n WhatsApp Instant Lead Routing Engine",
    subtitle: "Automated CRM Sync & Sales Notification",
    metricNum: "< 30s",
    metricLabel: "Response Latency",
    metricSecond: "Zero Leakage",
    shippingTag: "Automation Integration ⚡",
    turnaround: "7 Days Deployment",
    image: "./assets/proof/audience_persona_sheet.webp",
    description: "Built custom serverless n8n pipelines capturing leads from Meta & Google Ads, enriching numbers via WhatsApp API, and pushing warm prospects directly to the sales team's WhatsApp within 10 seconds.",
    problem: "Sales representatives contacting prospects hours later, leading to 60%+ lead abandonment.",
    solution: "Instant automated WhatsApp greeting with dynamic brochure PDF and calendar booking link.",
    results: ["0-Second Response Delay", "42% Increase in Lead-to-Call Conversion", "Eliminated Manual Entry Errors"]
  },
  {
    id: "proj-6",
    category: "video",
    categoryName: "Commercial Video Production",
    badge: "Viral Reel Campaign ⚡",
    title: "F&B Viral Growth Commercial: Pohawala",
    subtitle: "High-Retention Short-Form & Visual Hook",
    metricNum: "3.2M+",
    metricLabel: "Organic Views",
    metricSecond: "45K Shares",
    shippingTag: "Studio Video Production ⚡",
    turnaround: "Batch Delivery",
    image: "./assets/blog/social_media.webp",
    videoFile: "./videos/POHAWALA.mp4",
    description: "Produced cinematic food commercial leveraging high-speed macro cinematography and sensory sound design, driving massive viral curiosity and local franchise walk-ins.",
    problem: "Commoditized breakfast brand struggling to stand out on social algorithms.",
    solution: "Sensory cinema hooks, dynamic pacing, and hyper-local storytelling.",
    results: ["3.2M+ Total Organic Views", "45,000+ Instagram Shares", "280% Footfall Spike in Week 1"]
  },
  {
    id: "proj-7",
    category: "video",
    categoryName: "Brand Commercials",
    badge: "Consumer Trust ⚡",
    title: "Bajaj Consumer Commercial Film",
    subtitle: "Cinema Production & Narrative Advertising",
    metricNum: "1.8M+",
    metricLabel: "Total Reach",
    metricSecond: "82% Retention",
    shippingTag: "Cinematic Film ⚡",
    turnaround: "Full Post-Production",
    image: "./assets/blog/paid_ads.webp",
    videoFile: "./videos/Bajaj Oil.mp4",
    description: "Scripted, shot, and color-graded high-production consumer commercial highlighting product purity and heritage with premium cinematic lighting.",
    problem: "Need for television-grade commercial assets without typical multi-crore agency agency bloat.",
    solution: "Agile high-end cinema crew, DaVinci Resolve color workflow, and multi-format aspect ratio exports.",
    results: ["Broadcast-Ready Master", "82% Video Completion Rate", "Multi-Platform Ad Asset Suite"]
  },
  {
    id: "proj-8",
    category: "cro",
    categoryName: "High-Ticket UI/UX",
    badge: "High-Conversion UI ⚡",
    title: "Precision Landing Page & Funnel System",
    subtitle: "Modern Kinetic Typography & Fast Load Times",
    metricNum: "99/100",
    metricLabel: "PageSpeed Score",
    metricSecond: "< 1.2s Load",
    shippingTag: "Custom Web Build ⚡",
    turnaround: "10 Days Deployment",
    image: "./assets/blog/web_design.webp",
    description: "Engineered ultra-fast landing pages with sub-second load times, interactive SVG data widgets, and micro-copy engineered for maximum psychological conversion pull.",
    problem: "Heavy WordPress pages loading in 5+ seconds causing 40% bounce rates on paid traffic.",
    solution: "Clean static HTML/React architecture, asset compression, and mobile-first tap targets.",
    results: ["Sub-1.2s Total Page Load", "Reduced Bounce Rate to Under 18%", "Direct Lift in Ad ROAS"]
  }
];

// App State
let state = {
  briefItems: [],
  favoritedIds: new Set(),
  activeFilter: 'all',
  currentHeroIndex: 0,
  theme: localStorage.getItem('welurik_theme') || 'light'
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderPortfolioGrid(state.activeFilter);
  initHeroSlider();
  initEventListeners();
  updateBriefUI();
});

// Theme Management
function initTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  const themeToggle = document.getElementById('theme-toggle-btn');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      localStorage.setItem('welurik_theme', state.theme);
    });
  }
}

// Hero Slider
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  const prevBtn = document.getElementById('hero-prev-btn');
  const nextBtn = document.getElementById('hero-next-btn');
  
  if (!slides.length) return;

  function showSlide(index) {
    slides.forEach((s, i) => s.classList.toggle('active', i === index));
    dots.forEach((d, i) => d.classList.toggle('active', i === index));
    state.currentHeroIndex = index;
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextIdx = (state.currentHeroIndex + 1) % slides.length;
      showSlide(nextIdx);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      const prevIdx = (state.currentHeroIndex - 1 + slides.length) % slides.length;
      showSlide(prevIdx);
    });
  }

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-slide-index'), 10);
      showSlide(idx);
    });
  });

  // Auto rotate every 7 seconds
  setInterval(() => {
    const nextIdx = (state.currentHeroIndex + 1) % slides.length;
    showSlide(nextIdx);
  }, 7000);
}

// Render Portfolio Grid
function renderPortfolioGrid(filter) {
  const container = document.getElementById('portfolio-grid-container');
  if (!container) return;

  const items = filter === 'all' 
    ? PORTFOLIO_DATA 
    : PORTFOLIO_DATA.filter(p => p.category === filter);

  container.innerHTML = items.map(item => {
    const isFav = state.favoritedIds.has(item.id);
    const inBrief = state.briefItems.some(b => b.id === item.id);

    return `
      <div class="product-portfolio-card" data-id="${item.id}" onclick="openQuickView('${item.id}')">
        <div class="card-media-wrap">
          <div class="card-badge-top">
            <span>⚡</span> ${item.badge}
          </div>
          
          <button class="card-favorite-btn ${isFav ? 'favorited' : ''}" 
                  onclick="event.stopPropagation(); toggleFavorite('${item.id}', this)" 
                  title="Save to Wishlist">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <img src="${item.image}" alt="${item.title}" loading="lazy" />

          <div class="card-hover-actions" onclick="event.stopPropagation()">
            <button class="btn-card-action" onclick="openQuickView('${item.id}')">
              QUICK VIEW
            </button>
            <button class="btn-card-action outline ${inBrief ? 'added' : ''}" 
                    onclick="toggleItemInBrief('${item.id}')">
              ${inBrief ? '✓ IN BRIEF' : '＋ ADD TO BRIEF'}
            </button>
          </div>
        </div>

        <div class="card-info">
          <div class="card-shipping-tag">
            <span class="lightning">⚡</span> ${item.shippingTag}
          </div>
          <h3 class="card-title">${item.title}</h3>
          <div class="card-metric-highlight">${item.metricNum} ${item.metricLabel}</div>
          <div class="card-category-sub">${item.categoryName}</div>
        </div>
      </div>
    `;
  }).join('');
}

// Filter Portfolio
window.filterPortfolio = function(category) {
  state.activeFilter = category;
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-filter') === category);
  });
  renderPortfolioGrid(category);
};

// Wishlist / Favorite
window.toggleFavorite = function(id, btn) {
  if (state.favoritedIds.has(id)) {
    state.favoritedIds.delete(id);
    btn.classList.remove('favorited');
  } else {
    state.favoritedIds.add(id);
    btn.classList.add('favorited');
  }
  const favCount = document.getElementById('fav-count-badge');
  if (favCount) {
    favCount.textContent = state.favoritedIds.size;
  }
};

// Project Brief Drawer Management
window.toggleItemInBrief = function(id) {
  const existingIndex = state.briefItems.findIndex(b => b.id === id);
  if (existingIndex > -1) {
    state.briefItems.splice(existingIndex, 1);
  } else {
    const item = PORTFOLIO_DATA.find(p => p.id === id);
    if (item) {
      state.briefItems.push(item);
    }
  }
  updateBriefUI();
  renderPortfolioGrid(state.activeFilter);
};

window.addDeliverableToBrief = function(name, category, turnaround) {
  const id = 'deliv-' + name.toLowerCase().replace(/[^a-z0-9]/g, '-');
  const existingIndex = state.briefItems.findIndex(b => b.id === id);
  if (existingIndex > -1) {
    state.briefItems.splice(existingIndex, 1);
  } else {
    state.briefItems.push({
      id: id,
      title: name,
      categoryName: category,
      turnaround: turnaround
    });
  }
  updateBriefUI();
  openBriefDrawer();
};

function updateBriefUI() {
  const countEl = document.getElementById('brief-count-badge');
  if (countEl) {
    countEl.textContent = state.briefItems.length;
  }

  const container = document.getElementById('drawer-items-list');
  const emptyState = document.getElementById('drawer-empty-state');
  const footerEl = document.getElementById('drawer-footer-actions');

  if (!container) return;

  if (state.briefItems.length === 0) {
    container.innerHTML = '';
    if (emptyState) emptyState.style.display = 'block';
    if (footerEl) footerEl.style.display = 'none';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (footerEl) footerEl.style.display = 'flex';

    container.innerHTML = state.briefItems.map((item, index) => `
      <div class="brief-item-row">
        <div class="brief-item-details">
          <div class="brief-item-title">${item.title}</div>
          <div class="brief-item-category">${item.categoryName} • ${item.turnaround || 'Standard'}</div>
        </div>
        <button class="brief-item-remove-btn" onclick="removeItemFromBrief(${index})" title="Remove item">
          ✕
        </button>
      </div>
    `).join('');
  }
}

window.removeItemFromBrief = function(index) {
  state.briefItems.splice(index, 1);
  updateBriefUI();
  renderPortfolioGrid(state.activeFilter);
};

window.openBriefDrawer = function() {
  const overlay = document.getElementById('brief-drawer-overlay');
  if (overlay) overlay.classList.add('open');
};

window.closeBriefDrawer = function() {
  const overlay = document.getElementById('brief-drawer-overlay');
  if (overlay) overlay.classList.remove('open');
};

// WhatsApp Direct Proposal Generator (Zero Hustle)
window.sendBriefToWhatsApp = function() {
  const name = document.getElementById('client-name')?.value.trim() || 'A Founder / Marketing Lead';
  const brand = document.getElementById('client-brand')?.value.trim() || 'My Brand';
  const phone = document.getElementById('client-phone')?.value.trim() || '';

  if (state.briefItems.length === 0) {
    alert('Please select at least one portfolio service or case study to include in your brief!');
    return;
  }

  const itemsList = state.briefItems.map(item => `• ${item.title} (${item.categoryName})`).join('\n');
  const message = `👋 Hey Welurik Team!

I reviewed your portfolio prototype and want to discuss scaling *${brand}*.

*Selected Deliverables / Target Models:*
${itemsList}

*Contact Details:*
• Name: ${name}
${phone ? `• Phone: ${phone}` : ''}

Please share the available onboarding slots and estimated timeline. Looking forward to connecting!`;

  const url = `https://wa.me/918421706305?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
};

window.submitProposalForm = function(e) {
  if (e) e.preventDefault();
  const name = document.getElementById('client-name')?.value.trim();
  const phone = document.getElementById('client-phone')?.value.trim();

  if (!name || !phone) {
    alert('Please enter your Name and WhatsApp / Phone number to receive the custom scope.');
    return;
  }

  alert(`Thank you, ${name}! Your project brief with ${state.briefItems.length} selected modules has been recorded. Our growth director will reach out within 30 minutes with NDA and scope breakdown.`);
  closeBriefDrawer();
};

// Quick View Modal
window.openQuickView = function(id) {
  const item = PORTFOLIO_DATA.find(p => p.id === id);
  if (!item) return;

  const modal = document.getElementById('quickview-modal-overlay');
  const imgEl = document.getElementById('qv-img');
  const indEl = document.getElementById('qv-industry');
  const titleEl = document.getElementById('qv-title');
  const m1Num = document.getElementById('qv-m1-num');
  const m1Label = document.getElementById('qv-m1-label');
  const m2Num = document.getElementById('qv-m2-num');
  const m2Label = document.getElementById('qv-m2-label');
  const m3Num = document.getElementById('qv-m3-num');
  const m3Label = document.getElementById('qv-m3-label');
  const descEl = document.getElementById('qv-description');
  const probEl = document.getElementById('qv-problem');
  const solEl = document.getElementById('qv-solution');
  const addBtn = document.getElementById('qv-add-brief-btn');

  if (imgEl) imgEl.src = item.image;
  if (indEl) indEl.textContent = item.categoryName;
  if (titleEl) titleEl.textContent = item.title;
  if (m1Num) m1Num.textContent = item.metricNum;
  if (m1Label) m1Label.textContent = item.metricLabel;
  if (m2Num) m2Num.textContent = item.metricSecond;
  if (m2Label) m2Label.textContent = "Verified Output";
  if (m3Num) m3Num.textContent = item.turnaround;
  if (m3Label) m3Label.textContent = "Delivery Window";
  if (descEl) descEl.textContent = item.description;
  if (probEl) probEl.textContent = item.problem;
  if (solEl) solEl.textContent = item.solution;

  if (addBtn) {
    const inBrief = state.briefItems.some(b => b.id === item.id);
    addBtn.textContent = inBrief ? "✓ IN YOUR BRIEF" : "＋ ADD THIS TO MY BRIEF";
    addBtn.onclick = () => {
      toggleItemInBrief(item.id);
      addBtn.textContent = state.briefItems.some(b => b.id === item.id) ? "✓ IN YOUR BRIEF" : "＋ ADD THIS TO MY BRIEF";
    };
  }

  if (modal) modal.classList.add('open');
};

window.closeQuickView = function() {
  const modal = document.getElementById('quickview-modal-overlay');
  if (modal) modal.classList.remove('open');
};

// Video Lightbox Player
window.openVideoLightbox = function(videoSrc, title) {
  const modal = document.getElementById('video-modal-overlay');
  const video = document.getElementById('lightbox-video-player');
  const titleEl = document.getElementById('video-lightbox-title');

  if (video) {
    video.src = videoSrc;
    video.play().catch(() => {});
  }
  if (titleEl) titleEl.textContent = title;
  if (modal) modal.classList.add('open');
};

window.closeVideoLightbox = function() {
  const modal = document.getElementById('video-modal-overlay');
  const video = document.getElementById('lightbox-video-player');
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
  if (modal) modal.classList.remove('open');
};

// Global Listeners
function initEventListeners() {
  // Close modals on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeBriefDrawer();
      closeQuickView();
      closeVideoLightbox();
    }
  });

  // Mobile menu toggle
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      const navLinks = document.querySelector('.desktop-nav-links');
      if (navLinks) {
        navLinks.classList.toggle('mobile-open');
      }
    });
  }
}
