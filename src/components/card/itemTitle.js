export default function ItemTitle({ title }) {
  return (
    <div
      className={
        "flex flex-nowrap items-center text-neutral-400" +
        " w-full justify-between"
      }
    >
      <h2 className={"text-md truncate "}>{title}</h2>
    </div>
  );
}
