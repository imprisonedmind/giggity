export default function ItemDateTime({ eventDate, eventTime }) {
  const dateObj = new Date(eventDate);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Get the hour and minute components of the event time
  const [hour, minute] = eventTime.split(":");

  // Convert the hour to 12-hour format and add the AM/PM suffix
  let hour12 = parseInt(hour, 10) % 12;
  if (hour12 === 0) {
    hour12 = 12;
  }
  const amPm = parseInt(hour, 10) >= 12 ? "PM" : "AM";

  const dayOfWeek = daysOfWeek[dateObj.getDay()];
  const month = monthNames[dateObj.getMonth()];
  const dateOfMonth = dateObj.getDate();

  return (
    <div
      className={
        "relative flex h-fit flex-shrink-0 flex-nowrap overflow-hidden text-sm" +
        "  text-neutral-500 md:text-xs"
      }
    >
      <p>
        {dayOfWeek}, {month} {dateOfMonth}
      </p>
      <p className="px-1">·</p>
      <p>
        {hour12}:{minute} {amPm}
      </p>
    </div>
  );
}
