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
      if (count <= 140) {
        setCount(count - count);
      }
    };
    return (
      <section>
        <h3>{count}</h3>
        <div className="main-btn">
          <button className={`${type}`} onClick={coundHandler}>
            +
          </button>
          <button className={`${type}`} onClick={minusHandler}>
            -
          </button>
          <button className={`${type}`} onClick={resetHandler}>
            Reset
          </button>
        </div>
      </section>
    );
}

export default CounterButton;