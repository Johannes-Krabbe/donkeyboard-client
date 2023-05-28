import { useEffect, useState } from "react";

export const useTimer = () => {
  const [timer, setTime] = useState<number>(0);
  const [referenceTime, setReferenceTime] = useState(Date.now());
  const [timerActive, setTimerActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timerActive) {
        setTime((prevTime) => {
          const now = Date.now();
          const interval = now - referenceTime;
          setReferenceTime(now);
          return prevTime + interval;
        });
      }
    });
    return () => clearInterval(interval);
  }, [timer, timerActive, referenceTime]);

  const startTimer = () => {
    setReferenceTime(Date.now());
    setTimerActive(true);
  };
  const stopTimer = () => setTimerActive(false);
  const resetTimer = () => {
    setTimerActive(false);
    setTime(0);
  };

  return {
    timer,
    startTimer,
    stopTimer,
    resetTimer,
  };
};
