export default function ItemPriceDoor({doorPrice}) {
  if (doorPrice) {
    return <div className={"flex w-fit h-fit flex-nowrap bg-orange-500/10 rounded-sm py-1" +
        " px-2 text-xs text-orange-500 mt-2"}>
      <p>R</p>
      <p>{doorPrice}</p>
      <p className={"px-1"}>·</p>
      <p>DOOR</p>
    </div>
  } else return null
}