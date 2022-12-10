var acc = document.getElementsByClassName('accordion1');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    this.classList.toggle('active1');
    var panel1 = this.nextElementSibling;
    if (panel1.style.maxHeight) {
      panel1.style.maxHeight = null;
    } else {
      panel1.style.maxHeight = panel1.scrollHeight + 'px';
    }
  });
}


var modal = document.getElementById('myModal');

var img = document.getElementById('ImgProd');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');
img.onclick = function () {
  modal.style.display = 'block';
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};
console.log("an");
const productList = new ListGlass();
const cart = new Cart();
let paramString = window.location.href.split('?')[1];
const queryString = new URLSearchParams(paramString);
const productId = Number(queryString.get('id'));
const detailsProduct = ListGlass.getProduct(Number(queryString.get('id')));
if (!detailsProduct) {
  window.location.pathname = '/pages/Home';
}
renderDetailsProduct(detailsProduct)

