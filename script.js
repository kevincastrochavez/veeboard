const menuIcon = document.getElementById('menuIcon');
const menu = document.querySelector('.header__right');
const nav = document.querySelector('nav');
const header = document.querySelector('header');
let openedMenu = false;

menuIcon.addEventListener('click', function () {
  openedMenu = !openedMenu;

  if (openedMenu) {
    menuIcon.src = './assets/close.svg';
    nav.classList.add('showMenu');

    const overlay = document.createElement('div');
    overlay.classList.add('overlayMenu');
    header.appendChild(overlay);

    overlay.addEventListener('click', function () {
      openedMenu = !openedMenu;
      menuIcon.src = './assets/menu.svg';
      nav.classList.remove('showMenu');

      overlay.remove();
    });
  } else {
    menuIcon.src = './assets/menu.svg';
    nav.classList.remove('showMenu');

    const overlay = document.querySelector('.overlayMenu');
    overlay.remove();
  }
});
