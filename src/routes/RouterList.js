import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home";
import CartPage from "../pages/cart";
import ProductPage from "../pages/product";

// const renderRoutes = (routes) => {
//   return routes.map((route, index) => {
//     console.log(6);
//     return (
//       <Route key={index} path={route.path} element={route.component}>
//         {route.children && renderRoutes(route.children)}
//       </Route>
//     );
//   });
// };

const RouterList = ({ routes }) => {
  return (
    <Routes>
      {/* {renderRoutes(routes)} */}
      <Route path="/" element={<HomePage />} />
      <Route path="/categories" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default RouterList;
