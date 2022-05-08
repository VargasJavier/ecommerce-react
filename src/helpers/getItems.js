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
    }, 1000);
  });

  getItems
    .then((result) => {
      setItemsByCategory(result);
    })
    .catch((err) => {
      console.log("Hubo un error al traer la categoría", err);
    });
};
