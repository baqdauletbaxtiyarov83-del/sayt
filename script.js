// DATA STORAGE
const programsData = [
  {
    id: 1,
    title: "Kuch Asoslari",
    category: "kuch",
    trainer: "Alisher Karimov",
    duration: "8 hafta",
    sessions: "24 seans",
    price: "149 000 so'm",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500",
    desc: "Asosiy mushak guruhlarini rivojlantirish va kuch asoslarini o'rganish uchun mukammal dastur."
  },
  {
    id: 2,
    title: "Kardio Yangilanish",
    category: "kardio",
    trainer: "Malika Yusupova",
    duration: "6 hafta",
    sessions: "18 seans",
    price: "129 000 so'm",
    image: "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=500",
    desc: "Yurak-qon tomir tizimini mustahkamlash va yog' yoqish uchun intensiv kardio."
  },
  {
    id: 3,
    title: "Yoga Boshlang'ich",
    category: "yoga",
    trainer: "Dilnoza Rashidova",
    duration: "12 hafta",
    sessions: "36 seans",
    price: "99 000 so'm",
    image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500",
    desc: "Yoga asoslarini o'rganish, moslashuvchanlik va ichki tinchlikni topish."
  },
  {
    id: 4,
    title: "HIIT Yoqimli Yoqish",
    category: "hiit",
    trainer: "Jasur Toshmatov",
    duration: "4 hafta",
    sessions: "12 seans",
    price: "179 000 so'm",
    image: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500",
    desc: "Maksimal kaloriyalarni yoqish uchun intensiv interval mashg'ulotlar."
  },
  {
    id: 5,
    title: "Suzish Pro",
    category: "suzish",
    trainer: "Nodira Hamidova",
    duration: "8 hafta",
    sessions: "20 seans",
    price: "199 000 so'm",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=500",
    desc: "Suzish texnikasini takomillashtirish va suv aerobikasi mashqlari."
  }
];

const trainersData = [
  {
    name: "Dilnoza Rashidova",
    role: "Yoga & Meditatsiya",
    exp: "7 yil tajriba",
    rating: "4.9",
    reviews: "288",
    price: "200 000 so'm",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500"
  },
  {
    name: "Alisher Karimov",
    role: "Kuch & Bodybuilding",
    exp: "8 yil tajriba",
    rating: "4.9",
    reviews: "314",
    price: "280 000 so'm",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500"
  },
  {
    name: "Jasur Toshmatov",
    role: "HIIT & Funksional",
    exp: "6 yil tajriba",
    rating: "4.7",
    reviews: "152",
    price: "260 000 so'm",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500"
  }
];

const blogData = [
  {
    id: 1,
    title: "Proteinning To'g'ri Miqdori: Miftlar va Haqiqatlar",
    category: "Oziq-ovqat",
    author: "Sanjar Mirzayev",
    date: "12 Yanvar, 2024",
    readTime: "7 daqiqa",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500",
    desc: "Sport ovqatlanishida oqsillar o'rni haqida foydali ma'lumotlar."
  },
  {
    id: 2,
    title: "Yoga Orqali Stressni Kamaytiring: 10 Daqiqalik Dastur",
    category: "Yoga",
    author: "Dilnoza Rashidova",
    date: "10 Yanvar, 2024",
    readTime: "4 daqiqa",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500",
    desc: "Zamonaviy hayotning tez sur'atli stressidan xalos bo'lish usullari."
  }
];

// NAVIGATION SYSTEM
function switchTab(targetId) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.target === targetId);
  });

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.target === targetId);
  });

  document.querySelectorAll('.page-section').forEach(section => {
    section.classList.toggle('active', section.id === targetId);
  });

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.querySelectorAll('.nav-link, .mobile-nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.dataset.target;
    if (target) switchTab(target);
  });
});

// MOBILE MENU CONTROLS
const mobileToggle = document.getElementById('mobileToggle');
const closeMenu = document.getElementById('closeMenu');
const mobileMenu = document.getElementById('mobileMenu');
const mobileOverlay = document.getElementById('mobileOverlay');

function openMobileMenu() {
  mobileMenu.classList.add('active');
  mobileOverlay.classList.add('active');
}

