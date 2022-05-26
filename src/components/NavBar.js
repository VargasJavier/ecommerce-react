import CartWidget from "./CartWidget";
import logoNew from "../assets/img/logoNew.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* Brand */}
      <div className='navbar bg-base-100 justify-between'>
        <Link to='/' className=''>
          <img
            className='btn btn-ghost normal-case'
            alt='Logo de la página'
            src={logoNew}
          />
          <span>Onara</span>
        </Link>
        {/* Cart */}
        <CartWidget />
      </div>
    </>
  );
};
export default NavBar;
