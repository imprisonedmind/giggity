export default function ItemLocation({item}) {
  return <div className={"flex text-xs flex-nowrap text-neutral-500 h-fit relative" +
      " overflow-hidden"}>
    <p>
      {item.city}
    </p>
    <p className={"px-1"}>·</p>
    <p>{item.location}</p>
  </div>

}