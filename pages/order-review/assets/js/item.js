const coll = document.getElementsByClassName('collapsible');
const mainContainer = document.getElementById('Main__container');
const btnView = document.getElementById('order__header');
const order = document.querySelector('.content__order');
const closes = document.getElementById('close');
const main = document.querySelector('.main__content');
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      content.style.display = 'block';
    }
  });
}

btnView.onclick = function () {
  order.style.display = 'block';
  mainContainer.style.backgroundColor = 'rgba(0,0,0,0.30)';
};

closes.onclick = function () {
  order.style.display = 'none';
  mainContainer.style.backgroundColor = 'unset';
};
window.onclick = function (event) {
  if (event.target == order) {
    order.style.display = 'none';
  }
};

const formObj = JSON.parse(window.localStorage.getItem('shipping_information'));
document.getElementById('client-name').innerText =
  formObj.first_name + ' ' + formObj.last_name;
document.getElementById('company').innerText = formObj.company;
document.getElementById('street_address').innerText = formObj.street_address;
document.getElementById('state').innerText = formObj.state_province;
document.getElementById('phone').innerText = formObj.phone;
const renderItems = (el) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('item__infor');
  wrapper.innerHTML = `<div class="img-item-1">
  <img
    src="assets/img/sungla.jpg"
    alt="img"
    class="img-item"
  />
</div>
<div class="infor-item">
  <p class="title-item font-bold">
   ${el.name}
  </p>
  <p>QTY: 1</p>
  <div class="view-detail infor-add">
    <a class="view-dt" href="/pages/Cart" >View Detail</a>
  </div>
</div>
<div class="price-item infor-add">
  <p class="price">${(el.isSale ? el.salePrice : el.price) * el.buyAmount}$</p>
</div>`;
  return wrapper;
};
const cartProducts = new Cart();
const updateSubTotal = () => {
  let total = 0;
  Cart.getCartProduct().forEach((el) => {
    total += el.buyAmount * (el.isSale ? el.salePrice : el.price);
  });
  document.getElementById('order-total').innerText = total + '$';
};
updateSubTotal();
Cart.getCartProduct().forEach((el) => {
  document.getElementById('item_cart').appendChild(renderItems(el));
});
