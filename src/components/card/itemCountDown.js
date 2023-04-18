"use client";
import { useEffect, useState } from "react";

export default function ItemCountDown({ date, time }) {
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    const eventDate = new Date(date);
    const [hours, minutes, seconds] = time.split(":");
    eventDate.setHours(hours, minutes, seconds);

    if (eventDate < new Date()) {
      setTimeRemaining(null);
      return;
    }

    const interval = setInterval(() => {
      const now = new Date();
      const timeDiff = eventDate.getTime() - now.getTime();
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setTimeRemaining({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeRemaining) {
    return null;
  }

  const { days, hours, minutes, seconds } = timeRemaining;

  let countdownText;
  if (days > 0) {
    countdownText = `In ${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    countdownText = `In ${hours} hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    countdownText = `In ${minutes} minute${minutes > 1 ? "s" : ""}`;
  } else {
    countdownText = `In ${seconds} second${seconds > 1 ? "s" : ""}`;
  }

  return (
    <div
      className={
        "mt-2 flex h-fit w-fit flex-nowrap rounded-md bg-yellow-500/10 px-2 py-1" +
        " text-xs text-yellow-500"
      }
    >
      <p className={"text-xs"}>{countdownText}</p>
    </div>
  );
}
