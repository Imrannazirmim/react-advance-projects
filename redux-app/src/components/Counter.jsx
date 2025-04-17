import { useDispatch, useSelector } from "react-redux";
import  counterActions  from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleIncrementBy5 = () => {
    dispatch(counterActions.incrementBy5(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className="w-[70%] shadow p-4 m-3 flex justify-center mx-auto gap-3 flex-col items-center">
      <h1>Redux Counter</h1>
      {show && <div className="bg-blue-300 px-4 py-2 rounded">{counter}</div>}

      <button
        className="px-4 py-2 rounded-lg bg-blue-800 text-white"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 rounded-lg bg-blue-800 text-white"
        onClick={handleIncrementBy5}
      >
        IncrementBy5
      </button>
      <button
        className="px-4 py-2 rounded-lg bg-blue-800 text-white"
        onClick={handleDecrement}
      >
        Decrement
      </button>
      <button
        className="px-4 py-2 rounded-lg bg-gray-800 text-white"
        onClick={toggleCounterHandler}
      >
        Toggle Counter
      </button>
    </main>
  );
};
export default Counter;
