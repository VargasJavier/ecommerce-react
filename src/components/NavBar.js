import CartWidget from "./CartWidget";
import logoNew from "../assets/img/logoNew.png";

const NavBar = () => {
  return (
    <>
      {/* Logo y componente CartWidget */}
      <div className='navbar bg-base-100'>
        <div className='flex-1'>
          <img className='btn btn-ghost normal-case' src={logoNew} />
        </div>
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
