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
    window.location.href = '/pages/product/index.html?id=' + product.id;
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

const renderDetailsProduct = (product) => {
  const productWrapper = document.getElementById('product-wrapper');
  const htmlDetailsProduct = `<div class="product-content-right-name ">
  <p class="fendi fs-sm">${product.brand}</p>
  <h1 class="heading fs-xl">${product.name}</h1>
</div>
<div class="product-content-select">
  <div class="product-content-right-select-size-text row">
    <p class="select-size fs-sm">SELECT SIZE</p>
    <p class="Size-quide fs-sm"><a href="">Size quide</a></p>
  </div>
  <div class="product-content-right-select-size">
    <select class="custom-select-size fs-sm" id="size-select">
    </select>
  </div>
  <div class="row">
    <div class="product-content-right-price">
      <p class="price-total fs-sm">PRICE TOTAL</p>
      <p style="font-weight: 900 ; color:${
        product.isSale ? 'red' : 'black'
      }" class="price fw-product-price">${
    product.isSale ? product.salePrice : product.price
  }$</p>
    </div>
  </div>
</div>
<div class="product-content-right-button-add-bag row">
  <button class="btn1 bag fs-sm" id="add-to-cart">ADD TO BAG</button>
</div>
<div class="product-content-tx row">
  <p class="fs-s">Free shipping</p>
  <p class="fs-s">Product code: RFKK1024</p>
  <p class="fs-s">TAGS: NEW arrivals, Top sunglasses</p>
</div>`;
  productWrapper.innerHTML = htmlDetailsProduct;
  let selectHtml = '';
  product.size.forEach((el) => {
    selectHtml += `<option value=${el}>${el.toUpperCase()}</option>`;
  });
  document.getElementById('size-select').innerHTML = selectHtml;
  document.getElementById('add-to-cart').addEventListener('click', () => {
    const selectedSize = document.getElementById('size-select');
    const productSelected = new PayGlass({
      ...product,
      sizeSelected: selectedSize.value,
      buyAmount: '1',
    });
    cart.addProduct(productSelected);
    toastIt('Success Adding to Cart', 2500, { fontSize: '18px' });
  });
};
