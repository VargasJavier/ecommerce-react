import { Link } from "react-router-dom";
import { FaArrowLeft as IconLeft } from "react-icons/fa";
import { setOrderFinished } from "../helpers/getItems";

const Checkout = ({
  totalPrice,
  db,
  addDoc,
  collection,
  totalProducts,
  addCheckout,
  cart,
}) => {
  let priceTotal = totalPrice() + 5;
  return (
    <>
      <Link to='/cart' className='p-0'>
        <IconLeft className='text-2xl mt-2 ml-2' />
      </Link>
      <h1 className='text-xl text-center font-bold text-title pt-0'>
        Checkout
      </h1>
      <section className='flex flex-col items-center laptop:flex-row laptop:mx-8 laptop:space-x-4 desktop:w-2/3 justify-center'>
        <main className='px-2 mb-8 w-full'>
          <h2 className='text-lg text-title'>Detalles de facturación</h2>
          <form className='flex flex-col'>
            <label className='font-thin text-sm text-title mt-2' htmlFor='name'>
              Name
            </label>
            <input
              className='input input-bordered focus:outline-secondary bg-white'
              id='name'
              type='text'
              placeholder='Javier Alejandro'
            />
            <label
              className='font-thin text-sm text-title mt-2'
              htmlFor='lastName'
            >
              Last name
            </label>
            <input
              className='input input-bordered focus:outline-secondary bg-white'
              id='lastName'
              type='text'
              placeholder='Vargas Mexico'
            />
            <label
              className='font-thin text-sm text-title mt-2'
              htmlFor='email'
            >
              Email address
            </label>
            <input
              className='input input-bordered focus:outline-secondary bg-white'
              id='email'
              type='email'
              placeholder='@'
            />
            <label
              className='font-thin text-sm text-title mt-2'
              htmlFor='emailConfirm'
            >
              Confirm e-mail
            </label>
            <input
              className='input input-bordered focus:outline-secondary bg-white'
              id='emailConfirm'
              type='email'
              placeholder='@'
            />
            <label
              className='font-thin text-sm text-title mt-2'
              htmlFor='address'
            >
              Address
            </label>
            <input
              className='input input-bordered focus:outline-secondary bg-white'
              id='address'
              type='text'
              placeholder='Av. Universitaria #3455'
            />
          </form>
        </main>
        <aside className='pb-4 px-2 w-full mobile:w-4/5 tablet:w-2/3 laptop:w-2/3 desktop:w-4/5'>
          <section className='border-[1px] border-title'>
            <div className='flex flex-col items-center'>
              <div className='flex justify-between items-center w-full px-4'>
                <span>Sub Total:</span>
                <span className='text-title font-bold text-lg my-2'>{`$${totalPrice()}`}</span>
              </div>
              <div className='flex justify-between items-center w-full px-4'>
                <span>Shipping:</span>
                <span className='text-title font-bold text-lg my-2'>{`$5.00`}</span>
              </div>
              <hr className='w-full px-4' />
              <div className='flex justify-between items-center w-full px-4'>
                <span>Total:</span>
                <span className='text-secondary font-bold text-lg my-2'>{`$${priceTotal}`}</span>
              </div>
            </div>
          </section>
          <Link
            to='/purchasing'
            onClick={async (e) => {
              const name = document.getElementById("name").value;
              const lastName = document.getElementById("lastName").value;
              const email = document.getElementById("email").value;
              const email2 = document.getElementById("emailConfirm").value;
              const address = document.getElementById("address").value;
              const totalProductos = totalProducts(cart);
              const emailRegex =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
              if (
                name.length > 0 &&
                lastName.length > 0 &&
                email.length > 0 &&
                address.length > 0
              ) {
                //Se muestra un texto a modo de ejemplo, luego va a ser un icono
                if (emailRegex.test(email)) {
                  if (email === email2)
                    await setOrderFinished(
                      db,
                      addDoc,
                      collection,
                      name,
                      lastName,
                      email,
                      address,
                      priceTotal,
                      totalProductos,
                      addCheckout
                    );
                  else {
                    alert("Los correos electrónicos no coinciden");
                    e.preventDefault();
                  }
                } else {
                  alert("Debe ingresar un email válido");
                  e.preventDefault();
                }
              } else {
                alert("Recuerda llenar todos los campos");
                e.preventDefault();
              }
            }}
            className='bg-secondary border-secondary text-white w-full px-4 hover:bg-secondary-hover hover:border-none mt-4 py-2 btn rounded-md font-bold'
          >
            Pay ${priceTotal}
          </Link>
        </aside>
      </section>
    </>
  );
};
export default Checkout;
