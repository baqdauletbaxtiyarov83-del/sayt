// DATA SOURCING
const programsData = [
  { id: 1, title: 'Kuch Asoslari', cat: 'kuch', level: 'Boshlang\'ich', duration: '8 hafta', sessions: '24 seans', price: '149 000 so\'m', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400', coach: 'Alisher Karimov' },
  { id: 2, title: 'Kardio Yangilanish', cat: 'kardio', level: 'O\'rta', duration: '6 hafta', sessions: '18 seans', price: '129 000 so\'m', img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?auto=format&fit=crop&q=80&w=400', coach: 'Malika Yusupova' },
  { id: 3, title: 'Yoga Boshlang\'ich', cat: 'yoga', level: 'Boshlang\'ich', duration: '12 hafta', sessions: '36 seans', price: '99 000 so\'m', img: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=400', coach: 'Dilnoza Rashidova' },
  { id: 4, title: 'Kuchli Yelkalar', cat: 'kuch', level: 'Yuqori', duration: '4 hafta', sessions: '12 seans', price: '139 000 so\'m', img: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400', coach: 'Alisher Karimov' },
  { id: 5, title: 'HIIT Yoqimli', cat: 'hiit', level: 'O\'rta', duration: '8 hafta', sessions: '20 seans', price: '179 000 so\'m', img: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=400', coach: 'Jasur Toshmatov' },
  { id: 6, title: 'Suzish Pro', cat: 'suzish', level: 'O\'rta', duration: '8 hafta', sessions: '20 seans', price: '199 000 so\'m', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&q=80&w=400', coach: 'Nodira Hamidova' }
];

const trainersData = [
  { id: 1, name: 'Dilnoza Rashidova', spec: 'Yoga & Meditatsiya', exp: '7 yil', rating: '5.0', price: '200 000', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=300' },
  { id: 2, name: 'Alisher Karimov', spec: 'Kuch & Bodybuilding', exp: '8 yil', rating: '4.9', price: '280 000', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300' },
  { id: 3, name: 'Nodira Hamidova', spec: 'Suzish & Aqua Fitness', exp: '10 yil', rating: '4.9', price: '300 000', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300' },
  { id: 4, name: 'Malika Yusupova', spec: 'Kardio & Aerobika', exp: '5 yil', rating: '4.8', price: '240 000', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300' },
  { id: 5, name: 'Jasur Toshmatov', spec: 'HIIT & Funksional', exp: '6 yil', rating: '4.7', price: '260 000', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300' },
  { id: 6, name: 'Sanjar Mirzayev', spec: 'Oziqlanish & Sog\'lom Turmush', exp: '4 yil', rating: '4.6', price: '180 000', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300' }
];

const blogData = [
  { id: 1, title: 'Proteinning To\'g\'ri Miqdori: Miflar va Haqiqatlar', cat: 'Oziq-ovqat', date: '12 Yanvar, 2024', author: 'Sanjar Mirzayev', img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: 'Yoga Orqali Stressni Kamaytiring: 10 Daqiqalik Dastur', cat: 'Yoga', date: '10 Yanvar, 2024', author: 'Dilnoza Rashidova', img: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Kardio vs Kuch: Qaysi Biri Yaxshiroq?', cat: 'Mashg\'ulot', date: '08 Yanvar, 2024', author: 'Alisher Karimov', img: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Uyqu — Eng Muhim Recovery Vositasi!', cat: 'Sog\'liq', date: '05 Yanvar, 2024', author: 'Sanjar Mirzayev', img: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&q=80&w=400' }
];

// SPA SECTION SWITCHING
document.addEventListener('DOMContentLoaded', () => {
  renderPrograms(programsData);
  renderTrainers(trainersData);
  renderBlog(blogData);

  // Navigation Links Binding
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSection = link.getAttribute('data-target');
      
      // Update Active Navigation
      navLinks.forEach(l => l.classList.remove('active'));
      document.querySelectorAll(`.nav-link[data-target="${targetSection}"]`).forEach(l => l.classList.add('active'));

      // Show Active Section
      document.querySelectorAll('.page-section').forEach(sec => sec.classList.remove('active'));
      const activeEl = document.getElementById(targetSection);
      if (activeEl) activeEl.classList.add('active');

      // Close mobile drawer if open
      closeMobileDrawer();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  // Mobile Drawer Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeDrawerBtn = document.getElementById('closeDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileDrawer = document.getElementById('mobileDrawer');

  function openMobileDrawer() {
    mobileDrawer.classList.add('open');
    drawerOverlay.classList.add('open');
  }

  function closeMobileDrawer() {
    mobileDrawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeMobileDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeMobileDrawer);

  // Language Dropdown Toggle
  const langBtn = document.getElementById('langBtn');
  const langMenu = document.getElementById('langMenu');
  const currentLang = document.getElementById('currentLang');

  langBtn.addEventListener('click', () => {
    langMenu.classList.toggle('show');
  });

  document.querySelectorAll('#langMenu a').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = item.getAttribute('data-lang');
      currentLang.textContent = lang;
      langMenu.classList.remove('show');
    });
  });

  // Program Category Filtering
  const filterTabs = document.querySelectorAll('.tab-btn, .filter-cat');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      const category = tab.getAttribute('data-category');
      
      filterTabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll(`[data-category="${category}"]`).forEach(t => t.classList.add('active'));

      if (category === 'all') {
        renderPrograms(programsData);
      } else {
        const filtered = programsData.filter(p => p.cat === category);
        renderPrograms(filtered);
      }
    });
  });

  // Program Search Filter
  const programSearch = document.getElementById('programSearch');
  if (programSearch) {
    programSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      const filtered = programsData.filter(p => p.title.toLowerCase().includes(term));
      renderPrograms(filtered);
    });
  }

  // FAQ Accordion
  const accHeaders = document.querySelectorAll('.acc-header');
  accHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;
      parent.classList.toggle('active');
    });
  });

  // Modal Functionality
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');

  if (modalClose) {
    modalClose.addEventListener('click', () => {
      modalOverlay.classList.remove('open');
    });
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.classList.remove('open');
    });
  }

  // Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Xabaringiz muvaffaqiyatli yuborildi!');
      contactForm.reset();
    });
  }
});

