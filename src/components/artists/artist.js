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

  if (artistData) {
    const followers = artistData.followers.total;
    const imgUrl = artistData.images[0].url;
    return (
      <div
        className={
          "border-1 flex h-fit grow flex-col border bg-neutral-800" +
          " gap-4 rounded-lg border-neutral-700 p-4 text-neutral-500"
        }
      >
        <div className={"flex flex-nowrap items-center gap-4"}>
          <div
            className={
              "relative h-28 w-28 cursor-pointer rounded-lg" +
              " flex-shrink-0 overflow-hidden"
            }
          >
            <Link
              href={`https://open.spotify.com/artist/${id}`}
              target={"_blank"}
            >
              <Image src={imgUrl} alt={imgUrl} fill={true} />
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
  } else return null;
}
