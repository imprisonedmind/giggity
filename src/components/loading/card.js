export default function LoadingCard({ key }) {
  return (
    <div
      key={key}
      className={
        "flex h-[500px] w-full grow rounded-lg bg-neutral-800 md:w-1/4 lg:w-1/5"
      }
    >
      <div
        className={
          "flex h-full w-full animate-pulse flex-col justify-between gap-4 p-4"
        }
      >
        <div className={"h-3/6 w-full grow rounded-md bg-neutral-700"}></div>
        <div className={"h-1/6 w-full grow rounded-md bg-neutral-700"}></div>
        <div className={"h-2/6 w-full grow rounded-md bg-neutral-700"}></div>
      </div>
    </div>
  );
}
