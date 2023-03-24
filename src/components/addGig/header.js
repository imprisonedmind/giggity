export default function Header({ imgUrl, loading }) {
  if (!imgUrl && !loading) {
    return (
      <div className={"max-w-[300px]"}>
        <h1 className={"text-xl"}>Add a new gig!</h1>
        <div className={"text-xs"}>
          To get started, please upload a poster. The poster will be used to
          extract information about the gig.
        </div>
      </div>
    );
  } else return null;
}
