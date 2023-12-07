import React, { useCallback, useState } from 'react';
import HelloChild from './Child22';

function ParentComponent() {
    console.log("parent")
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const increment =useCallback(() => {
    console.log("incr")
    setCount((prevCount) => prevCount + 1);
  },[count])

  const decrement = useCallback(() => {
    setCount1((prevCount) => prevCount + 1);
  },[count1])

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <HelloChild onButtonClick={decrement} count={count1} />
    </div>
  );
}

export default ParentComponent;
