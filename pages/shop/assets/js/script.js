// get sort option on url
const listGlassSort = new ListGlass();
let paramString = window.location.href.split('?')[1];
const queryString = new URLSearchParams(paramString);
const brand = queryString.get('brand');
const size = queryString.get('size');
const price = queryString.get('price');
const feature = queryString.get('feature');
const sortOptionsParams = [
  {
    node: 'brand-op',
    type: 'BRAND',
    value: brand,
  },
  {
    node: 'size-op',
    type: 'SIZE',
    value: size,
  },
  {
    node: 'myRange',
    type: 'PRICE',
    value: price,
  },
  ,
  {
    node: 'feature-opt',
    type: 'FEATURE',
    value: feature,
  },
];
let listProducts = new ListGlass();
let filterList = ListGlass.getListProduct();
const sortOptions = sortOptionsParams.filter((el) => el.value != null);
if (sortOptions.length > 0) {
  console.log(sortOptions);
  sortOptions.forEach((el) => {
    if (el.node === 'myRange') {
      document.getElementById(el.node).value = el.value;
    } else {
      document.querySelector(
        `#${el.node} > option[value="${el.value}"]`
      ).selected = true;
    }
    filterList = filterReducer(filterList, el);
  });
}

console.log(findItemsEl);
const button = findItemsEl.nextElementSibling;
button.addEventListener('click',()=>{

  ListGlass.getListProduct().forEach((el) =>{
    const nameFind = el.name.match(findItemsEl.value);
    if(nameFind){
      console.log(el);
      document.getElementById('load-data').appendChild(renderProduct(el));
    }
    else {
      filterList.forEach((element) => {
        document.getElementById('load-data').appendChild(renderProduct(element));
      });
    }
  });
});

// document.getElementById('btn-Find').addEventListener('click', ()=>{
//   ListGlass.getListProduct().forEach((el)=>{
//     if (el.name.match())
//   });
// });
document.getElementById('submit-sort').addEventListener('click', () => {
  const brandel = document.getElementById('brand-op').value;
  const sizeel = document.getElementById('size-op').value;
  const priceel = document.getElementById('myRange').value;
  const feature = document.getElementById('feature-opt').value;
  const filterObj = {};
  if (brandel != 'null') {
    filterObj.brand = brandel;
  }
  if (sizeel != 'null') {
    filterObj.size = sizeel;
  }
  if (priceel != 'null') {
    filterObj.price = priceel;
  }
  if (feature != 'null') {
    filterObj.feature = feature;
  }
  const queries = new URLSearchParams(filterObj).toString();
  const newUrl = 'http://127.0.0.1:5500/pages/shop/' + `?${queries}`;
  console.log(newUrl);
  window.location.href = newUrl;
});
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
/*  */
var sliderPr = document.getElementById('myRange');
var output = document.getElementById('numberPrice');
output.innerHTML = sliderPr.value;

sliderPr.oninput = function () {
  output.innerHTML = this.value;
};

// dom html

// render all product
// if (filterList.length > 0) {
//   filterList.forEach((element) => {
//     document.getElementById('load-data').appendChild(renderProduct(element));
//   });
// }
