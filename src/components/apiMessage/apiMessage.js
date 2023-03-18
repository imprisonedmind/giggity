export default function ApiMessage({error, success, loading, msg}) {
  let wording = "Loading"
  let colours = "bg-neutral-600 text-neutral-300"

  if (error) {
    wording = msg
    colours = "bg-red-500/20 text-red-500"
  }
  if (success) {
    wording = "Success"
    colours = "bg-green-500/20 text-green-500"
  }

  if (error || loading || success) {
    return <div
        className={`${colours} flex items-center justify-center p-2 rounded-lg mb-4`}>
      <p>{wording}</p>
    </div>
  } else return null


}