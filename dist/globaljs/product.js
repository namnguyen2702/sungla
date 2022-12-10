class Glass {
  constructor(
    brand,
    name,
    description,
    size = [],
    price,
    isSale,
    salePrice,
    amount,
    feature,
    id
  ) {
    this.id = id;
    this.brand = brand;
    this.name = name;
    this.description = description;
    this.size = size;
    this.price = price;
    this.isSale = isSale;
    this.salePrice = salePrice;
    this.amount = amount;
    this.feature = feature;
  }
}
const listOfProduct = [
  new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD','SM'],
    300,
    false,
    0,
    4,
    'Feature Men',
    1
  ),
new Glass(
    'Prada',
    'Lorem Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    false,
    0,
    4,
    'Feature Arrival',
    2
  ),
new Glass(
    'Prada',
    'Sale Glass',
    'Dummy Info',
    ['MD','L'],
    200,
    true,
    150,
    4,
    'Feature New',
    3
  ),
new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD','SM'],
    300,
    false,
    0,
    3,
    'Feature Women',
    4
  ),
new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    false,
    0,
    5,
    'Feature Women',
    5
  ),
new Glass(
    'Prada',
    'Lorem Glass',
    'Dummy Info',
    ['MD','L'],
    300,
    false,
    0,
    4,
    'Feature New',
    6
  ),
new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    false,
    0,
    4,
    'Feature Women',
    7
  ),

new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['SM'],
    300,
    false,
    0,
    4,
    'Feature New',
    8
  ),
new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    false,
    0,
    4,
    'Feature Women',
    9
  ),
new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['MD','SM'],
    300,
    false,
    0,
    2,
    'Feature Arrivalmend',
    10
  ),
new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    false,
    0,
    4,
    'Feature New',
    11
  ),
new Glass(
    'Prada',
    'Lorem Glass',
    'Dummy Info',
    ['SM'],
    300,
    false,
    0,
    3,
    'Feature Women',
    12
  ),
new Glass(
    'Gucci',
    'sale Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    true,
    200,
    2,
    'Feature Arrivalmend',
    13
  ),

new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD','SM'],
    300,
    false,
    0,
    4,
    'Feature New',
    14
  ),
new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['SM'],
    300,
    false,
    0,
    4,
    'Feature Women',
    15
  ),
new Glass(
    'Fendi',
    'Sale Glass',
    'Dummy Info',
    ['SM'],
    300,
    true,
    200,
    4,
    'Feature Arrivalmend',
    16
  ),
new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD','SM'],
    300,
    false,
    0,
    4,
    'Feature Women',
    17
  ),
new Glass(
    'Fendi',
    'Sale Glass',
    'Dummy Info',
    ['MD','SM'],
    600,
    true,
    500,
    2,
    'Feature Men',
    18
  ),
new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info',
    ['SM'],
    300,
    false,
    0,
    1,
    'Feature Women',
    19
  ),

new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD'],
    300,
    false,
    0,
    2,
    'Feature Men',
    20
  ),
new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info',
    ['MD','SM'],
    300,
    false,
    0,
    2,
    'Feature Women',
    21
  ),
new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    false,
    0,
    5,
    'Feature Men',
    22
  ),
new Glass(
    'Prada',
    'Lorem Glass',
    'Dummy Info',
    ['MD','SM'],
    300,
    false,
    0,
    2,
    'Feature Women',
    23
  ),
new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    false,
    0,
    4,
    'Feature Arrivalmend',
    24
  ),
new Glass(
    'Prada',
    'Sale Glass',
    'Dummy Info',
    ['MD','L','SM'],
    400,
    true,
    250,
    4,
    'Feature Men',
    25
  ),

new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD','L','SM'],
    300,
    false,
    0,
    3,
    'Feature New',
    26
  ),
new Glass(
    'Chanel',
    'Lorem Glass',
    'Dummy Info',
    ['L','SM'],
    300,
    false,
    0,
    3,
    'Feature Women',
    27
  ),
new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD','SM'],
    300,
    false,
    0,
    4,
    'Feature Men',
    28
  ),
new Glass(
    'Chanel',
    'Lorem Glass',
    'Dummy Info',
    ['MD','L'],
    300,
    false,
    0,
    4,
    'Feature Women',
    29
  ),
