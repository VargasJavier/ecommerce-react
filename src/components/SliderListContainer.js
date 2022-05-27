import { useEffect, useState } from "react";
import SliderList from "./SliderList";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getCategoryFirebase } from "../helpers/getItems";

const SliderListContainer = ({ categoryName }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    getCategoryFirebase(db, setCategories, collection, getDocs);
  }, [categoryName]);

  return <SliderList categories={categories} categoryName={categoryName} />;
};

export default SliderListContainer;
