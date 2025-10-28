import { useEffect, useState } from "react";
import { FaRedo } from "react-icons/fa";
import "./styles.css";

const CounterApp = () => {
  const [value, setValue] = useState(0);

  const handleDecrement = () =>
    setValue((prev) => {
      return prev !== 0 ? (prev -= 1) : 0;
    });

  const handleIncrement = () =>
    setValue((prev) => {
      return (prev += 1);
    });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        handleDecrement();
      } else if (e.key === "ArrowUp") {
        handleIncrement();
      } else if (e.key === "r" || e.key === "R") {
        setValue(0);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="container">
      <div className="counter-container-outer">
        <div className="counter-container-inner">
          <button onClick={handleDecrement} className="counter-button">
            -
          </button>
          <text className="counter-value">{value}</text>
          <button onClick={handleIncrement} className="counter-button">
            +
          </button>
        </div>
        <i onClick={() => setValue(0)} className="reset-icon">
          <FaRedo size={14} color="black" />
        </i>
      </div>
    </div>
  );
};

export default CounterApp;
