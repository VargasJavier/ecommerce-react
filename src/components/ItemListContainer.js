const ItemListContainer = (props) => {
  return (
    <div className='m-3 p-2 rounded-md bg-sky-800 h-3/6 flex justify-center items-center'>
      <h1>{props.name}</h1>
    </div>
  );
};
export default ItemListContainer;
