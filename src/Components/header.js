import { useState } from "react";
import styles from "./header.module.css";
import { useFilterContext } from "../Context/filterContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const { filterState, filterDispatch } = useFilterContext();

  return (
    <div className={styles.header}>
      <h2>Products</h2>

      <div>
        <label htmlFor="category"></label>
        <select
          name="category"
          id="category"
          value={filterState.category}
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_CATEGORY",
              payload: e.target.value,
            });
          }}
        >
          <option value="All Categories">All Categories</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
          <option value="Kitchen">Kitchen</option>
        </select>
      </div>
      <div>
        <label htmlFor="lowStockItem">Low Stock Items:</label>
        <input
          type="checkbox"
          name="lowStockItem"
          id="lowStockItem"
          value={filterState.lowStockItem}
          onChange={() => {
            filterDispatch({ type: "FILTER_BY_LOWSTOCK" });
          }}
        />
      </div>
      <div>
        <label htmlFor="sort"></label>
        <select
          name="sort"
          id="sort"
          value={filterState.sort}
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_SORT",
              payload: e.target.value,
            });
          }}
        >
          <option value="price">Price</option>
          <option value="stock">Stock</option>
        </select>
      </div>
      <button
        onClick={() => {
          navigate("/additem");
        }}
      >
        Add Items
      </button>
    </div>
  );
}
