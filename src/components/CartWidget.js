import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import ItemCartList from "./ItemCartList";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart, removeItem, total, totalProducts, totalPrice } = cartContext;

  return (
    <section to='/producto' className='dropdown dropdown-end'>
      <label tabIndex='0' className='btn btn-ghost btn-circle mr-6'>
        <div className='indicator'>
          <CartIcon className='h-6 w-6 r-4' />
          <span className='badge badge-sm indicator-item'>{cart.length}</span>
        </div>
      </label>
      <div
        tabIndex='0'
        className='mt-3 card card-compact dropdown-content w-auto bg-base-100 border-4 shadow-xl rounded-lg top-10 mr-4'
      >
        <div key={cart.length} className='card-body'>
          <ItemCartList
            items={cart}
            removeItem={removeItem}
            total={total}
            totalProducts={totalProducts}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </section>
  );
};
export default CartWidget;
