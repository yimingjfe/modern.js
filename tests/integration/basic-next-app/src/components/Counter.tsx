'use client';
import './Counter.css';
import { increment } from './action';

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="client-component" data-testid="counter-client">
        Client State
        <p data-testid="count">{count}</p>
        <button data-testid="increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>
      <div className="client-component">
        Server State
        <button data-testid="increment" onClick={() => increment(1)}>
          Increment
        </button>
      </div>
    </>
  );
};

export default Counter;
