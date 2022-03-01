import { Child } from 'Child';
import React, { useState, MouseEventHandler } from 'react';

export const MyContext = React.createContext<ContextValueType>({} as ContextValueType);

interface ContextValueType {
  name : string,
  handleClick: MouseEventHandler,
}
export const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const handleClick = () => setCount((cnt) => cnt + 1);

  const value: ContextValueType = {
    name: 'Hello Typescript',
    handleClick: handleClick,
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
