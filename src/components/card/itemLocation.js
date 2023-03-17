export default function ItemLocation({city, location}) {
  return <div className={"flex text-xs flex-nowrap text-neutral-500  relative" +
      " overflow-hidden flex-shrink-0"}>
    <p>
      {city}
    </p>
    <p className={"px-1"}>·</p>
    <p>{location}</p>
  </div>

}