import { loadHeader } from './utilities.js';

loadHeader();

const categoriesArray = [
  {
    category: 'Brick Guards',
    link: 'brickGuards',
    imageUrl: './assets/brick.jpg',
    altImage: 'Brick category',
  },
  {
    category: 'Steel Corners',
    link: 'steelCorners',
    imageUrl: './assets/steel.jpg',
    altImage: 'Steel Corners category',
  },
  {
    category: 'Rachets & Straps',
    link: 'brickGuards',
    imageUrl: './assets/strap.jpg',
    altImage: 'Strap category',
  },
  {
    category: 'Winches',
    link: 'winches',
    imageUrl: './assets/winch.jpg',
    altImage: 'Winches category',
  },
];

// Category template
const categoryHtml = (categories) => {
  const result = categories.map((category) => {
    return `<a href="/${category.link}" class="homeGrid__category">
      <h3>${category.category}</h3>

      <img src="${category.imageUrl}" alt="${category.altImage}" />

      <div class="homeGrid__category-overlay"></div>
    </a>`;
  });

  return result;
};

const categoriesContainer = document.querySelector('.homeGrid__categories');

// Injecting categories into DOM
const categoriesHtml = categoryHtml(categoriesArray).join(' ');
categoriesContainer.innerHTML = categoriesHtml;
