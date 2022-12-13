const filterReducer = (currentArr, { type, value }) => {
  let filterArray = [];
  switch (type) {
    case 'BRAND':
      filterArray = ListGlass.groupBrand(value, currentArr);
      console.log(filterArray);
      return filterArray;
    case 'SIZE':
      filterArray = ListGlass.groupBySize(value, currentArr);
      return filterArray;
    case 'PRICE':
      filterArray = ListGlass.groupGreaterThan(value, currentArr);
      return filterArray;
    case 'FEATURE':
      filterArray = ListGlass.groupByFeatureSort(value, currentArr);
      return filterArray;
    default:
        console.log("de");
      return [];
  }
};
