import React, { useState } from "react";
// import "../App.css";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  const handleTimer = () => {
    setInterval(() => setTimer((prev) => prev + 1), 1000);
  };

  const handleReset = () => {
    clearInterval(setTimer(0));
  };
  return (
    <div
      className="maincard"
      style={{
        width: "35rem",
        margin: "auto",
        marginTop:"13%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: "#24d5e5",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <h3>Stopwatch</h3>
      <h1>{timer}</h1>

      <div style={{
           marginBottom: "2%",
            gap: "30px",
            }}>
        <button onClick={handleTimer}>Start Timer</button>
        <button onClick={handleReset}>Reset Timer</button>
      </div>
    </div>
  );
};

export default Timer;
