import React, { useState } from 'react';

export function MyComponent(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Update React!!
      </button>
      <button onClick={props.onClick}>
        Update Angular!!
      </button>
    </div>
  );
}