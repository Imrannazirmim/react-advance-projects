import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthincation);
  const dispatch = useDispatch();


  const handleLogout = () => {

    dispatch(authActions.logout())
  }
  return (
    <header className="w-full flex justify-between  size-20 bg-blue-800  text-white ">
      <h2 className="ml-3 pt-4 font-semibold text-2xl">Redux Auth</h2>
      {isAuth && (
        <nav className="flex justify-between items-center ">
          <ul className="flex items-center gap-3 p-4">
            <li>My Product</li>
            <li>My Sales</li>
            <button onClick={handleLogout} className="px-4 py-2 rounded-lg bg-amber-500">
              Logout
            </button>
          </ul>
        </nav>
      )}
    </header>
  );
};
export default Header;
