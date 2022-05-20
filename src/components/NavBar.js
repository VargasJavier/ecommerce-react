import CartWidget from "./CartWidget";
import logoNew from "../assets/img/logoNew.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      {/* Logo y componente CartWidget */}
      <div className='navbar bg-base-100 justify-between'>
        <Link to='/' className=''>
          <img
            className='btn btn-ghost normal-case'
            alt='Logo de la página'
            src={logoNew}
          />
        </Link>
        {/* AGREGAMOS PARA EL PROYECTO */}
        <div>
          <ul className='flex'>
            <Link to='/category/conmebol' className='m-4'>
              CONMEBOL
            </Link>
            <Link to='/category/concacaf' className='m-4'>
              CONCACAF
            </Link>
          </ul>
        </div>
        {/* TERMINA LO AGREGADO */}
        <div className='flex-none'>
          <CartWidget />
          <div className='dropdown dropdown-end'>
            <label tabIndex='0' className='btn btn-ghost btn-circle avatar'>
              <div className='w-10 rounded-full'>
                <img
                  src='https://api.lorem.space/image/face?hash=33791'
                  alt='Foto de perfil'
                />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
export default NavBar;
