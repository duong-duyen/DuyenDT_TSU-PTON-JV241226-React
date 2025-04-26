import React, {  useRef, useState } from 'react'

export default function Watch() {

  const intervalId = useRef(null);
  const [seconds, setSeconds] = useState(0)

  const handleStart = () => {
    if (intervalId.current !== null) return;
    intervalId.current = setInterval(() =>{
      setSeconds((prev) => prev + 1)
    }, 1000)
  };

  const handleStop = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
  };
  const handleReset = () => {
    handleStop();
    setSeconds(0);
  };


  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>{seconds} giây</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}
