import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import CartPage from "../pages/cart";
import ProductPage from "../pages/product";
import ProductsPage from "../pages/products";
import CategoriesPage from "../pages/categories";
import ContactUsPage from "../pages/contact-us";

const RouterList = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products/:id" element={<ProductPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/contact" element={<ContactUsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default RouterList;
