export const getProductsFirebase = (db, setProducts, collection, getDocs) => {
  const itemsCollection = collection(db, "items");
  getDocs(itemsCollection).then((snapshop) => {
    if (snapshop.size === 0) console.log("No results");
    setProducts(snapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
};

export const getProductsByIDFirebase = (
  db,
  setItem,
  productId,
  doc,
  getDoc
) => {
  const itemRef = doc(db, "items", productId);
  getDoc(itemRef).then((snapshop) => {
    if (!snapshop.exists()) console.log("No result");
    else setItem({ id: snapshop.id, ...snapshop.data() });
  });
};

export const getProductsByCategoryFirebase = (
  db,
  setItemsByCategory,
  categoryID,
  collection,
  getDocs,
  query,
  where
) => {
  // MODIFICAR LA CATEGORIA PARA RECIBIR EL ITEM
  const q = query(collection(db, "items"), where("category", "==", categoryID));

  getDocs(q).then((snapshop) => {
    if (snapshop.size === 0) console.log("No results");
    setItemsByCategory(
      snapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  });
};

export const getCategoryFirebase = (db, setCategories, collection, getDocs) => {
  const categoryCollection = collection(db, "category");
  getDocs(categoryCollection).then((snapshop) => {
    if (snapshop.size === 0) console.log("No results");
    setCategories(snapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
};
