import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  getProductsByCategoryFirebase,
  getProductsFirebase,
} from "../helpers/getItems";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import SliderListContainer from "./SliderListContainer";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { categoryName } = useParams();
  useEffect(() => {
    const db = getFirestore();
    categoryName
      ? getProductsByCategoryFirebase(
          db,
          setProducts,
          categoryName,
          collection,
          getDocs,
          query,
          where
        )
      : getProductsFirebase(db, setProducts, collection, getDocs);
  }, [categoryName]);

  return (
    <>
      <SliderListContainer categoryName={categoryName} />
      <ItemList products={products} />
    </>
  );
};
export default ItemListContainer;
