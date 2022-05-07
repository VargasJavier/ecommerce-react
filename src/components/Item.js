import { Link } from "react-router-dom";

const Item = ({ id, name, description, price, thumbnail }) => {
  return (
    <Link
      to={`/productos/${id}`}
      className='bg-white p-2 rounded-lg max-w-xs w-auto inline-block cursor-pointer'
      key={id}
    >
      <div className='flex justify-center	w-auto'>
        <img className='h-64' src={thumbnail} alt='Miniatura del producto' />
      </div>
      <h3 className='text-xl font-bold inline-block'>{name}</h3>
      <br />
      <p className='text-sm inline-block'>{description}</p>
      <br />
      <h4 className='text-2xl font-bold text-blue-400 inline-block'>{price}</h4>
    </Link>
  );
};
export default Item;
