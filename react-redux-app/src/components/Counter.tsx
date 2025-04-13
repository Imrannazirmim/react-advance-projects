import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
} from "../app/feature/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <button type="button" onClick={() => dispatch(increment())}>
        +
      </button>
      <button type="button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <button type="button" onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
};
export default Counter;