function closeMobileMenu() {
  mobileMenu.classList.remove('active');
  mobileOverlay.classList.remove('active');
}

mobileToggle.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);
mobileOverlay.addEventListener('click', closeMobileMenu);

// DYNAMIC RENDERING: PROGRAMS
function renderPrograms(filter = 'all') {
  const container = document.getElementById('programsGrid');
  const filtered = filter === 'all' ? programsData : programsData.filter(p => p.category === filter);
  
  container.innerHTML = filtered.map(item => `
    <div class="card">
      <div class="card-image">
        <img src="${item.image}" alt="${item.title}">
        <span class="card-tag">${item.category.toUpperCase()}</span>
      </div>
      <div class="card-body">
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
        <div class="card-meta">
          <span class="price">${item.price}</span>
          <button class="btn btn-outline" onclick="openProgramModal(${item.id})">Batafsil</button>
        </div>
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderPrograms(tab.dataset.category);
  });
});

// DYNAMIC RENDERING: TRAINERS
function renderTrainers() {
  const container = document.getElementById('trainersGrid');
  container.innerHTML = trainersData.map(t => `
    <div class="card">
      <div class="card-image">
        <img src="${t.image}" alt="${t.name}">
        <span class="card-tag"><i class="fa-solid fa-star"></i> ${t.rating}</span>
      </div>
      <div class="card-body">
        <h3>${t.name}</h3>
        <p><strong>${t.role}</strong> • ${t.exp}</p>
        <div class="card-meta">
          <span class="price">${t.price} / oy</span>
          <button class="btn btn-primary" onclick="alert('Buyurtma saqlandi!')">Buyurtma</button>
        </div>
      </div>
    </div>
  `).join('');
}

// DYNAMIC RENDERING: BLOG
function renderBlog() {
  const container = document.getElementById('blogGrid');
  container.innerHTML = blogData.map(b => `
    <div class="card" onclick="openBlogModal(${b.id})">
      <div class="card-image">
        <img src="${b.image}" alt="${b.title}">
        <span class="card-tag">${b.category}</span>
      </div>
      <div class="card-body">
        <h3>${b.title}</h3>
        <p>${b.desc}</p>
        <small>${b.author} • ${b.date}</small>
      </div>
    </div>
  `).join('');
}

// FAQ ACCORDION INTERACTIVITY
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

// FORM SUBMISSION HANDLER
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Xabaringiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");
  e.target.reset();
});

// MODAL FUNCTIONALITY
const modal = document.getElementById('infoModal');
const closeModalBtn = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

function openProgramModal(id) {
  const program = programsData.find(p => p.id === id);
  if (!program) return;

  modalBody.innerHTML = `
    <h2>${program.title}</h2>
    <img src="${program.image}" style="width:100%; height:200px; object-fit:cover; border-radius:12px; margin: 15px 0;" />
    <p><strong>Murabbiy:</strong> ${program.trainer}</p>
    <p><strong>Davomiyligi:</strong> ${program.duration} (${program.sessions})</p>
    <p style="margin-top:10px;">${program.desc}</p>
    <h3 style="margin-top:20px; color:var(--primary);">${program.price}</h3>
    <button class="btn btn-primary full-width" style="margin-top:15px;" onclick="alert('Dasturga muvaffaqiyatli a\'zo bo\'ldingiz!'); closeModal();">A'zo bo'lish</button>
  `;
  modal.classList.add('active');
}

function openBlogModal(id) {
  modalBody.innerHTML = `
    <h2>Ertaga Boshlayman Deb Hech Narsa Qilmaslik: Motivatsiya Sirlari</h2>
    <p style="color:var(--text-muted); margin-bottom:15px;">15 Yanvar, 2024 • Jasur Toshmatov</p>
    <p>Motivatsiya — bu doimiy holat emas, balki harakatdan keyin keladigan his. Ko'pchilik motivatsiya paydo bo'lishini kutib, inert holatda qoladi. Aslida, avval harakat qilsangiz, motivatsiya o'z-o'zidan keladi.</p>
  `;
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// INITIALIZE APP
document.addEventListener('DOMContentLoaded', () => {
  renderPrograms();
  renderTrainers();
  renderBlog();
});