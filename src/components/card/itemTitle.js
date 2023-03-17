export default function ItemTitle({title}) {
  return <div className={"flex flex-nowrap text-neutral-400 items-center" +
      " justify-between w-full"}>
    <h1 className={"text-md truncate "}>{title}</h1>
  </div>
}