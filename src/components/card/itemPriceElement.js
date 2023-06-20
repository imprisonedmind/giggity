export default function ItemPriceElement({ online, price }) {
  const colours = online
    ? "text-blue-500 bg-blue-500/10"
    : "text-green-500 bg-green-500/10";

  const tag = online ? "ONLINE" : "DOOR";

  return (
    <div
      className={`${colours} flex h-fit w-fit flex-nowrap rounded-md px-2 py-1 text-xs`}
    >
      <p>R</p>
      <p>{price}</p>
      <p className={"px-1"}>·</p>
      <p>{tag}</p>
    </div>
  );
}
