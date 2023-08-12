import Header from "../Components/header";
import ProductCard from "../Components/productCard";
import Sidebar from "../Components/sidebar";
import { useFilterContext } from "../Context/filterContext";
import { useProductContext } from "../Context/productContext";
import getFilteredProducts from "../utils/filter";
import styles from "./productListing.module.css";

export default function ProductListing() {
  const {
    productState: { productItems },
  } = useProductContext();

  const { filterState, filterDispatch } = useFilterContext();

  const filteredProducts = getFilteredProducts(productItems, filterState);

  return (
    <div className={styles.productlisting}>
      <Sidebar />
      <div className={styles.maincontainer}>
        <Header />
        <div className={styles.table}>
          {filteredProducts.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Images</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Supplier</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </tbody>
            </table>
          ) : (
            <h2>No Products Found</h2>
          )}
        </div>
      </div>
    </div>
  );
}
