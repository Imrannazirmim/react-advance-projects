import DeleteProduct from "./components/DeleteProduct.jsx";
import AllProducts from "./components/AllProducts.jsx";

const App = () => {
  return (
    <>
      <AllProducts />
      <DeleteProduct productId={2} />
    </>
  );
};
export default App;
