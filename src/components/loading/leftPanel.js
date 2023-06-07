export default function LeftPanelLoading() {
  return (
    <div
      className={
        "h-full w-3/5 animate-pulse overflow-hidden rounded-xl border bg-neutral-700" +
        " hidden border-neutral-700 md:flex"
      }
    ></div>
  );
}
