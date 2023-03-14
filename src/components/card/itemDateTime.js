export default function ItemDateTime({item}) {
  const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

  const timeString = item.time;
  const [hours, minutes] = timeString.split(':');

  const start = new Date();
  start.setHours(hours);
  start.setMinutes(minutes);

  const time12hr = start.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });

  return <div className={"flex text-xs flex-nowrap text-neutral-500 h-fit relative" +
      " overflow-hidden"}>
    <p>
      {new Date(item.date).toLocaleDateString('en-US', options)}
    </p>
    <p className={"px-1"}>·</p>
    <p>{time12hr}</p>
  </div>
}