import AOS from 'aos';
import 'aos/dist/aos.css';

// init AOS animation
AOS.init({
  duration: 1000,
  offset: 100,
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.header__menu-hamburger');
  hamburger.addEventListener('click', showMenu);
});

document.addEventListener('DOMContentLoaded', () => {
  const sideMenuHamburger = document.querySelector(
    '.header__menu-mobile-hamburger'
  );
  sideMenuHamburger.addEventListener('click', hideMenu);
});

function showMenu() {
  var mobileMenu = document.querySelector('.header__menu-mobile');
  mobileMenu.classList.add('mobile-menu-show');
}

function hideMenu() {
  var mobileMenu = document.querySelector('.header__menu-mobile');
  mobileMenu.classList.remove('mobile-menu-show');
}
