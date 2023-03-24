import Loading from "@/components/loading/loading";

export default function ApiMessage({ error, success, loading, msg }) {
  let wording = "Loading";
  let colours = "bg-neutral-600 text-neutral-300";

  if (error) {
    wording = msg;
    colours = "bg-red-500/20 text-red-500";
  }
  if (success) {
    wording = "Success";
    colours = "bg-green-500/20 text-green-500";
  }

  if (error || success || loading) {
    if (loading) {
      return <Loading title={wording} />;
    } else {
      return (
        <div
          className={`${colours} mb-4 flex items-center justify-center rounded-lg p-2`}
        >
          <p>{wording}</p>
        </div>
      );
    }
  } else return null;
}
