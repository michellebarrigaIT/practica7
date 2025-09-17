import { type FC, useEffect, useState } from "react";
import "./KeyboardControlledCounter.scss";

const Counter: FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => 
    setCount((prev) => prev + 1);

  const decrement = () =>
    setCount((prev) => (prev > 0 ? prev - 1 : prev));

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        increment();
      } else if (e.key === "ArrowDown") {
        decrement();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container" >
      <h2>Counter: {count}</h2>
      <div>
        <button onClick={increment}>
          +
        </button>
        <button onClick={decrement} disabled={count === 0}>
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
