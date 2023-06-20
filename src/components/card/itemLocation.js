export default function ItemLocation({ city, location }) {
  return (
    <div
      className={
        "relative flex flex-shrink-0 flex-wrap overflow-hidden text-sm md:text-xs" +
        " text-neutral-500"
      }
    >
      <p>{city}</p>
      <p className={"px-1"}>·</p>
      <p>{location}</p>
    </div>
  );
}
