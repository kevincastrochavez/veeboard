const menuIcon = document.getElementById('menuIcon');
const menu = document.querySelector('.header__right');
const nav = document.querySelector('nav');
let openedMenu = false;

menuIcon.addEventListener('click', function () {
  openedMenu = !openedMenu;
  menuIcon.src = openedMenu ? './assets/close.svg' : './assets/menu.svg';

  openedMenu ? nav.classList.add('showMenu') : nav.classList.remove('showMenu');
});
