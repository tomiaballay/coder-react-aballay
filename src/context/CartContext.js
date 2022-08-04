import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, qty) => {
    let newCart = [];
    let isInCart = cartList.find((productos) => productos.id === item.id);

    if (isInCart) {
      isInCart.qty += qty;
      newCart = [...cartList];
    } else {
      isInCart = { ...item, qty: qty };
      newCart = [...cartList, isInCart];
    }
    setCartList(newCart);
  };

  const removeItem = (id) => {
    let newList = cartList.filter((item) => item.id !== id);
    setCartList(newList);
  };

  const clear = () => {
    setCartList([]);
  };

  const sumQty = () => {
    let total = 0;

    cartList.map((productos) => (total += productos.qty));

    return total;
  };

  const sumPrice = () => {
    let total = 0;

    cartList.map((productos) => (total += productos.precio * productos.qty));

    return total;
  };

  return (
    <CartContext.Provider
      value={{ cartList, addItem, removeItem, clear, sumQty, sumPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;