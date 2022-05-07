import Item from "./Item";

const ItemList = ({ products }) => {
  return (
    <div className='grid gap-4 tablet:gap-12 grid-cols-16 mx-16 justify-items-center pb-8'>
      {products.length ? (
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
      ) : (
        <>
          <p>Cargando productos...</p>
        </>
      )}
    </div>
  );
};
export default ItemList;
