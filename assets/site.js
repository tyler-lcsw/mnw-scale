const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.nav-links');

if (menuButton && navigation) {
  const setMenu = (open) => {
    navigation.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  };

  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenu(false);
  });
}

const consultationTarget = window.location.pathname.endsWith('/index.html') || window.location.pathname.endsWith('/')
  ? '#contact'
  : 'index.html#contact';

if (!document.querySelector('.mobile-consultation-bar')) {
  const consultationBar = document.createElement('div');
  consultationBar.className = 'mobile-consultation-bar';
  consultationBar.innerHTML = `<a class="button button-primary" href="${consultationTarget}">Schedule a free consultation</a>`;
  document.body.append(consultationBar);
}
