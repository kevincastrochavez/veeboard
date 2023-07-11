import { loadHeader } from './utilities.js';

loadHeader();

const productsResponse = await fetch('../products.json');
const productsData = null;
// const productsData = await productsResponse.json();

const productsHtml = (products) => {
  const result = products?.map((product) => {
    // Product Item template
    return `
        <div class="cart__product">
            <img src="${product.imageUrl}" alt="${product.description}" />

            <div class="cart__product-info">
                <h2>${product.partNumber}</h2>

                <p class="cart__product-description">
                ${product.description}
                </p>

                <div>
                    <p>Price:</p>
                    <span>$${product.price}</span>
                </div>

                <div>
                    <p>Color:</p>
                    <span>${product.color}</span>
                </div>

                <div class="cart__product-quantity">
                    <p>Quantity:</p>
                    <div class="cart-quantity">
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
                </div>
            </div>
        </div>
    `;
  });

  return result;
};

// Getting total items price
const totalPrice = productsData
  ?.map((product) => product.price * product.quantity)
  .reduce((acc, curr) => acc + curr);

const cartProductsContainer = document.querySelector('.cart__products');
const cartTotal = document.getElementById('total');

const products = productsHtml(productsData)?.join(' ');
cartTotal.innerHTML = `$${totalPrice ?? 0}`;
cartProductsContainer.innerHTML = products;
