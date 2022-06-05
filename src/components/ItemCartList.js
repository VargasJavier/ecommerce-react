import { Link } from "react-router-dom";
import ItemCart from "./ItemCart";
import { AiOutlineShoppingCart as CartIcon } from "react-icons/ai";

const ItemCartList = ({
  items,
  removeItem,
  totalProducts,
  totalPrice,
  clear,
}) => {
  return (
    <div className='mt-4 flex flex-col justify-center items-center'>
      {items.length ? (
        <>
          <h2 className='text-title text-2xl font-semibold text-center mb-0'>
            My Cart
          </h2>
          <span className='font-normal text-base block text-center'>{`${totalProducts(
            items
          )}
           ${totalProducts(items) > 1 ? "items" : "item"}`}</span>
          <div className='flex flex-col items-center overflow-y-auto overscroll-y-contain p-4 space-y-4 scrollbar-hide max-h-[30rem] mobile:justify-between w-full mobile:w-4/5 mobile:p-0 tablet:w-2/3 laptop:w-3/5 desktop:w-1/3'>
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
          <section className='mt-16 w-full mobile:w-4/5 mobile:p-0 tablet:w-2/3 laptop:w-full'>
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
            <div className='flex flex-col justify-center items-center mx-4 py-8'>
              <button
                className='my-4 btn btn-outline btn-error'
                onClick={clear}
              >
                Vaciar carrito
              </button>
              <Link
                to='/checkout'
                className='btn btn-primary bg-secondary border-secondary w-full px-4  mobile:w-4/5 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4 hover:bg-secondary-hover hover:border-none'
              >
                Checkout
              </Link>
            </div>
          </section>
        </>
      ) : (
        <>
          <div className={`flex flex-col justify-center items-center w-64 p-4`}>
            <p>Your cart is empty</p>
            <CartIcon className='h-16 w-16 m-2' />
            <div className='card-actions pt-2'>
              <Link
                to='/'
                className='btn btn-primary bg-secondary border-secondary w-full px-4 hover:bg-secondary-hover hover:border-none'
              >
                Back to home
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ItemCartList;
