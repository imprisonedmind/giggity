import { supabaseAdmin } from "./supabaseClient";

export function parseTimeString(timeString) {
  if (timeString === null) return timeString;
  if (timeString === undefined) return timeString;
  if (timeString === "") return timeString;
  const [hourString, minuteString] = timeString.split(/[: ]/);
  let hour = parseInt(hourString);
  let minute = minuteString ? parseInt(minuteString) : 0;
  if (timeString.includes("pm") && hour < 12) {
    hour += 12;
  }
  const time = new Date();
  time.setHours(hour);
  time.setMinutes(minute);
  time.setSeconds(0);
  time.setMilliseconds(0);
  return `${time.getHours().toString().padStart(2, "0")}:${time
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}

export function parseDateString(dateString) {
  if (dateString === null) return dateString;
  if (dateString === undefined) return dateString;
  if (dateString === "") return dateString;
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const [dayString, monthString] = dateString.split(" ");
  const day = parseInt(dayString);
  const monthIndex = new Date(`${monthString} 1`).getMonth();
  const date = new Date(currentYear, monthIndex, day);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const dayOfMonth = date.getDate().toString().padStart(2, "0");
  return `${year}-${month}-${dayOfMonth}`;
}

export const timeOptions = {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
};

export const dateOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
};

export function convertToMonthYear(dateString) {
  const date = new Date(dateString);
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  return `${month} ${year}`;
}

export const signOut = (router) =>
  supabaseAdmin.auth.signOut().then((res) => router.push("/app"));

export const copyRightDate = new Date();
