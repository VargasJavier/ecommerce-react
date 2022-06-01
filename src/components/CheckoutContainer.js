import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Checkout from "./Checkout";

const CheckoutContainer = () => {
  const cartContext = useContext(CartContext);
  const { totalPrice, totalProducts, addCheckout, cart } = cartContext;
  const db = getFirestore();
  return (
    <Checkout
      totalPrice={totalPrice}
      db={db}
      addDoc={addDoc}
      collection={collection}
      totalProducts={totalProducts}
      addCheckout={addCheckout}
      cart={cart}
    />
  );
};
export default CheckoutContainer;
