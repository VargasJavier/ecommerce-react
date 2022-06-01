import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CheckoutContainer from "./components/CheckoutContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import PurchasingContainer from "./components/PurchasingContainer";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route
              path='/category/:categoryName'
              element={<ItemListContainer />}
            />
            <Route path='item/:productId' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart />} />
            <Route path='checkout' element={<CheckoutContainer />} />
            <Route path='purchasing' element={<PurchasingContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
