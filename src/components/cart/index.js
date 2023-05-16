import React from "react";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import CartCount from "./CartCount";
import CartItem from "./CartItem";
import CartEmpty from "./CartEmpty";

const Cart = () => {
  const { isOpen, closeCart, cartItems, cartQuantity } = useShoppingCart();

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 blur-effect-theme duration-500 w-full h-screen opacity-100 z-[250] ${
          isOpen
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div
          className={` border-l-2 blur-effect-theme duration-500 h-screen max-w-xl w-full absolute right-0 bg-white ${
            isOpen
              ? "opacity-100 visible translate-x-0"
              : "opacity-0 invisible translate-x-8"
          }`}
        >
          <CartCount totalQTY={cartQuantity} closeCart={closeCart} />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={closeCart} />
          ) : (
            <div>
              <div className="flex items-start justify-start flex-col gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className="fixed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between mb-4">
                  <h1 className="text-base font-semibold uppercase">
                    SubTotal
                  </h1>
                  <h1 className="text-lg rounded bg-theme-cart text-slate-100 px-1 py-0.5">
                    ${" "}
                    {cartItems.reduce((total, cartItem) => {
                      return total + cartItem.totalPrice;
                    }, 0)}
                  </h1>
                </div>
                <div className="grid items-center gap-2">
                  <button
                    type="button"
                    className="py-2 button-theme bg-theme-cart text-white"
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
