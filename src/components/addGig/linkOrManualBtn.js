export default function LinkOrManualBtn({
  showInstaInput,
  setShowInstaInput,
  showSubmission,
}) {
  if (!showInstaInput && !showSubmission) {
    return (
      <>
        <div
          onClick={() => setShowInstaInput(!showInstaInput)}
          className={
            "border-1 flex rounded-lg border bg-neutral-700 p-2" +
            " cursor-pointer justify-center border-neutral-600 text-neutral-400"
          }
        >
          <p>Instagram Link</p>
        </div>
        <div className={"my-2 flex w-full items-center justify-center gap-4"}>
          <div className={"border-1 grow border border-neutral-700"} />
          <p>OR</p>
          <div className={"border-1 grow border border-neutral-700 "} />
        </div>
        <div
          className={
            "border-1 flex rounded-lg border bg-neutral-700 p-2" +
            " cursor-pointer justify-center border-neutral-600 text-neutral-400"
          }
        >
          <p>Manually Enter</p>
        </div>
      </>
    );
  } else return null;
}
