import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsByIDFirebase } from "../helpers/getItems";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  // Lógica para recibir ID
  const { productId } = useParams();

  // lógica para traer item
  useEffect(() => {
    const db = getFirestore();
    getProductsByIDFirebase(db, setItem, productId, doc, getDoc);
  }, [productId]);
  // return <h1>PROBANDO ANDOOO</h1>;
  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
