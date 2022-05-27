import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

const ItemCartList = ({
  items,
  removeItem,
  totalProducts,
  totalPrice,
  isWidget = true,
}) => {
  return (
    <div className='mt-4'>
      {items.length ? (
        <>
          <h2 className='text-title text-2xl font-semibold text-center mb-0'>
            My Cart
          </h2>
          <span className='font-normal text-base block text-center'>{`${totalProducts(
            items
          )}
           ${totalProducts(items) > 1 ? "items" : "item"}`}</span>
          <div className='flex flex-col items-center overflow-y-auto overscroll-y-contain p-4 space-y-4 scrollbar-hide max-h-[30rem] mobile:justify-between'>
            {items.map((item) => {
              return (
                <ItemCart
                  key={item.id.toString()}
                  item={item}
                  removeItem={removeItem}
                />
              );
            })}
          </div>
          <section className='mt-16'>
            <div className='flex flex-col items-center'>
              <div className='flex justify-between items-center w-full px-4 mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4'>
                <span>Sub Total:</span>
                <span className='text-title font-bold text-lg my-2'>{`$${totalPrice()}`}</span>
              </div>
              <div className='flex justify-between items-center w-full px-4 mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4'>
                <span>Shipping:</span>
                <span className='text-title font-bold text-lg my-2'>{`$5.00`}</span>
              </div>
              <hr className='w-full px-4 mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4 my-3 border-dashed border-t-2' />
              <div className='flex justify-between items-center w-full px-4 mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4'>
                <span>Total:</span>
                <span className='text-secondary font-bold text-lg my-2'>{`$${
                  totalPrice() + 5
                }`}</span>
              </div>
            </div>
            <div className='flex justify-center items-center mx-4 py-8'>
              <button
                onClick={() => {
                  const countItems = `${totalProducts(items)} ${
                    totalProducts(items) > 1 ? "productos" : "producto"
                  }`;
                  alert(
                    `Tienes ${countItems} y debes pagar s/ ${totalPrice()}`
                  );
                }}
                className='btn btn-primary bg-secondary border-secondary w-full px-4  mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4 hover:bg-secondary-hover hover:border-none'
              >
                Checkout
              </button>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className={`flex flex-col justify-center items-center w-64 p-4`}>
            <p>Tu carrito está vacío</p>
            <CartIcon className='h-16 w-16 m-2' />
            <div className='card-actions pt-2'>
              <Link to='/' className='btn btn-primary'>
                Volver al home
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ItemCartList;
