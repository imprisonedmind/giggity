export default function CircleLoadingSpinner() {
  return (
    <div className={"m-auto flex h-[90svh] w-full justify-center"}>
      <div
        className={
          "relative m-auto h-20 w-20 animate-spin overflow-hidden rounded-full" +
          "  bg-neutral-900"
        }
      >
        <div className={"h-full w-1/2 bg-green-500"} />
        <div
          className={
            "absolute left-1/2 top-1/2 z-10 flex h-4/5 w-4/5 -translate-x-1/2" +
            "  -translate-y-1/2 transform items-center justify-center rounded-full" +
            "  bg-neutral-900"
          }
        ></div>
      </div>
    </div>
  );
}
