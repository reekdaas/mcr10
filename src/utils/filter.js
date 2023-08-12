const filterByCategory = (products, { category }) => {
  if (category === "All Categories") return products;
  else {
    return products.filter((product) => product.department === category);
  }
};

const filterByLowStock = (products, { lowStockItem }) => {
  return lowStockItem
    ? products.filter((product) => +product.stock <= 10)
    : products;
};
const filterBySort = (products, { sort }) => {
  if (sort === "price") {
    return products.sort((a, b) => +a.price - +b.price);
  } else if (sort === "stock") {
    return products.sort((a, b) => +a.stock - +b.stock);
  } else return products;
};

export default function getFilteredProducts(allProducts, filterState) {
  // console.log(allProducts, filterState);
  const filterFunctionsArray = [
    filterByCategory,
    filterByLowStock,
    filterBySort,
  ];
  filterFunctionsArray.forEach(
    (currentFunction) =>
      (allProducts = currentFunction(allProducts, filterState))
  );
  return allProducts;
  // console.log(allProducts);
}
