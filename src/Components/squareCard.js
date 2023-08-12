import styles from "./squareCard.module.css";

export default function SquareCard({ data, name }) {
  return (
    <div className={styles.squarecard}>
      <h2>{name}</h2>
      <h3>{data}</h3>
    </div>
  );
}
