import React, { useState } from "react";

const Counter = () => {
  const [Counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(Counter + 1);
  };
  const decrement = () => {
    setCounter(Counter - 1);
  };
  const reset = () => {
    setCounter(0);
    console.log("djjh");
  };

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {Counter}</h2>
        <div className="card__btns">
          <button disabled={Counter===5? true:false} onClick={increment} className="btn card__btn">
            +
          </button>
          <button disabled={Counter===-5? true:false} onClick={decrement} className="btn card__btn">
            -
          </button>
          <button disabled={Counter===0? true:false} onClick={reset} className="btn card__btn">
            0
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
