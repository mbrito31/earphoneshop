/* mostrar menu */
const navMenu = document.getElementById('nav--menu'),
  navToggle = document.getElementById('nav--toggle'),
  navClose = document.getElementById('nav--close');

/* condição se a constante existe */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

/* esconder menu */
/* condição se menu existe */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/* remover menu mobile */
const navLink = document.querySelectorAll('nav-link');

function linkActive() {
  const navMenu = document.getElementById('nav--menu');
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkActive));

/* mudar background do header */
function scrollHeader() {
  const header = document.getElementById('header');
  // quando o scroll for maior que 50vh, add uma classe scroll-header na tag header.
  if (this.scrollY >= 50) header.classList.add('scroll-header');
  else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/* mostrar scroll up */
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // quando o scroll for maior que 200 vh adiciona a classe show-scroll.
  if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/* ativar scroll sections */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/* scroll reveal animation */

const sr = ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 300,
  // reset: true
});

sr.reveal(`.home-header, .section-title`, { delay: 500 });
sr.reveal(`.home-footer`, { delay: 600 });
sr.reveal(`.home-image`, { delay: 800, origin: 'top' });

sr.reveal(
  `.sponsor-image, .products-card, .footer-logo, .footer-content, .footer-copy`,
  { origin: 'top', interval: 100 },
);
sr.reveal(`.specs-data, .discount-animate`, { origin: 'left', interval: 100 });
sr.reveal(`.specs-image, .discount-image`, { origin: 'right', interval: 100 });
sr.reveal(`.case-image`, { origin: 'top', interval: 100 });
sr.reveal(`.case-data`, { origin: 'bottom', interval: 100 });
