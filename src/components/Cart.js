import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCartList from "./ItemCartList";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, total, totalProducts, totalPrice } = cartContext;

  return (
    <>
      <ItemCartList
        items={cart}
        removeItem={removeItem}
        total={total}
        totalProducts={totalProducts}
        totalPrice={totalPrice}
        isWidget={false}
      />
    </>
  );
};
export default Cart;
