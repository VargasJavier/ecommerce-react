export const getProducts = (dataProducts, setProducts) => {
  const getItems = new Promise((res, rej) => {
    setTimeout(() => {
      dataProducts
        ? res(dataProducts)
        : rej((err) => console.log("Error: ", err));
    }, 1000);
  });

  getItems
    .then((result) => {
      setProducts(result);
    })
    .catch((err) => {
      console.log("Hubo un error en la promesa", err);
    });
};

export const getProductsFirebase = (db, setProducts, collection, getDocs) => {
  const itemsCollection = collection(db, "items");
  getDocs(itemsCollection).then((snapshop) => {
    if (snapshop.size === 0) console.log("No results");
    setProducts(snapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  });
};

export const getProductsByID = (dataProducts, setItem, productId) => {
  const getItemDetail = new Promise((resolve, reject) => {
    setTimeout(() => {
      const dataItem = dataProducts.find((r) => r.id == productId);
      dataItem
        ? resolve(dataItem)
        : reject((err) => console.log("Tenemos de error: ", err));
    }, 50);
  });

  getItemDetail
    .then((result) => {
      setItem(result);
    })
    .catch((err) => {
      console.log("Hubo un error al traer el item", err);
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

export const getProductsByCategory = (
  dataProducts,
  setItemsByCategory,
  categoryID
) => {
  const getItems = new Promise((resolve, reject) => {
    setTimeout(() => {
      const getItemsByCategory = dataProducts.filter(
        (r) => r.category.id == categoryID
      );
      getItemsByCategory
        ? resolve(getItemsByCategory)
        : reject((err) => console.log("Tenemos de error: ", err));
    }, 50);
  });

  getItems
    .then((result) => {
      setItemsByCategory(result);
    })
    .catch((err) => {
      console.log("Hubo un error al traer la categoría", err);
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
  const category = categoryID.toUpperCase();
  const q = query(collection(db, "items"), where("category", "==", category));

  getDocs(q).then((snapshop) => {
    if (snapshop.size === 0) console.log("No results");
    setItemsByCategory(
      snapshop.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  });
};
