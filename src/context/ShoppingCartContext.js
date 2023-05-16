import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);
  const [isOpen, setIsOpen] = useState(false);

  const cartQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function closeCart() {
    setIsOpen(false);
  }

  function openCart() {
    setIsOpen(true);
  }

  function getCartItem(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity({ id, name, imgUrl, price }) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [
          ...currItems,
          { id, quantity: 1, totalPrice: price, name, imgUrl, price },
        ];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              totalPrice: (item.quantity + 1) * price,
              name,
              imgUrl,
              price,
            };
          } else {
            return item;
          }
        });
      }
    });
    toast.success(`Your cart is updated successfully!`);
  }

  function decreaseCartQuantity({ id, name, imgUrl, price }) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: item.quantity - 1,
              totalPrice: (item.quantity - 1) * price,
              name,
              imgUrl,
              price,
            };
          } else {
            return item;
          }
        });
      }
    });
    toast.success(`Your cart is updated successfully!`);
  }

  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
    toast.success(`Your cart is updated successfully!`);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getCartItem,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartQuantity,
        cartItems,
        closeCart,
        openCart,
        isOpen,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