new Glass(
    'Gucci',
    'Gucci Sale Glass',
    'Info Glass',
    ['MD','SM'],
    300,
    false,
    0,
    3,
    'Feature Men',
    30
  ),
];
// feature : Recommend new men women
class ListGlass {
  constructor(listOfGlass = []) {
    listOfGlass = [...listOfGlass, ...listOfProduct];
    const storaged = window.localStorage.getItem('listProducts')
      ? JSON.parse(window.localStorage.getItem('listProducts'))
      : [];
    this.list = [...storaged, ...listOfGlass].filter(
      (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
    );
    window.localStorage.setItem('listProducts', JSON.stringify(this.list));
  }
  static getProduct(productId) {
    if (this.getListProduct().length > 0) {
      return this.getListProduct().find((glass) => glass.id == productId);
    }
    return null;
  }
  static getListProduct() {
    return window.localStorage.getItem('listProducts')
      ? JSON.parse(window.localStorage.getItem('listProducts'))
      : [];
  }
  groupAvailableBrand() {
    const glassesBrands = this.list.map((glass) => glass.brand);
    const availableBrand = glassesBrands.filter((brand, index) => {
      return glassesBrands.indexOf(brand) === index;
    });
    return availableBrand;
  }
  static groupByFeature(feature) {
    console.log(feature);
    return this.getListProduct().filter((glass) => {
      return glass.feature.toLowerCase() == feature.toLowerCase();
    });
  }

  // filter section
  static groupBySize(list = [], size) {
    return list.filter((glass) => {
      return glass.size.includes(size);
    });
  }
  static groupByBrand(list = [], brand) {
    return list.filter((glass) => glass.brand === brand);
  }

  sortDescPrice(list = []) {
    return list.sort(
      (glassA, glassB) =>
        (glassA.isSale ? glassA.salePrice : glassA.price) -
        (glassB.isSale ? glassB.salePrice : glassB.price)
    );
  }

  sortDescPrice(list = []) {
    return list.sort(
      (glassA, glassB) =>
        (glassA.isSale ? glassA.salePrice : glassA.price) -
        (glassB.isSale ? glassB.salePrice : glassB.price)
    );
  }

  sortAscPrice(list = []) {
    return list.sort(
      (glassA, glassB) =>
        (glassB.isSale ? glassB.salePrice : glassB.price) -
        (glassA.isSale ? glassA.salePrice : glassA.price)
    );
  }
}

class PayGlass extends Glass {
  constructor({
    brand,
    name,
    description,
    size,
    price,
    isSale,
    salePrice,
    amount,
    feature,
    id,
    buyAmount,
    sizeSelected,
  }) {
    super(
      brand,
      name,
      description,
      size,
      price,
      isSale,
      salePrice,
      amount,
      feature,
      id
    );
    this.buyAmount = buyAmount;
    this.sizeSelected = sizeSelected;
    //TODO
  }
}
class Cart {
  constructor(listOfGlassBuy = []) {
    const storaged = window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : [];
    this.list = [...storaged, ...listOfGlassBuy].filter(
      (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
    );
    this.saveLocal();
  }
  addProduct(product) {
    this.list.push(product);
    this.saveLocal();
  }
  saveLocal() {
    this.list = this.list.filter(
      (v, i, a) => a.findIndex((v2) => v2.id === v.id) === i
    );
    window.localStorage.setItem('cart', JSON.stringify(this.list));
  }

  updateBuyAmount(id, amount) {
    this.list.forEach((el) => {
      if (id == el.id) {
        el.buyAmount = amount;
      }
    });
    this.saveLocal();
  }

  deleteProduct(productId) {
    this.list = this.list.filter((product) => product.id != productId);
    this.saveLocal();
  }
  afterPayment() {
    window.localStorage.removeItem('cart');
  }
  static getCartProduct() {
    if (!window.localStorage.getItem('cart')) {
      window.localStorage.setItem('cart', JSON.stringify([]));
    }
    return window.localStorage.getItem('cart')
      ? JSON.parse(window.localStorage.getItem('cart'))
      : [];
  }
}

const sanPhams =  ListGlass.getListProduct();
console.log('San pham: ');
console.log(sanPhams);
console.log('SIZE');
let productSize = sanPhams;

productSize = ListGlass.groupBySize(sanPhams, 'MD');


console.log(productSize);

const searchByName = (name) => {
  return ListGlass.getListProduct().filter(el => {
    return el.name.match(name);
  });
}

const searchBySize = (size)=>{
  return ListGlass.getListProduct().filter(function (sz) {
    return sz.id.match(size);
  });
}
console.log(searchBySize(1));
console.log(searchBySize('MD'));