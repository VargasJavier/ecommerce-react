import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCartList from "./ItemCartList";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const { cart, clear, removeItem, total, totalProducts, totalPrice } =
    cartContext;

  return (
    <>
      <ItemCartList
        items={cart}
        clear={clear}
        removeItem={removeItem}
        total={total}
        totalProducts={totalProducts}
        totalPrice={totalPrice}
      />
    </>
  );
};
export default Cart;
