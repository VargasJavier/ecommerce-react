import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import dataProducts from "../data/data";
import { useParams } from "react-router-dom";
import { getProducts, getProductsByCategory } from "../helpers/getItems";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    categoryId
      ? getProductsByCategory(dataProducts, setProducts, categoryId)
      : getProducts(dataProducts, setProducts);
  }, [categoryId]);

  return (
    <>
      <h1 className='text-5xl text-center text-gray-700 p-8'>
        Camisetas a la venta
      </h1>
      <ItemList products={products} />
    </>
  );
};
export default ItemListContainer;
