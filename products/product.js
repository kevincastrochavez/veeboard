import { loadHeader, getParam } from '../js/utilities.js';

loadHeader();

const partNumberParam = getParam('partNumber');
console.log(partNumberParam);

// Fetching products from 'database' according to partNumber
const productResponse = await fetch('../allProducts.json');
const productData = await productResponse.json();
const singleProduct = console.log(productData);
