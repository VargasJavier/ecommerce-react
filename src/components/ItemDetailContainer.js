import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../data/data";
import { getProductsByID } from "../helpers/getItems";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  // Lógica para recibir ID
  const { productId } = useParams();

  // lógica para traer item

  useEffect(() => {
    getProductsByID(dataProducts, setItem, productId);
  }, [productId]);
  // return <h1>PROBANDO ANDOOO</h1>;
  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
