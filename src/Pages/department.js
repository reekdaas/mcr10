import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/sidebar";
import { useFilterContext } from "../Context/filterContext";
import styles from "./department.module.css";

const departments = ["Kitchen", "Clothing", "Toys"];

export default function Department() {
  const navigate = useNavigate();
  const { filterState, filterDispatch } = useFilterContext();
  const handleClick = (data) => {
    filterDispatch({ type: "CLEAR_FILTERS" });
    filterDispatch({ type: "FILTER_BY_CATEGORY", payload: data });
    navigate("/product");
  };
  console.log(filterState);
  return (
    <div className={styles.department}>
      <Sidebar />
      {/* departments. */}
      <div>
        {departments.map((data, i) => (
          <div
            className={styles.squarecard}
            key={i}
            onClick={() => {
              handleClick(data);
            }}
          >
            <h2>{data}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
