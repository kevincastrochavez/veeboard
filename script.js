const body = document.querySelector('body');

const menuIcon = document.getElementById('menuIcon');
const menu = document.querySelector('.header__right');
const nav = document.querySelector('nav');
const header = document.querySelector('header');

const cart = document.querySelector('.header__right');

let openedMenu = false;
let openedCart = false;

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

// cart.addEventListener('click', function () {
//   console.log('Clicking cart');
//   openedCart = !openedCart;

// });
