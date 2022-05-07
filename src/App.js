import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
function App() {
  const Saludo = () => {
    return (
      <div className='flex justify-center items-center h-2/3'>
        <Link to='/productos' className='btn m-8'>
          Ir a los productos
        </Link>
      </div>
    );
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route
            path='productos/:productId'
            element={<ItemDetailContainer />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
