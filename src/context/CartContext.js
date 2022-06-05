import { createContext, useState } from "react";

export const CartContext = createContext([]);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const total = 0;
  const [checkout, setCheckout] = useState({});
  // Métodos recomendados para el carrito
  const addItem = (item, qty) => {
    //Agregar cierta cantidad de un item al carrito
    if (isInCart(item.id)) {
      let index = cart.findIndex((e) => e.id === item.id);
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

  const totalPrice = () => {
    // Hallar el precio total del carrito
    return cart.reduce((sum, e) => {
      return sum + e.price * e.qty;
    }, 0);
  };

  const totalProducts = (cart) => {
    return cart.reduce((qty, e) => {
      return qty + e.qty;
    }, 0);
  };

  const removeItem = (itemId) => {
    //Remover un item del cart por usando su id
    let newCart = [...cart];
    newCart = newCart.filter((item) => item.id !== itemId);
    setCart([...newCart]);
  };

  const clear = () => {
    // Remover todos los item
    console.log("HOLA");
    setCart([]);
  };

  const isInCart = (id) => {
    // Saber si el item ya está en el carrito
    return cart.some((e) => e.id === id);
  };

  const addCheckout = (docData) => {
    setCheckout(docData);
  };

  return (
    <>
      <CartContext.Provider
        value={{
          cart,
          setCart,
          total,
          checkout,
          clear: clear,
          addToCart: addItem,
          removeItem: removeItem,
          totalProducts: totalProducts,
          totalPrice: totalPrice,
          addCheckout: addCheckout,
        }}
      >
        {props.children}
      </CartContext.Provider>
    </>
  );
};

export default CartProvider;
