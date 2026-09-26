/**
         * Page Navigation Function (SPA architecture)
         * Solves ReferenceError: navigateTo is not defined
         */
        function navigateTo(pageId) {
            // Hide all pages
            const pages = document.querySelectorAll('.page-section');
            pages.forEach(page => {
                page.classList.remove('active-page');
            });

            // Show selected page
            const targetPage = document.getElementById('page-' + pageId);
            if (targetPage) {
                targetPage.classList.add('active-page');
            }

            // Update Nav Active State
            const navLinks = document.querySelectorAll('.nav-btn');
            navLinks.forEach(link => {
                link.classList.remove('active');
            });

            const activeNav = document.getElementById('nav-' + pageId);
            if (activeNav) {
                activeNav.classList.add('active');
            }

            // Scroll to top smooth
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        /**
         * Close Mobile Offcanvas Menu
         */
        function closeOffcanvas() {
            const offcanvasEl = document.getElementById('mobileMenu');
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        }

        /**
         * Switch Language (UZ/RU state switcher)
         */
        function switchLang(lang) {
            document.getElementById('currentLang').innerText = lang;
            showToast(lang === 'UZ' ? 'Til Uzbekchaga o\'zgartirildi' : 'Язык изменен на Русский');
        }

        /**
         * Pricing Monthly / Yearly Toggle
         */
        function togglePricing() {
            const isYearly = document.getElementById('pricingToggle').checked;
            const priceValList = document.querySelectorAll('.price-val');
            const periodValList = document.querySelectorAll('.period-val');

            priceValList.forEach(el => {
                el.innerText = isYearly ? el.getAttribute('data-yearly') : el.getAttribute('data-monthly');
            });

            periodValList.forEach(el => {
                el.innerText = isYearly ? 'yil' : 'oy';
            });
        }

        /**
         * Program Filtering Logic
         */
        function filterPrograms() {
            const searchVal = document.getElementById('programSearch').value.toLowerCase();
            const diffVal = document.getElementById('diffSelect').value;
            const programCards = document.querySelectorAll('.program-card');

            programCards.forEach(card => {
                const title = card.querySelector('h5').innerText.toLowerCase();
                const diff = card.getAttribute('data-diff');

                const matchesSearch = title.includes(searchVal);
                const matchesDiff = (diffVal === 'all' || diff === diffVal);

                if (matchesSearch && matchesDiff) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        /**
         * Toast Notification Display
         */
        function showToast(message) {
            document.getElementById('toastMessage').innerText = message;
            const toastEl = document.getElementById('liveToast');
            const toast = new bootstrap.Toast(toastEl);
            toast.show();
        }

        /**
         * Newsletter Form Handler
         */
        function handleNewsletter(event) {
            event.preventDefault();
            showToast('Obuna muvaffaqiyatli yakunlandi!');
            event.target.reset();
        }

        /**
         * Contact Form Handler
         */
        function handleContactSubmit(event) {
            event.preventDefault();
            showToast('Xabaringiz qabul qilindi. Tez orada bog\'lanamiz!');
            event.target.reset();
        }

        /**
         * Authentication Modal Form Handler
         */
        function handleAuth(event, msg) {
            event.preventDefault();
            
            // Close any open modal
            const modals = document.querySelectorAll('.modal');
            modals.forEach(m => {
                const modalInstance = bootstrap.Modal.getInstance(m);
                if (modalInstance) modalInstance.hide();
            });

            showToast(msg);
        }

        /**
         * Open Program Details Modal
         */
        function openProgramModal(title, desc) {
            document.getElementById('pModalTitle').innerText = title;
            document.getElementById('pModalDesc').innerText = desc;
            const programModal = new bootstrap.Modal(document.getElementById('programModal'));
            programModal.show();
        }

        /**
         * Open Trainer Booking Modal
         */
        function openTrainerModal(name, role, exp) {
            document.getElementById('tModalTitle').innerText = name + ' bilan mashg\'ulot';
            document.getElementById('tModalInfo').innerText = role + ' • ' + exp;
            const trainerModal = new bootstrap.Modal(document.getElementById('trainerModal'));
            trainerModal.show();
        }

        /**
         * Open Blog Details Modal
         */
        function openBlogModal(title) {
            showToast('"' + title + '" maqolasi yuklanmoqda...');
        }