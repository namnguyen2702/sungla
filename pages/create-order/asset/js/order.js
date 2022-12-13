const coll = document.getElementsByClassName('collapsible');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
}
const renderItems = (el) => {
  return `
 <div class="main-detail grid-det">
 <div class="list-items-0">
   <img
     src="./asset/img/AVERIE_S_000JR_P02_1800x1800.webp"
     alt=""
     width="300px"
   />
 </div>
 <div class="list-items-1 fs-xl">
   <p>${el.name}</p>
 </div>
 <div class="list-items-2 fs-sm">
   <p>Qty: ${el.buyAmount}</p>
 </div>
 <div class="list-items-3 fs-sm">
   <a href="/pages/Cart">View Details</a>
 </div>
 <div class="list-items-4 fs-sm">
   <p>${(el.isSale ? el.salePrice : el.price) * el.buyAmount}$</p>
 </div>
</div>
 `;
};
const cartProducts = new Cart();
document.getElementById('items_in_cart').innerText =
  Cart.getCartProduct().length + ' Item in Cart';
Cart.getCartProduct().forEach((element) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = renderItems(element);
  document.getElementById('items-cart').appendChild(wrapper);
});
document.getElementById('next-btn').addEventListener('click', () => {
  const formObj = {};
  document.querySelectorAll('.sub-content-info').forEach((el) => {
    formObj[el.querySelector('input').getAttribute('name')] =
      el.querySelector('input').value;
  });
  window.localStorage.setItem('shipping_information',JSON.stringify(formObj));
});
