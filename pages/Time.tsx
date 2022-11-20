import { useState } from "react";
const Time = () => {
  let s = new Date().toLocaleString();
  const [time, setTime] = useState(s);
  const updateTime = () => {
    let s = new Date().toLocaleString();
    setTime(s);
  };
  setInterval(updateTime, 1000);

  return <div className="pt-16 text-4xl">Time test:{s}</div>;
};

export default Time;
