import Sidebar from "../Components/sidebar";
import SquareCard from "../Components/squareCard";
import { useProductContext } from "../Context/productContext";
import styles from "./home.module.css";

export default function Home() {
  const {
    productState: { productItems },
  } = useProductContext();
  const totalProducts = productItems.reduce((acc, cur) => acc + cur.stock, 0);
  const totalDeliveredProducts = productItems.reduce(
    (acc, cur) => acc + cur.delivered,
    0
  );
  const lowStockProducts = productItems.filter(
    (product) => product.stock <= 10
  ).length;

  // console.log(totalProducts, totalDeliveredProducts);

  return (
    <div className={styles.home}>
      <Sidebar />
      <div>
        <SquareCard data={totalProducts} name="Total Products" />
        <SquareCard
          data={totalDeliveredProducts}
          name="Total Delivered Products"
        />
        <SquareCard data={lowStockProducts} name="Low Stock Products" />
      </div>
    </div>
  );
}
