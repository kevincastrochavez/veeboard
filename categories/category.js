import { loadHeader, getCategoryParam } from '../js/utilities.js';

loadHeader();

const categoriesText = [
  {
    heading: 'Winches',
    categoryPath: 'winches',
    subheading:
      'Made in the USA - 100% guaranteed against failure. Best winches in America',
  },
  {
    heading: 'Steel Corners',
    categoryPath: 'steelCorners',
    subheading:
      'Made in the USA - 100% guaranteed against failure. Best Steel Corners in America',
  },
  {
    heading: 'Brick Guards',
    categoryPath: 'brickGuards',
    subheading:
      'Made in the USA - 100% guaranteed against failure. Best Brick Guards in America',
  },
  {
    heading: 'Rachets & Straps',
    categoryPath: 'straps',
    subheading:
      'Made in the USA - 100% guaranteed against failure. Best Straps in America',
  },
];

const currentCategory = getCategoryParam('category');
const { heading, subheading } = categoriesText.find(
  (category) => category.categoryPath === currentCategory
);

const productCategoryTemplate = `
  <a href="/winches/230049" class="winches__products-product">
    <img src="../assets/winch.jpg" alt="" />
    <div class="productInfo">
      <h2>417CE</h2>
      <p>4" x 27' Winch Strap with 18" chain</p>
    </div>
  </a>
`;

const categoryHtmlTemplate = `
  <h1>${heading}</h1>

  <p>
    ${subheading}
  </p>

  <div class="winches__search">
    <input id="searchInput" type="text" />

    <img
      id="searchIcon"
      src="../assets/magnify.svg"
      alt="Search icon for products"
    />
  </div>

  <div class="winches__products">
    
  </div>
`;

console.log(categoryHtmlTemplate);

// const searchInput = document.getElementById('searchInput');
// const searchIcon = document.getElementById('searchIcon');

// searchIcon.addEventListener('click', () => {
//   if (searchInput.value.trim() !== '') {
//     // TODO: Include logic for search
//     console.log('Something');
//   }
// });
