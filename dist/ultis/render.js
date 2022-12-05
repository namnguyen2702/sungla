// require import product.js

const listProduct = new ListGlass();

// render

const renderProduct = (product) => {
  const product_card = document.createElement('div');
  // add class
  product_card.classList.add('gridProduct__card');
  const productImage = document.createElement('img');
  // fix cứng product image edit src later
  productImage.src = '/dist/img/725125382830__STD__shad__fr.png';
  productImage.classList.add('gridProduct__card_img');
  // content cua product
  const productContentContainer = document.createElement('div');
  productContentContainer.classList.add('gridProduct__card_content');

  const productContentType = document.createElement('div');
  productContentType.classList.add('gridProduct__card_content--type');
  productContentType.classList.add('text-gray-4');
  productContentType.classList.add('fs-s');
  productContentType.classList.add('fw-primary');
  productContentType.innerText = product.feature;

  const productNameTitle = document.createElement('div');
  productNameTitle.classList.add('gridProduct__card_content--title');
  productNameTitle.classList.add('fs-sm');
  productNameTitle.innerText = product.name;

  const productPrice = document.createElement('div');
  productPrice.classList.add('gridProduct__card_content--price');
  productPrice.classList.add('fs-lg');
  productPrice.classList.add('fw-primary');

  const notSalePrice = document.createElement('div');
  notSalePrice.classList.add(`main-price`);
  if (product.isSale) {
    notSalePrice.classList.add(`isSale`);
  }

  notSalePrice.innerText = product.price + '$';
  const salePrice = document.createElement('div');
  salePrice.classList.add('sale-price');
  salePrice.innerText = product.salePrice + '$';

  // append html
  product_card.appendChild(productImage);

  productContentContainer.appendChild(productContentType);
  productContentContainer.appendChild(productNameTitle);

  productPrice.appendChild(notSalePrice);
  if (product.isSale) {
    productPrice.appendChild(salePrice);
  }

  productContentContainer.appendChild(productPrice);

  product_card.appendChild(productContentContainer);

  product_card.addEventListener('click', () => {
    window.location.href = '/details/product.html?id=' + product.id;
  });
  return product_card;
};

const renderCartProduct = (product) => {
  const basket_product = document.createElement('div');
  basket_product.classList.add('basket-product');
  const htmlCart = `
  <div class="item">
    <div class="product-image">
      <img
        src="/dist/img/725125382830__STD__shad__fr.png"
        alt="Placholder Image 2"
        class="product-frame"
      />
    </div>
    <div class="product-details ">
      <h1 class="fs-xl">
       ${product.name}
      </h1>
      <p><strong>Size ${product.sizeSelected}</strong></p>
      <p>Product Code - ${product.id}</p>
    </div>
  </div>
  <div class="price fs-md">${
    product.isSale ? product.salePrice : product.price
  }</div>
  <div class="quantity">
    <input type="number" value="${product.buyAmount}" min="1" max="${
    product.amount
  }" class="quantity-field" data-productid="${product.id}" />
  </div>
  <div class="subtotal fs-md">${
    product.buyAmount * (product.isSale ? product.salePrice : product.price)
  }</div>
  <div class="remove">
    <button value="${product.id}">Remove</button>
  </div>`;
  basket_product.innerHTML = htmlCart;
  return basket_product;
};
