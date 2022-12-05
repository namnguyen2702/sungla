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
