import React, { useState, useRef } from 'react';

import "./Stopwatch.css"

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const stop = () => {
    if (running) {
      clearInterval(timerRef.current);
      setRunning(false);
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setTime(0);
    setRunning(false);
  };

  return (
    <div>
      <h2>Stopwatch: {time}s</h2>
      <div className='stopwatch-buttons'>
      <button className='start-button' onClick={start}>Start</button>
      <button className='stop-button' onClick={stop}>Stop</button>
      <button className='reset-button' onClick={reset}>Reset</button>

      </div>
    </div>
  );
};

export default Stopwatch;
