import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Skeleton from "./components/Skeleton";
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
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='item/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
