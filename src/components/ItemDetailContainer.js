import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import dataProducts from "../data/data";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  // Lógica para recibir ID
  const { productId } = useParams();

  // lógica para traer item

  useEffect(() => {
    const getItemDetail = new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataItem = dataProducts.find((r) => r.id == productId);
        dataItem
          ? resolve(dataItem)
          : reject((err) => console.log("Tenemos de error: ", err));
      }, 100);
    });

    getItemDetail
      .then((result) => {
        setItem(result);
      })
      .catch((err) => {
        console.log("Hubo un error al traer el item", err);
      });
  }, [productId]);
  // return <h1>PROBANDO ANDOOO</h1>;
  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;
