import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function OnBoardError({ err }) {
  return (
    <div
      className={
        "mb-6 flex w-full flex-nowrap gap-4 rounded-xl border border-red-500 p-4" +
        " bg-red-500/10 text-red-500"
      }
    >
      <ExclamationTriangleIcon className={"h-6 w-6"} />
      <p>{err.message}</p>
    </div>
  );
}
