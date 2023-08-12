import { Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
import Department from "./Pages/department";
import ProductListing from "./Pages/productListing";
import AddItem from "./Pages/addItem";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/department" element={<Department />} />
      <Route path="/product" element={<ProductListing />} />
      <Route path="/additem" element={<AddItem />} />
    </Routes>
  );
}
