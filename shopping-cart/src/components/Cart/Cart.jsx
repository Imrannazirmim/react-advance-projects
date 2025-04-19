import React from "react";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Cart = () => {

  const dispatch =useDispatch();

  const handleIncrementCount = (id) => {
    dispatch(uiActions.toggle(id))
  }

  return (
    <div className="w-[30rem] bg-gray-900 m-4 p-5 rounded mx-auto text-white">
      <h2>Your Shopping Cart</h2>
      <section className="flex justify-between items-center bg-gray-700 p-5 mt-2 rounded">
        <div className="flex flex-col gap-2 ">
          <span>Test Item</span>
          <p>x3</p>
        </div>
        <div className="flex flex-col">
          <span>$18.00 ($6.00/item)</span>
         <div className="flex  gap-5 items-center mt-2">
         <button className="px-4 rounded border" onClick={handleIncrementCount}>-</button>
         <button className="px-4 rounded border">+</button>
         </div>
        </div>
      </section>
    </div>
  );
};
export default Cart;
