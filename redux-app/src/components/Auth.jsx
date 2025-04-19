import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import React from "react";

const Auth = () => {
  const dispatch = useDispatch();

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(authActions.login())
  }

  return (
    <form onSubmit={handleLogin} className="w-[25rem] mx-auto p-4 m-2 rounded shadow flex flex-col items-center gap-2">
      <div className="w-[20rem]">
        <label htmlFor="email">EMAIL: </label>
        <input type="email" className="w-full p-1 rounded border border-gray-300 " />
      </div>
      <div className="w-[20rem]">
        <label htmlFor="password">PASSWORD: </label>
        <input type="password" className="w-full p-1 rounded border border-gray-300 " />
      </div>
      <div>
        <button type="submit" className="px-4 py-2 rounded bg-blue-800 text-white">Login</button>
      </div>
    </form>
  );
};
export default Auth;
