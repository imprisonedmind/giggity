import Image from "next/image";
import spotify from "public/spotify.png"
import Link from "next/link";
import TopTracks from "@/components/artists/topTracks";

export async function getArtistData(artistId) {
  let artistData;
  let accessToken;

  try {
    const tokenResponse = await fetch('http://localhost:3000/api/spotifyToken');
    const tokenData = await tokenResponse.json();
    accessToken = tokenData.access_token;

    const artistResponse = await fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    if (!artistResponse.ok) {
      return null;
    }
    artistData = await artistResponse.json();

  } catch (error) {
    console.error(error);
    return null;
  }
  if (artistData) {
    return {artistData, accessToken}
  } else return null
}


export default async function Artist({id}) {
  const data = await getArtistData(id)
  const artistData = data.artistData
  const token = data.accessToken

  if (artistData) {
    const followers = artistData.followers.total
    const imgUrl = artistData.images[0].url
    return (
        <div className={"flex flex-col grow h-fit bg-neutral-800 border border-1" +
            " border-neutral-700 rounded-lg p-4 text-neutral-500 gap-4"}>
          <div className={"flex flex-nowrap gap-4 items-center"}>
            <div
                className={"relative cursor-pointer h-28 w-28 rounded-lg" +
                    " overflow-hidden flex-shrink-0"}>
              <Link href={`https://open.spotify.com/artist/${id}`}>
                <Image src={imgUrl} alt={"test"} fill={true}/>
              </Link>
              <Image src={spotify} alt={"test"} className={"absolute w-6 h-6 bottom-2" +
                  " left-2"}/>
            </div>
            <div className={"flex-col"}>
              <p className={"text-xl"}>{artistData.name}</p>
              <p className={"text-sm uppercase tracking-wider"}>{followers} Followers</p>
            </div>
          </div>
          <div className={"w-full border border-1 border-neutral-700"}/>
          <TopTracks artistId={id} token={token}/>
        </div>
    )
  } else return null
}
