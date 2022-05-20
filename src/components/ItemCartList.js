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
    <div>
      {items.length ? (
        <>
          <span className='font-bold text-xl'>{`${items.length} ${
            items.length > 1 ? "items" : "item"
          }`}</span>
          <br />
          <span className='font-thin text-sm'>{`${totalProducts(items)}
           ${totalProducts(items) > 1 ? "productos" : "producto"}`}</span>
          {items.map((item) => {
            return (
              <ItemCart
                key={item.id.toString()}
                item={item}
                removeItem={removeItem}
              />
            );
          })}
          <span className='text-info text-lg my-2'>{`$${totalPrice()}`}</span>
          {isWidget ? (
            <div className='card-actions pt-2'>
              <Link to='./cart' className='btn btn-primary btn-block'>
                Ver carrito
              </Link>
            </div>
          ) : (
            <div className='h-96 flex justify-center items-center'>
              <button
                onClick={() => {
                  const countItems = `${totalProducts(items)} ${
                    totalProducts(items) > 1 ? "productos" : "producto"
                  }`;
                  alert(
                    `Tienes ${countItems} y debes pagar s/ ${totalPrice()}`
                  );
                }}
                className='btn btn-primary'
              >
                Comprar
              </button>
            </div>
          )}
        </>
      ) : (
        <>
          <div
            className={`flex flex-col justify-center items-center w-64 h-auto p-4`}
          >
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
