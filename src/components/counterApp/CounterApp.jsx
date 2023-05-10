import { useState } from "react";
import CounterButton from "../counterButton/CounterButton";
import "./counterApp.style.css";

const CounterApp = () => {

    return (
      <div className="main">
        <h1>Counter</h1>
        <CounterButton type="btn" />
      </div>
    );
}

export default CounterApp;