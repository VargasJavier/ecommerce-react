import NavBar from "./NavBar";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <>
      <NavBar />
      <h1 className='text-5xl text-center text-white p-8'>
        Camisetas a la venta
      </h1>
      <ItemList />
    </>
  );
};
export default ItemListContainer;
