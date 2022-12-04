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
const listProducts = [
  new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['XL', 'Xs'],
    300,
    false,
    0,
    4,
    'rcmd',
    1
  ),
  new Glass(
    'Gucci',
    'Lorem 2 Glass',
    'Dummy Info',
    ['XL', 'Xs'],
    300,
    false,
    0,
    4,
    'rcmd',
    2
  ),
  new Glass(
    'Fendi',
    'Lorem Glass',
    'Dummy Info',
    ['Xs'],
    300,
    false,
    0,
    4,
    'rcmd',
    3
  ),
  new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info dhasdasjgdas',
    ['L', 'MD', 'SM'],
    300,
    true,
    250,
    3,
    'rcmd',
    4
  ),
  new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info dhasdasjgdas',
    ['L', 'MD', 'SM'],
    300,
    true,
    250,
    3,
    'rcmd',
    5
  ),
  new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info dhasdasjgdas',
    ['L', 'MD', 'SM'],
    300,
    true,
    250,
    3,
    'rcmd',
    6
  ),
  new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info dhasdasjgdas',
    ['L', 'MD', 'SM'],
    300,
    true,
    250,
    3,
    'rcmd',
    7
  ),
  new Glass(
    'Versace',
    'Lorem Glass',
    'Dummy Info dhasdasjgdas',
    ['L', 'MD', 'SM'],
    300,
    true,
    250,
    3,
    'rcmd',
    8
  ),
];
// feature : rcmd new men women
class ListGlass {
  constructor(listOfGlass = []) {
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
  groupByFeature() {
    return list.filter((glass) => glass.feature === feature);
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

const listGlass = new ListGlass(listProducts);
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

  deleteProduct(productId) {
    this.list = this.list.filter((product) => product.id !== productId);
    saveLocal();
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
