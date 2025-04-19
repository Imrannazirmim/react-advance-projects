import CartButton from "../Cart/CartButton.jsx";

const MainHeader = () => {

  return (
    <header className="w-full h-[5rem] bg-gray-900 flex items-center justify-between p-4 text-white">
      <h2 className="text-xl">Shopping Cart</h2>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
