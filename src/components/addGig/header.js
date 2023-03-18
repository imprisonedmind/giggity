export default function Header({showSubmission}) {

  if (!showSubmission) {
    return <div className={"mb-4"}>
      <h1 className={"text-xl"}>Add a new gig!</h1>
      <p className={" text-sm"}>
        You can either enter an instagram link or auto complete or manually enter in the
        details.
      </p>
    </div>
  } else return null

}