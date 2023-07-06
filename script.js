const body = document.querySelector('body');

const menuIcon = document.getElementById('menuIcon');
const menu = document.querySelector('.header__right');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

const cartIcon = document.getElementById('openCart');
const cart = document.querySelector('.header__cart');
const cartClose = document.getElementById('closeCart');

let openedMenu = false;

menuIcon.addEventListener('click', function () {
  openedMenu = !openedMenu;

  if (openedMenu) {
    body.style.overflowY = 'hidden';
    menuIcon.src = './assets/close.svg';
    nav.classList.add('showMenu');

    const overlay = document.createElement('div');
    overlay.classList.add('overlayMenu');
    header.appendChild(overlay);

    overlay.addEventListener('click', function () {
      openedMenu = !openedMenu;
      body.style.overflowY = 'unset';
      menuIcon.src = './assets/menu.svg';
      nav.classList.remove('showMenu');

      overlay.remove();
    });
  } else {
    body.style.overflow = 'unset';
    menuIcon.src = './assets/menu.svg';
    nav.classList.remove('showMenu');

    const overlay = document.querySelector('.overlayMenu');
    overlay.remove();
  }
});

cartIcon.addEventListener('click', function () {
  body.style.overflowY = 'hidden';
  cart.classList.add('showCart');
});

cartClose.addEventListener('click', function () {
  if (openedMenu) {
    openedMenu = !openedMenu;
    body.style.overflow = 'unset';
    menuIcon.src = './assets/menu.svg';
    nav.classList.remove('showMenu');

    const overlay = document.querySelector('.overlayMenu');
    overlay.remove();
  }

  body.style.overflowY = 'scroll';
  cart.classList.remove('showCart');
});
