// PAGE SWITCHING FUNCTIONALITY (SPA Client-side Routing)
        function switchPage(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => page.classList.remove('active'));

            // Show targeted page
            const targetPage = document.getElementById('page-' + pageId);
            if (targetPage) {
                targetPage.classList.add('active');
            }

            // Update active state in Navigation Links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => link.classList.remove('active-nav'));

            const activeNav = document.getElementById('nav-' + pageId);
            if (activeNav) {
                activeNav.classList.add('active-nav');
            }

            // Scroll to top smooth
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // PRICE TOGGLE (Monthly / Yearly)
        function togglePricing() {
            const isYearly = document.getElementById('pricingToggle').checked;
            const priceElements = document.querySelectorAll('.price-amount');

            priceElements.forEach(el => {
                const monthly = el.getAttribute('data-monthly');
                const yearly = el.getAttribute('data-yearly');
                el.textContent = isYearly ? yearly : monthly;
            });
        }

        // GLOBAL SEARCH BAR FILTER
        function handleGlobalSearch(event) {
            const query = event.target.value.toLowerCase();
            if (query.trim() === '') return;

            if (event.key === 'Enter') {
                switchPage('programs');
                const cards = document.querySelectorAll('.program-card-item');
                cards.forEach(card => {
                    const title = card.querySelector('h5').textContent.toLowerCase();
                    if (title.includes(query)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            }
        }

        // PROGRAM CATEGORY FILTERING
        function filterProgramCategory(category) {
            const cards = document.querySelectorAll('.program-card-item');
            cards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // PROGRAM DIFFICULTY FILTERING
        function filterProgramCards() {
            const level = document.getElementById('difficultyFilter').value;
            const cards = document.querySelectorAll('.program-card-item');
            cards.forEach(card => {
                if (level === 'all' || card.getAttribute('data-level') === level) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        function filterPrograms(cat) {
            switchPage('programs');
            filterProgramCategory(cat);
        }

        // MODAL OPENERS & HANDLERS
        function openProgramModal(title, duration, count, trainer) {
            document.getElementById('modalProgTitle').textContent = title;
            document.getElementById('modalProgDuration').textContent = duration;
            document.getElementById('modalProgCount').textContent = count;
            document.getElementById('modalProgTrainer').textContent = trainer;

            const modal = new bootstrap.Modal(document.getElementById('programModal'));
            modal.show();
        }

        function submitEnrollment() {
            const modalEl = document.getElementById('programModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            showToast('Dasturga muvaffaqiyatli a\'zo bo\'ldingiz!');
        }

        function openTrainerModal(name, spec, exp, rating) {
            document.getElementById('modalTrainerName').textContent = name;
            document.getElementById('modalTrainerSpec').textContent = spec + ' (' + exp + ')';
            document.getElementById('modalTrainerRating').textContent = rating;

            const modal = new bootstrap.Modal(document.getElementById('trainerModal'));
            modal.show();
        }

        function confirmBooking() {
            const modalEl = document.getElementById('trainerModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            showToast('Murabbiy qabuliga mufaqqiyatli yozildingiz!');
        }

        function openBlogModal(title) {
            document.getElementById('modalBlogTitle').textContent = title;
            const modal = new bootstrap.Modal(document.getElementById('blogModal'));
            modal.show();
        }

        // NEWSLETTER & CONTACT FORM HANDLERS
        function handleNewsletter(e) {
            e.preventDefault();
            showToast('Azo bo\'lganingiz uchun rahmat!');
            e.target.reset();
        }

        function handleContactSubmit(e) {
            e.preventDefault();
            showToast('Xabaringiz qabul qilindi. Tez orada bog\'lanamiz!');
            e.target.reset();
        }

        function handleLogin(e) {
            e.preventDefault();
            const modalEl = document.getElementById('loginModal');
            const modal = bootstrap.Modal.getInstance(modalEl);
            if (modal) modal.hide();
            showToast('Tizimga muvaffaqiyatli kirdingiz!');
        }

        // LANGUAGE SWITCHER
        function changeLang(lang) {
            document.getElementById('langBtn').innerHTML = (lang === 'UZ' ? '🇺🇿 UZ' : '🇷🇺 RU');
            showToast('Til almashtirildi: ' + lang);
        }

        // TOAST DISPLAY HELPER
        function showToast(message) {
            document.getElementById('toastMessage').textContent = message;
            const toastEl = document.getElementById('liveToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }