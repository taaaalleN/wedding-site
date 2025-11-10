import { useState, useEffect } from "preact/hooks";

export function Countdown(props) {
  const [counter, setCounter] = useState(null);
  // const [todaysDate, setTodaysDate] = useState(null);
  // const [targetDate, setTargetDate] = useState(null);

  // Sätta ett datum
  // Ta dagens datum och räkna ut skillnaden mellan dagens och måldatumet
  // Antar att det blir sekunder - omvandla till år, månader, dagar, timmar, minuter, sekunder
  // Visa och useEffect för att rendera på nytt varje gång "counter" ändras

  const padTime = (time) => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
  };

  const formattedTime = (timeLeft) => {
    //Return combined values as string in format mm:ss
    return `${padTime(timeLeft.days)} days ${padTime(timeLeft.hours)} hours ${padTime(timeLeft.minutes)} minutes ${padTime(timeLeft.seconds)} seconds`;
  };

  const formattedTimeAlternative = (timeLeft) => {
    //Return combined values as string in format mm:ss
    return `${padTime(timeLeft)}`;
  };

  function calculateTimeLeft(date) {
    if (!date) throw new Error("No target date provided");

    let startTimestamp = null;
    if (typeof date === "string") {
      startTimestamp = new Date(date).getTime();
    } else if (date instanceof Date) {
      startTimestamp = date.getTime();
    } else {
      startTimestamp = date;
    }

    var timeLeft = startTimestamp - Date.now();
    // console.log("startTimestamp", startTimestamp);
    // console.log("Date.now()", Date.now());
    var total = Math.round(parseFloat((Math.max(0, timeLeft) / 1000).toFixed(2)) * 1000);
    var seconds = Math.abs(total) / 1000;

    return {
      total: total,
      days: Math.floor(seconds / (3600 * 24)),
      hours: Math.floor((seconds / 3600) % 24),
      minutes: Math.floor((seconds / 60) % 60),
      seconds: Math.floor(seconds % 60),
      // milliseconds: Number(((seconds % 1) * 1000).toFixed()),
      completed: total <= 0,
    };
  }

  useEffect(() => {
    const timeLeft = calculateTimeLeft(props.targetDate);
    setCounter(timeLeft);
  }, []);

  useEffect(() => {
    const timeLeft = calculateTimeLeft(props.targetDate);
    setCounter(timeLeft);
  }, [counter]);

  // useEffect(() => {
  //   // console.log("targetDate: ", targetDate);
  //   // console.log("props.targetDate: ", props.targetDate);

  //   if (!props.targetDate) throw new Error("No target date provided");

  //   // setTargetDate(props.targetDate);
  //   // const targetDateInMs = new Date(targetDate).getTime();
  //   // const todaysDateInMs = new Date(todaysDate).getTime();
  //   counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  // }, [counter]);

  return (
    <div>
      {counter === 0 || counter === null ? (
        <p>Wedding time!</p>
      ) : (
        <div class="counter__wrapper" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <p>Countdown</p>
          <div>
            <span class="counter days">{formattedTimeAlternative(counter.days)}&nbsp;</span> days&nbsp;
            <span class="counter hours">{formattedTimeAlternative(counter.hours)}&nbsp;</span> hours&nbsp;
            <span class="counter minutes">{formattedTimeAlternative(counter.minutes)}&nbsp;</span> minutes&nbsp;
            <span class="counter seconds">{formattedTimeAlternative(counter.seconds)}&nbsp;</span> seconds left&nbsp;
          </div>
        </div>
      )}
    </div>
  );
  // return <div>{counter === 0 || counter === null ? <p>Wedding time!</p> : <p>Counting down: {formattedTime(counter)} left</p>}</div>;
}
