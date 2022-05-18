import { AiOutlineDelete as IconDelete } from "react-icons/ai";
import { Link } from "react-router-dom";

const ItemCart = ({ item, removeItem }) => {
  return (
    <Link
      to={`/item/${item.id}`}
      className='flex justify-between rounded p-2 my-2 items-center w-72 bg-white'
    >
      <section className='flex items-center'>
        <div>
          <img
            className='h-12 rounded-full'
            src={item.thumbnail}
            alt='Miniatura de Item'
          />
        </div>
        <section className='ml-2'>
          <h3 className='font-bold text-slate-500'>{item.name}</h3>
          <p>{`Cantidad: ${item.qty}`}</p>
        </section>
      </section>
      <button onClick={() => removeItem(item.id)}>
        <IconDelete className='w-6 h-6 fill-slate-600' />
      </button>
    </Link>
  );
};
export default ItemCart;
