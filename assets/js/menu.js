const menuToggle = document.querySelector('.mobile-menu-toggle');
const topNav = document.querySelector('#top-nav');

if (menuToggle && topNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = topNav.classList.toggle('is-open');
    menuToggle.classList.toggle('is-open', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  topNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      topNav.classList.remove('is-open');
      menuToggle.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}
