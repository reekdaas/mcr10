import styles from "./productCard.module.css";

export default function ProductCard({ product }) {
  return (
    <tr className={styles.productCard}>
      <td>
        <img src={product.imageUrl} alt={product.name} />
      </td>
      <td>{product.name}</td>
      <td>{product.description}</td>
      <td>{product.price}</td>
      <td>{product.stock}</td>
      <td>{product.supplier}</td>
    </tr>
  );
}
