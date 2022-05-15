import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  // Métodos recomendados para el carrito
  const addItem = (item, qty) => {
    //Agregar cierta cantidad de un item al carrito
    if (isInCart(item.id)) {
      let index = cart.findIndex((e) => e.id == item.id);
      let product = cart[index];
      product.qty = product.qty + qty;
      const newCart = [...cart];
      newCart.splice(index, 1, product);
      setCart([...newCart]);
    } else {
      let product = { ...item, qty };
      setCart([...cart, product]);
    }
  };

  const removeItem = (itemId) => {
    //Remover un item del cart por usando su id
    let newCart = [...cart];
    newCart = newCart.filter((item) => item.id !== itemId);
    setCart([...newCart]);
  };

  const clear = () => {
    // Remover todos los items
    setCart([]);
  };

  const isInCart = (id) => {
    // Saber si el item ya está en el carrito
    return cart.some((e) => e.id == id);
  };

  return (
    <>
      <CartContext.Provider value={{ cart, setCart, addToCart: addItem }}>
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
