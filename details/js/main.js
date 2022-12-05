const productList = new ListGlass();
const cart = new Cart();
let paramString = window.location.href.split('?')[1];
const queryString = new URLSearchParams(paramString);
const productId = Number(queryString.get('id'));
const detailsProduct = ListGlass.getProduct(Number(queryString.get('id')));

if (!detailsProduct) {
  window.location.pathname = '/Home';
}
// xu ly hien san pham
console.log('Đây là trang deitails của san phẩm ');
console.log(detailsProduct);
const addCartBtn = document.getElementById('add_cart');
addCartBtn.setAttribute('data-product', productId);
addCartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // gia su size = XL
  // amount mua la 3
  const productSelected = new PayGlass({
    ...detailsProduct,
    sizeSelected: 'XL',
    buyAmount: '4',
  });

  console.log('đã thêm sản phảm vào giỏ hàng');
  cart.addProduct(productSelected);
  console.log('Giỏi hàng hiện tại có');
  console.log(Cart.getCartProduct());
  toastIt('Success Adding to Cart', 2500, { fontSize: '18px' });
});

// render list product
const productContainer = document.getElementById('feature');
productContainer.appendChild(renderProduct(detailsProduct));
