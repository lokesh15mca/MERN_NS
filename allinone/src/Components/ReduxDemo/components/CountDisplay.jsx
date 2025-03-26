// CountDisplay.js
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../Action/Action';

const CountDisplay = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.count);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment(1))}>Increment</button>
      <button onClick={() => dispatch(decrement(1))}>Decrement</button>
    </div>
  );
};

export default CountDisplay;