// RENDERERS
function renderPrograms(data) {
  const grid = document.getElementById('programsGrid');
  if (!grid) return;
  grid.innerHTML = data.map(item => `
    <div class="card open-modal-program" data-id="${item.id}">
      <div class="card-img-wrap">
        <img src="${item.img}" alt="${item.title}">
        <span class="badge badge-blue">${item.cat.toUpperCase()}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">Murabbiy: ${item.coach}</p>
        <div class="card-meta">
          <span><i class="fa-regular fa-clock"></i> ${item.duration}</span>
          <span><i class="fa-solid fa-signal"></i> ${item.level}</span>
        </div>
        <div class="card-footer-row">
          <span class="price">${item.price}</span>
          <button class="btn btn-outline" style="padding: 6px 14px; font-size: 12px;">Batafsil</button>
        </div>
      </div>
    </div>
  `).join('');

  // Attach dynamic modal handlers
  document.querySelectorAll('.open-modal-program').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const item = programsData.find(p => p.id == id);
      if (item) showProgramModal(item);
    });
  });
}

function renderTrainers(data) {
  const grid = document.getElementById('trainersGrid');
  if (!grid) return;
  grid.innerHTML = data.map(item => `
    <div class="card open-modal-trainer" data-id="${item.id}">
      <div class="card-img-wrap" style="height: 220px;">
        <img src="${item.img}" alt="${item.name}">
        <span class="badge badge-accent">Tajriba: ${item.exp}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.name}</h3>
        <p class="card-desc">${item.spec}</p>
        <div class="card-meta">
          <span><i class="fa-solid fa-star" style="color:#f59e0b"></i> ${item.rating}</span>
        </div>
        <div class="card-footer-row">
          <span class="price">${item.price} so'm/oy</span>
          <button class="btn btn-primary" style="padding: 6px 14px; font-size: 12px;">Buyurtma</button>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.open-modal-trainer').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const item = trainersData.find(t => t.id == id);
      if (item) showTrainerModal(item);
    });
  });
}

function renderBlog(data) {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = data.map(item => `
    <div class="card">
      <div class="card-img-wrap">
        <img src="${item.img}" alt="${item.title}">
        <span class="badge badge-blue">${item.cat}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-desc">Muallif: ${item.author}</p>
        <div class="card-footer-row">
          <span style="font-size: 12px; color: var(--text-muted);">${item.date}</span>
          <button class="btn btn-outline" style="padding: 4px 10px; font-size: 12px;">O'qish</button>
        </div>
      </div>
    </div>
  `).join('');
}

// MODAL RENDERERS
function showProgramModal(item) {
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <h2>${item.title}</h2>
    <img src="${item.img}" style="width:100%; height:200px; object-fit:cover; border-radius:12px; margin:16px 0;">
    <p><strong>Murabbiy:</strong> ${item.coach}</p>
    <p><strong>Davomiyligi:</strong> ${item.duration} (${item.sessions})</p>
    <p><strong>Daraja:</strong> ${item.level}</p>
    <p style="margin-top:12px;">Ushbu dastur orqali siz o'zingizning jismoniy holatingizni yangi bosqichga olib chiqishingiz va maqsadlaringizga tez va xavfsiz erishishingiz mumkin.</p>
    <h3 style="margin-top:16px; color:var(--primary-color);">${item.price}</h3>
    <button class="btn btn-primary full-btn" style="margin-top:20px;" onclick="alert('Ro\\'yxatdan o\\'tildi!')">Ro'yxatdan O'tish</button>
  `;
  document.getElementById('modalOverlay').classList.add('open');
}

function showTrainerModal(item) {
  const modalContent = document.getElementById('modalContent');
  modalContent.innerHTML = `
    <h2>${item.name}</h2>
    <p style="color:var(--text-muted);">${item.spec}</p>
    <img src="${item.img}" style="width:100%; height:220px; object-fit:cover; border-radius:12px; margin:16px 0;">
    <p><strong>Tajriba:</strong> ${item.exp}</p>
    <p><strong>Reyting:</strong> ${item.rating} / 5.0</p>
    <p style="margin-top:12px;">Professional yondashuv va har bir mijoz uchun individual tayyorlangan shaxsiy mashg'ulot dasturlari.</p>
    <h3 style="margin-top:16px; color:var(--primary-color);">${item.price} so'm / oy</h3>
    <button class="btn btn-primary full-btn" style="margin-top:20px;" onclick="alert('Murabbiy bilan bog\\'lanildi!')">Murabbiy bilan bog'lanish</button>
  `;
  document.getElementById('modalOverlay').classList.add('open');
}