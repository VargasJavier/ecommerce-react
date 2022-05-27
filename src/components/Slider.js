import { Link } from "react-router-dom";

const Slider = ({ category, categoryName }) => {
  const { id, image } = category;
  return (
    <>
      {id === categoryName ? (
        <>
          <Link to={`/category/${id}`} className='flex-none'>
            <div className='rounded-full border-slate-600 bg-white border-[.05px] shadow-lg'>
              <img
                className='w-20 h-20 tablet:w-24 tablet:h-24 laptop:w-28 laptop:h-28 rounded-full object-contain'
                src={image}
                alt='Imagen de una categoría'
              />
            </div>
          </Link>
        </>
      ) : (
        <>
          <Link to={`/category/${id}`} className='flex-none'>
            <div className='rounded-full bg-white border-2 shadow-lg'>
              <img
                className='w-[4.25rem] h-[4.25rem] tablet:w-24 tablet:h-24 laptop:w-28 laptop:h-28 rounded-full object-contain'
                src={image}
                alt='Imagen de una categoría'
              />
            </div>
          </Link>
        </>
      )}
    </>
  );
};

export default Slider;
