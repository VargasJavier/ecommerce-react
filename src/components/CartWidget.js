import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const cartContext = useContext(CartContext);
  const { cart } = cartContext;

  return (
    <Link to='/cart' className='dropdown dropdown-end'>
      <label tabIndex='0' className='btn btn-ghost btn-circle mr-6'>
        <div className='indicator'>
          <CartIcon className='h-6 w-6 r-4' />
          <span className='badge badge-sm indicator-item'>{cart.length}</span>
        </div>
      </label>
    </Link>
  );
};
export default CartWidget;
