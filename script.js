const initBootstrap = () => {
  const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.forEach((tooltipTriggerEl) => {
    new bootstrap.Tooltip(tooltipTriggerEl);
  });

  document.querySelectorAll('[data-toast]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const targetToast = document.getElementById(form.dataset.toast === 'newsletter' ? 'formToast' : 'contactToast');
      if (targetToast) {
        const toast = new bootstrap.Toast(targetToast);
        toast.show();
      }
      form.reset();
    });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initBootstrap();

  const page = document.body.dataset.page;
  document.querySelectorAll('.nav-link').forEach((link) => {
    const activeLink = link.dataset.page === page;
    link.classList.toggle('active', activeLink);
  });

  document.querySelectorAll('.list-group-item-action').forEach((link) => {
    const isActive = link.getAttribute('href') && link.getAttribute('href').includes(page + '.html');
    link.classList.toggle('active', isActive);
  });
});
