export default function ItemTitle({ title }) {
  return (
    <div
      className={
        "flex flex-nowrap items-center text-neutral-400" +
        " w-full justify-between"
      }
    >
      <h1 className={"text-md truncate "}>{title}</h1>
    </div>
  );
}
