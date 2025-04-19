import React from "react";
import {useDispatch} from 'react-redux'
import { uiActions } from "../../store/ui-slice";
const CartButton = () => {
  const dispatch = useDispatch()

  const cartToggleHandler = () => {
    dispatch(uiActions.toggle())
  }
  return (
    <button onClick={cartToggleHandler} className="flex gap-5 items-center bg-yellow-700 px-3 py-1 rounded">
      <span>My Cart</span>
      <span className="font-bold px-2 rounded-full bg-gray-600">1</span>
    </button>
  );
};
export default CartButton;
