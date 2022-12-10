const cart = new Cart();
const cartProduct = Cart.getCartProduct();
cartProduct.forEach((element) => {
  document
    .getElementById('cart-products-table')
    .appendChild(renderCartProduct(element));
});

// handle increase amount
const updateSubTotal = () => {
  let total = 0;
  Cart.getCartProduct().forEach((el) => {
    total += el.buyAmount * (el.isSale ? el.salePrice : el.price);
  });
  document.getElementById('basket-subtotal').innerText = total;
  document.getElementById('basket-total').innerText = total;
};
updateSubTotal();
const quantity_field = document.querySelectorAll('.quantity-field');
quantity_field.forEach((el) => {
  el.addEventListener('change', (e) => {
    const curPrice = Number(el.parentElement.previousElementSibling.innerHTML);
    const newPrice = Number(e.target.value) * curPrice;
    el.parentElement.nextElementSibling.innerHTML = newPrice;
    cart.updateBuyAmount(el.dataset.productid, Number(e.target.value));
    updateSubTotal();
  });
});

const removeButton = document.querySelectorAll('.remove > button');
removeButton.forEach((el) => {
  el.addEventListener('click', () => {
    cart.deleteProduct(Number(el.value));
    updateSubTotal();
    el.parentElement.parentElement.parentElement.removeChild(
      el.parentElement.parentElement
    );
  });
});
