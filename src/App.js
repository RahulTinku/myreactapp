import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INCREMENT', payload: 5 });
  };

  const decrement = () => {
    dispatch({ type: 'DECREMENT', payload: 5 });
  };

  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default App;
