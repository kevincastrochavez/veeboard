// Dynamic links
const linksArray = [
  {
    pageName: 'Home',
    path: '',
  },
  {
    pageName: 'Winches',
    path: '/winches',
  },
  {
    pageName: 'Steel Corners',
    path: '/steelCorners',
  },
  {
    pageName: 'Brick Guards',
    path: '/brickGuards',
  },
  {
    pageName: 'Rachets & Straps',
    path: '/straps',
  },
];

// Template code for the header
const headerHtml = `
  <div class="header__wrapper">
    <a href="/"><img src="/assets/veeboard.jpg" alt="VeeBoards Logo" /></a>

    <div class="header__right">
      <img
        id="openCart"
        src="/assets/cart.svg"
        alt="Cart Icon for reviewing the cart"
      />

      <img
        id="menuIcon"
        src="/assets/menu.svg"
        alt="Menu Hamburger Icon"
      />
    </div>

    <nav>
    </nav>

    <section class="header__cart">
      <div class="header__cart-top">
        <h2>Cart Contents</h2>

        <img
          id="closeCart"
          src="/assets/close.svg"
          alt="Closing icon for cart"
        />
      </div>

      <div class="header__cart-products"></div>

      <div class="header__cart-bottom">
        <a href="/cart">View Cart</a>
      </div>
    </section>
  </div>
`;

// Template code for the cart items in the header
const headerCartHtml = (products) => {
  const result = products.map((product) => {
    return `<section class="header__cart-product">
      <img src="${product.imageUrl}" alt="${product.description}" />
      <h4>${product.description}</h4>
      <p>$<span>${product.price}</span></p>
      <div class="header__cart-quantity">
        <img
          src="/assets/minus.svg"
          alt="Icon for decreasing quantity of product"
        />
    
        <p>${product.quantity}</p>
    
        <img
          src="/assets/plus.svg"
          alt="Icon for increasing quantity of product"
        />
      </div>
    </section>`;
  });

  return result;
};

// Fetching products from 'server' (fetch them from the session)
const productsResponse = await fetch('../products.json');
const productsData = await productsResponse.json();

// HTML with products ready to be injected
const productsInHeaderCart = headerCartHtml(productsData).join(' ');

export function loadHeader() {
  const currentPageUrl = window.location.href.split('/').pop();

  window.addEventListener('load', () => {
    // Inject header code into header tag
    const headerContainer = document.getElementById('header');
    headerContainer.innerHTML = headerHtml;

    // Grabbing DOM elements
    const body = document.querySelector('body');

    const menuIcon = document.getElementById('menuIcon');
    const nav = document.querySelector('nav');
    const header = document.querySelector('header');

    const cartIcon = document.getElementById('openCart');
    const cart = document.querySelector('.header__cart');
    const cartProductsContainer = document.querySelector(
      '.header__cart-products'
    );
    const cartClose = document.getElementById('closeCart');

    let openedMenu = false;

    // Injecting links into nav
    const dynamicLinksArray = linksArray.map(
      (link) =>
        `<a ${currentPageUrl === link.path && 'class="active"'} href="${
          link.path
        }">${link.pageName}</a>`
    );
    nav.innerHTML = dynamicLinksArray.join(' ');

    // Injecting products into header cart
    cartProductsContainer.innerHTML = productsInHeaderCart;

    // Clicking menu
    menuIcon.addEventListener('click', function () {
      openedMenu = !openedMenu;

      if (openedMenu) {
        body.style.overflowY = 'hidden';
        menuIcon.src = '/assets/close.svg';
        nav.classList.add('showMenu');

        const overlay = document.createElement('div');
        overlay.classList.add('overlayMenu');
        header.appendChild(overlay);

        overlay.addEventListener('click', function () {
          openedMenu = !openedMenu;
          body.style.overflowY = 'unset';
          menuIcon.src = '/assets/menu.svg';
          nav.classList.remove('showMenu');

          overlay.remove();
        });
      } else {
        body.style.overflow = 'unset';
        menuIcon.src = '/assets/menu.svg';
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
        menuIcon.src = '/assets/menu.svg';
        nav.classList.remove('showMenu');

        const overlay = document.querySelector('.overlayMenu');
        overlay.remove();
      }

      body.style.overflowY = 'scroll';
      cart.classList.remove('showCart');
    });
  });
}