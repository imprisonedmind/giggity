export default function ItemPriceOnline({onlinePrice}) {
  if (onlinePrice) {
    return <div className={"flex w-fit h-fit flex-nowrap bg-blue-500/10 rounded-sm py-1" +
        " px-2 text-xs text-blue-500 mt-2"}>
      <p>R</p>
      <p>{onlinePrice}</p>
      <p className={"px-1"}>·</p>
      <p>ONLINE</p>
    </div>
  } else return null
}