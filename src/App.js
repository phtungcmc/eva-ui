import "./App.css";
import Cart from "./components/cart";
import { useShoppingCart } from "./context/ShoppingCartContext";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import RouterList from "./routes/RouterList";

function App() {
  const { isOpen } = useShoppingCart();
  return (
    <>
      <Cart />
      <div className={`App ${isOpen && "opacity-50"}`}>
        <Header />
        <RouterList />
        <Footer />
      </div>
    </>
  );
}

export default App;
