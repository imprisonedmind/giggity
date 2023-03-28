import Image from "next/image";
import Link from "next/link";
import { PlayIcon } from "@heroicons/react/24/solid";

export async function getTopTracks(artistId, accessToken) {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=SA`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    if (!response.ok) {
      return null;
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default async function TopTracks({ artistId, token }) {
  const data = await getTopTracks(artistId, token);
  const tracks = data.tracks;

  return (
    <div>
      {Object.values(tracks).map((x) => (
        <Link
          key={x.id}
          href={x.external_urls.spotify}
          target={"_blank"}
          className={
            "flex flex-nowrap items-center justify-between gap-4 py-2" +
            " group cursor-pointer rounded-md p-2 hover:bg-neutral-700 "
          }
        >
          <div className={"flex flex-nowrap items-center gap-4"}>
            <div className={"relative h-8 w-8 overflow-hidden rounded-md"}>
              <Image
                src={x.album.images[0].url}
                alt={x.album.images[0].url}
                fill={true}
              />
            </div>
            <p className={"text-md group-hover:text-neutral-400"}>{x.name}</p>
          </div>
          <PlayIcon className={"h-4 w-4 opacity-0 group-hover:opacity-100"} />
        </Link>
      ))}
    </div>
  );
}
