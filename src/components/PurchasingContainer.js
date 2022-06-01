import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Purchasing from "./Purchasing";
import { getIDFirebase } from "../helpers/getItems";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";

const PurchasingContainer = () => {
  const cartContext = useContext(CartContext);
  const { checkout } = cartContext;
  const [id, setID] = useState("");
  const db = getFirestore();

  const getIDFirebasePromise = async () => {
    id = await getIDFirebase(
      db,
      collection,
      getDocs,
      query,
      where,
      checkout.email,
      setID
    );
    console.log("ID PURCHASE:", id);
  };

  useEffect(() => {
    getIDFirebasePromise();
  }, []);

  return <Purchasing checkout={checkout} id={id} />;
};
export default PurchasingContainer;
