import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removedToCart = (item) => {
    setCart(cart.filter((element) => element.name !== item.name));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removedToCart }}>
      {children}
    </CartContext.Provider>
  );
};
