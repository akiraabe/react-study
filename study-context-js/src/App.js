import React, { useState, createContext } from 'react';
import { Child } from './Child';

export const MyContext = createContext();

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => setCount((cnt) => cnt + 1);

  const value = {
    name: 'Hello',
    handleClick,
  };

  return (
    <div>
      <p>count: {count}</p>
      <MyContext.Provider value={value}>
        <Child />
      </MyContext.Provider>
    </div>
  );
};

export default App;
