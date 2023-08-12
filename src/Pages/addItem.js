import { useState } from "react";
import { v4 as uuid } from "uuid";
import Sidebar from "../Components/sidebar";
import styles from "./addItem.module.css";
import { useProductContext } from "../Context/productContext";

export default function AddItem() {
  const { productDispatch } = useProductContext();

  const [formData, setFormData] = useState({
    id: uuid(),
    department: "Clothing",
    name: "",
    description: "",
    price: "",
    stock: "",
    sku: "",
    supplier: "",
    delivered: "",
    imageUrl: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    productDispatch({ type: "ADD_ITEMS", payload: formData });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    if (name === "stock") {
      console.log(typeof name);
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.addItem}>
      <Sidebar />
      <div className={styles.addItemContainer}>
        <h2>Add New Product</h2>
        <div>
          <form onSubmit={handleSubmit} className={styles.addItemForm}>
            <div>
              <label htmlFor="category">Department:</label>
              <select
                name="department"
                id="category"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="Clothing">Clothing</option>
                <option value="Toys">Toys</option>
                <option value="Kitchen">Kitchen</option>
              </select>
            </div>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                id="description"
                rows="2"
                value={formData.description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                name="price"
                onChange={handleChange}
                value={formData.price}
                required
              />
            </div>
            <div>
              <label htmlFor="stock">Stock:</label>
              <input
                type="number"
                name="stock"
                id="stock"
                value={formData.stock}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="sku">SKU:</label>
              <input
                type="text"
                name="sku"
                value={formData.sku}
                onChange={handleChange}
                id="sku"
                required
              />
            </div>
            <div>
              <label htmlFor="supplier">Supplier</label>
              <input
                type="text"
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
                id="supplier"
                required
              />
            </div>
            <div>
              <label htmlFor="delivered">Delivered</label>
              <input
                type="number"
                id="delivered"
                name="delivered"
                onChange={handleChange}
                value={formData.delivered}
                required
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Image Url:</label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                id="imageUrl"
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
