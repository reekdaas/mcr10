import { NavLink } from "react-router-dom";
import styles from "./sidebar.module.css";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navlink} ${styles.activelink}`
                : `${styles.navlink}`
            }
            to={"/"}
          >
            Dashbard
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navlink} ${styles.activelink}`
                : `${styles.navlink}`
            }
            to={"/department"}
          >
            Departments
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? `${styles.navlink} ${styles.activelink}`
                : `${styles.navlink}`
            }
            to={"/product"}
          >
            product
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
