import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, total, totalProducts, totalPrice } = cartContext;
  return (
    <Checkout
      items={cart}
      removeItem={removeItem}
      total={total}
      totalProducts={totalProducts}
      totalPrice={totalPrice}
    />
  );
};
export default CheckoutContainer;
