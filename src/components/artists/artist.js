import Image from "next/image";
import spotify from "public/spotify.png";
import Link from "next/link";
import TopTracks from "@/components/artists/topTracks";

export async function getArtistData(artistId) {
  const response = await fetch(`${process.env.API_URL}/api/getArtists`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ artistId }),
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data: ${response.status}`);
  }

  return await response.json();
}

export default async function Artist({ id }) {
  const data = await getArtistData(id);
  const artistData = data.artistData;
  const token = data.accessToken;

  const followers = artistData.followers.total;
  const imgUrl = artistData.images[0].url;

  return (
    <div
      className={
        "border-1 flex h-fit w-max grow flex-col gap-4 rounded-lg border" +
        " border-neutral-700 bg-neutral-800 p-2 text-neutral-500 md:p-4"
      }
    >
      <div className={"flex flex-nowrap items-center gap-4"}>
        <div
          className={
            "relative h-28 w-28 flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
          }
        >
          <Link
            href={`https://open.spotify.com/artist/${id}`}
            target={"_blank"}
          >
            <Image
              src={imgUrl}
              alt={imgUrl}
              fill={true}
              loading={"lazy"}
              quality={70}
            />
          </Link>
          <Image
            src={spotify}
            alt={"Spotify.com Logo"}
            className={"absolute bottom-2 left-2 h-6 w-6"}
          />
        </div>
        <div className={"flex-col"}>
          <p className={"text-xl"}>{artistData.name}</p>
          <p className={"text-sm uppercase tracking-wider"}>
            {followers} Followers
          </p>
        </div>
      </div>
      <div className={"border-1 w-full border border-neutral-700"} />
      <TopTracks artistId={id} token={token} />
    </div>
  );
}
