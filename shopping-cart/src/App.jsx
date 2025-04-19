import { Fragment } from "react";
import MainHeader from "./components/Layout/MainHeader.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Products from "./components/Shop/Products.jsx";
import { useSelector } from "react-redux";

const App = () => {
  const showCart = useSelector((state) => state.ui.cartIsVisible);

  return (
    <Fragment>
       <Layout/>
       {showCart && <Cart/>}
       <Products/>
       <Layout/>
    </Fragment>
  );
};
export default App;
