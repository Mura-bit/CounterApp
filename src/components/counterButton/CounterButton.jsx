import { useState } from "react";
import "./counterButton.style.css";
const CounterButton = ({ type }) => {
    const [count, setCount] = useState(0);
    const coundHandler = () => {
        if (count <= 140) {
            setCount(count + 10)
        }
    };

    const minusHandler = () => {
      if (count >= 10) {
        setCount(count - 10);
      }
    };

    const resetHandler = () => {
      if (count <= 150) {
        setCount(count - count);
      }
  };
  const multiHandler = () => {
    if (count <= 145) {
      setCount(count + 5);
    }
  };
  const devideHandler = () => {
    if (count >= 5) {
      setCount(count - 5);
    }
  };
    return (
      <section>
        <h3>{count}</h3>
        <div className="main-btn">
          <button className={`${type}`} onClick={coundHandler}>
            + 10
          </button>
          <button className={`${type}`} onClick={minusHandler}>
            - 10
          </button>
          <button className={`${type}`} onClick={resetHandler}>
            Reset
          </button>
          <button className={`${type}`} onClick={multiHandler}>
            + 5
          </button>
          <button className={`${type}`} onClick={devideHandler}>
            - 5
          </button>
        </div>
      </section>
    );
}

export default CounterButton;