import { useParams } from "react-router-dom";
import styles from "./productPage.module.css";
import Sidebar from "../Components/sidebar";
import { useProductContext } from "../Context/productContext";

export default function ProductPage() {
  const {
    productState: { productItems },
  } = useProductContext();
  const { id } = useParams();
  const product = productItems.find((item) => item.id === +id);
  // console.log(product);

  return (
    <div className={styles.productPage}>
      <Sidebar />
      <div className={styles.product}>
        <h1>{product.name}</h1>
        <img src={product.imageUrl} alt={product.name} />
        <h2>Price: {product.price}</h2>
        <h2>Stock: {product.stock}</h2>
        <h2>Description: {product.description}</h2>
        <h2>Supplier: {product.supplier}</h2>
        <h2>Department: {product.department}</h2>
      </div>
    </div>
  );
}
