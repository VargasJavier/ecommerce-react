import Item from "./Item";
import Skeleton from "./Skeleton";
import errorCat from "../assets/svg/errorCat.svg";

const ItemList = ({ products }) => {
  return (
    <div className='grid gap-4 tablet:gap-12 mx-4 mt-8 grid-cols-16 justify-items-center pb-8'>
      {products.length ? (
        products === "false" ? (
          <div className='h-auto flex flex-col justify-center items-center my-16'>
            <img
              src={errorCat}
              alt='Imagen de categoría no encontrada'
              className='h-96'
            />
            <p className='text-lg text-title'>Categoría no encontrada</p>
          </div>
        ) : (
          <>
            {products.map((product, i) => {
              return (
                <Item
                  id={product.id}
                  key={i}
                  name={product.name}
                  description={product.description}
                  thumbnail={product.thumbnail}
                  price={product.price}
                />
              );
            })}
          </>
        )
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </div>
  );
};
export default ItemList;
