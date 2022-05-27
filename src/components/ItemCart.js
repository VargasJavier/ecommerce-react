import { AiOutlineDelete as IconDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ItemCart = ({ item, removeItem }) => {
  return (
    <Link
      to={`/item/${item.id}`}
      className='flex justify-between rounded p-2 my-2 items-center w-full mobile:w-4/5 mobile:p-0 tablet:w-2/3 laptop:w-2/5 desktop:w-1/4'
    >
      <section className='flex items-center'>
        <div className='rounded'>
          <img
            className='h-full max-h-16 tablet:max-h-24 rounded-full'
            src={item.thumbnail}
            alt='Miniatura de Item'
          />
        </div>
        <section className='ml-2'>
          <h3 className='font-bold text-title'>{item.name}</h3>
          <p className='text-title'>{item.price}</p>
          <p>{`Cantidad: ${item.qty}`}</p>
        </section>
      </section>
      <button
        onClick={(e) => {
          e.preventDefault();
          removeItem(item.id);
        }}
      >
        <IconDelete className='w-6 h-6 fill-slate-600' />
      </button>
    </Link>
  );
};
export default ItemCart;
