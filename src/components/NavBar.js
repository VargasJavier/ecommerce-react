import CartWidget from "./CartWidget";
import logoNew from "../assets/img/logoNew.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* Logo y componente CartWidget */}
      <div className='navbar bg-base-100'>
        <Link to='/' className='flex-1'>
          <img className='btn btn-ghost normal-case' src={logoNew} />
        </Link>
        <div className='flex-none'>
          <CartWidget />
          <div className='dropdown dropdown-end'>
            <label tabindex='0' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img src='https://api.lorem.space/image/face?hash=33791' />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
