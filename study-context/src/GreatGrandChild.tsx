import React, { useContext } from 'react';
import { MyContext } from 'App';

export const GreatGrandChild = () => {
  const context = useContext(MyContext);

  return (
    <>
      <p>{context.name}</p>
      <button onClick={context.handleClick}>Increment</button>
    </>
  );
};
