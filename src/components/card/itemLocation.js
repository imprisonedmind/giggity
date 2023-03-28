export default function ItemLocation({ city, location }) {
  return (
    <div
      className={
        "relative flex flex-wrap text-xs  text-neutral-500" +
        " flex-shrink-0 overflow-hidden"
      }
    >
      <p>{city}</p>
      <p className={"px-1"}>·</p>
      <p>{location}</p>
    </div>
  );
}
