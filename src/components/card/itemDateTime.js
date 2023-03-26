export default function ItemDateTime({ eventDate, eventTime }) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const [year, month, day] = eventDate.split("-");
  const [hours, minutes, seconds] = eventTime.split(":");

  const start = new Date();
  start.setFullYear(parseInt(year));
  start.setMonth(parseInt(month) - 1);
  start.setDate(parseInt(day));
  start.setHours(parseInt(hours));
  start.setMinutes(parseInt(minutes));
  start.setSeconds(parseInt(seconds));

  const time12hr = start.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="relative flex h-fit flex-shrink-0 flex-nowrap overflow-hidden text-xs text-neutral-500">
      <p>{start.toLocaleDateString("en-US", options)}</p>
      <p className="px-1">·</p>
      <p>{time12hr}</p>
    </div>
  );
}
