import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import dataProducts from "../data/data";

const ItemListContainer = () => {
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
    <>
      <h1 className='text-5xl text-center text-white p-8'>
        Camisetas a la venta
      </h1>
      <ItemList products={products} />
    </>
  );
};
export default ItemListContainer;
