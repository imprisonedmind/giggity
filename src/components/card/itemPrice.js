export default function Price({price, online}) {
  const colours = online ? "text-blue-500 bg-blue-500/10" : "text-orange-500" +
      " bg-orange-500/10"

  if (price) {
    return <div className={`${colours} 
            flex w-fit h-fit flex-nowrap rounded-md py-1 px-2 text-xs my-2`}>
      <p>R</p>
      <p>{price}</p>
      <p className={"px-1"}>·</p>
      <p>{online ? "ONLINE" : "DOOR"}</p>
    </div>
  } else return null
}