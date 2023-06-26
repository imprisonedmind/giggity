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
      const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30)); // Calculate months
      const days = Math.floor((timeDiff / (1000 * 60 * 60 * 24)) % 30); // Calculate remaining days
      const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDiff / 1000) % 60);

      setTimeRemaining({ months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeRemaining) {
    return null;
  }

  const { months, days, hours, minutes, seconds } = timeRemaining;

  let countdownText;
  if (months > 0) {
    countdownText = `${months} Month${months > 1 ? "s" : ""}`;
  } else if (days > 0) {
    countdownText = `${days} Day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    countdownText = `${hours} Hour${hours > 1 ? "s" : ""}`;
  } else if (minutes > 0) {
    countdownText = `${minutes} Minute${minutes > 1 ? "s" : ""}`;
  } else {
    countdownText = `${seconds} Second${seconds > 1 ? "s" : ""}`;
  }

  return (
    <div className="flex h-fit w-fit flex-nowrap rounded-md bg-yellow-500/10 px-2 py-1 text-xs text-yellow-500">
      <p className="text-xs">{countdownText}</p>
    </div>
  );
}
