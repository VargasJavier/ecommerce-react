import { BsFillCheckCircleFill as IconCheck } from "react-icons/bs";
import { Link } from "react-router-dom";

const Purchasing = ({ checkout, id }) => {
  const { fullName, email } = checkout;
  const name = fullName.trim().split(" ")[0];
  return (
    <div className='w-full h-full bg-slate-100 py-28 px-4'>
      {id ? (
        <>
          <div className='bg-white rounded-sm p-4 shadow-sm flex flex-col items-center text-title'>
            <IconCheck className='h-12 w-12 fill-green-600' />
            <h2 className='text-3xl py-2 font-bold text-title'>Gracias</h2>
            <p>Tu pedido se ha enviado.</p>
            <br />
            <p>{`En unos minutos, recibirás un correo con la confirmación de tu compra, ${name}.`}</p>
            <br />
            <div>
              <p className='font-light text-sm'>
                Correo: <span className='font-bold'>{email}</span> }
              </p>
              <p className='font-light text-sm'>
                Orden de compra: <span className='font-bold'>{id}</span>}
              </p>
              <br />
              <div className='flex justify-center'>
                <Link to='/' className='btn btn-outline'>
                  Seguir comprando
                </Link>
              </div>
              <br />
              <p className='text-center text-sm'>
                Recuerda que si no recibes el producto en 72 horas será
                <span className='font-bold'> ¡GRATIS!</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='bg-white rounded-sm p-4 shadow-sm flex flex-col items-center text-title'>
            <button className='btn loading'></button>
          </div>
        </>
      )}
    </div>
  );
};
export default Purchasing;
