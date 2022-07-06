import React from 'react';
import {useCounter} from '../hooks/useCounter';

function Counter() {
  const {count, increment, decrement} = useCounter();

  return ( 
    <>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </> 
  );
}

export default Counter;