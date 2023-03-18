export default function LinkOrManualBtn({showInstaInput, setShowInstaInput, showSubmission}) {

  if (!showInstaInput && !showSubmission) {
    return <>
      <div onClick={() => setShowInstaInput(!showInstaInput)}
           className={"flex bg-neutral-900 p-2 rounded-lg border border-1" +
               " border-neutral-700 justify-center cursor-pointer"}>
        <p>Instagram Link</p>
      </div>
      <div className={"w-full flex justify-center items-center gap-4 my-2"}>
        <div className={'grow border border-1 border-neutral-700'}/>
        <p>OR</p>
        <div className={'grow border border-1 border-neutral-700 '}/>
      </div>
      <div className={"flex bg-neutral-900 p-2 rounded-lg border border-1" +
          " border-neutral-700 justify-center cursor-pointer"}>
        <p>Manually Enter</p>
      </div>
    </>
  } else return null

}