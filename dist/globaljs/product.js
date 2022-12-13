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
    ['MD', 'SM'],
    300,
    false,
    0,
    4,
    'Men',
    1
  ),
  new Glass(
    'Prada',
    'Lorem Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    false,
    0,
    4,
    'New Arrival',
    2
  ),
  new Glass(
    'Prada',
    'Sale Glass',
    'Dummy Info',
    ['MD', 'L'],
    200,
    true,
    150,
    4,
    'Recommend',
    3
  ),
  new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'SM'],
    300,
    false,
    0,
    3,
    'Recommend',
    4
  ),
  new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    false,
    0,
    5,
    'Recommend',
    5
  ),
  new Glass(
    'Prada',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'L'],
    300,
    false,
    0,
    4,
    'Recommend',
    6
  ),
  new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    false,
    0,
    4,
    'Women',
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
    'New Arrival',
    8
  ),
  new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    false,
    0,
    4,
    'New Arrival',
    9
  ),
  new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'SM'],
    300,
    false,
    0,
    2,
    'New Arrival',
    10
  ),
  new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    false,
    0,
    4,
    'New Arrival',
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
    'Women',
    12
  ),
  new Glass(
    'Gucci',
    'sale Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    true,
    200,
    2,
    'New Arrival',
    13
  ),

  new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'SM'],
    300,
    false,
    0,
    4,
    'Men',
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
    'Women',
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
    'New Arrival',
    16
  ),
  new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'SM'],
    300,
    false,
    0,
    4,
    'Recommend',
    17
  ),
  new Glass(
    'Fendi',
    'Sale Glass',
    'Dummy Info',
    ['MD', 'SM'],
    600,
    true,
    500,
    2,
    'Recommend',
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
    'Women',
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
    'Men',
    20
  ),
  new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'SM'],
    300,
    false,
    0,
    2,
    'Recommend',
    21
  ),
  new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    false,
    0,
    5,
    'Men',
    22
  ),
  new Glass(
    'Prada',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'SM'],
    300,
    false,
    0,
    2,
    'Women',
    23
  ),
  new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    false,
    0,
    4,
    'Recommend',
    24
  ),
  new Glass(
    'Prada',
    'Sale Glass',
    'Dummy Info',
    ['MD', 'L', 'SM'],
    400,
    true,
    250,
    4,
    'Men',
    25
  ),

  new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'L', 'SM'],
    300,
    false,
    0,
    3,
    'Feature',
    26
  ),
  new Glass(
    'Channel',
    'Lorem Glass',
    'Dummy Info',
    ['L', 'SM'],
    300,
    false,
    0,
    3,
    'Women',
    27
  ),
  new Glass(
    'Gucci',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'SM'],
    300,
    false,
    0,
    4,
    'Men',
    28
  ),
  new Glass(
    'Channel',
    'Lorem Glass',
    'Dummy Info',
    ['MD', 'L'],
    300,
    false,
    0,
    4,
    'Women',
    29
  ),
  new Glass(
    'Gucci',
    'Gucci Sale Glass',
    'Info Glass',
    ['MD', 'SM'],
    300,
    false,
    0,
    3,
    'Men',
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
  static groupBrand(brand, list = []) {
    console.log(brand);
    const glassesBrands = list.filter((glass) => {
      return glass.brand == brand;
    });
    return glassesBrands;
  }
  static groupByFeature(feature) {
    return this.getListProduct().filter((glass) => {
      return glass.feature.toLowerCase() == feature.toLowerCase();
    });
  }
  static groupByFeatureSort(feature, list = []) {
    return list.filter((glass) => {
      return glass.feature.toLowerCase() == feature.toLowerCase();
    });
  }

  // filter section
  static groupBySize(size, list = []) {
    return list.filter((glass) => {
      return glass.size.includes(size);
    });
  }
  static groupGreaterThan(price, list = []) {
    // return list.filter((glass) => {
    //   return glass.price > price;
    // });
    return list;
  }
}
const defaultList = new ListGlass(listOfProduct);
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

// const sanPhams =  ListGlass.getListProduct();
// console.log('San pham: ');
// console.log(sanPhams);
// console.log('SIZE');
// let productSize = sanPhams;

// productSize = ListGlass.groupBySize(sanPhams, 'MD');

const searchByName = (name) => {
  return ListGlass.getListProduct().filter((el) => {
    return el.name.match(name);
  });
};

const searchBySize = (size) => {
  return ListGlass.getListProduct().filter(function (sz) {
    return sz.id.match(size);
  });
};
