import { useEffect, useState } from "react";
import dataProducts from "../data/data";
import Item from "./Item";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((res, rej) => {
      setTimeout(() => {
        res(dataProducts);
      }, 2000);
    });

    getProducts
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        console.log("Hubo un error en la promesa", err);
      });
  }, []);

  return (
    <div className='grid gap-4 tablet:gap-12 grid-cols-16 mx-16 justify-items-center pb-8'>
      {products.length ? (
        <>
          {products.map((product, i) => {
            return (
              <Item
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
