import Image from "next/image";

export default async function ProfileSpotify({ user }) {
  const spotify = await fetch(`${process.env.API_URL}/api/getProfile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user_id: user.spotify,
    }),
  }).then((res) =>
    res.json().catch((error) => {
      throw new Error(error);
    })
  );

  return (
    <div
      className={
        "h-fit w-fit rounded-md border border-green-500/30 bg-green-500/10 p-2" +
        " flex flex-nowrap gap-4"
      }
    >
      <div
        className={"relative h-20 w-20 overflow-hidden rounded-full shadow-md"}
      >
        <Image
          src={spotify.data.images[0].url}
          alt={"Spotify user iamge"}
          fill={true}
          className={"object-cover"}
        />
      </div>
      <div className={"flex flex-col"}>
        <div>
          <p className={"text-xs font-thin"}>User</p>
          <p className={"capitalize"}>{spotify.data.display_name}</p>
        </div>
        <div>
          <p className={"text-xs font-thin"}>Followers</p>
          <p className={""}>{spotify.data.followers.total}</p>
        </div>
      </div>
    </div>
  );
}
