import Image from "next/image";
import spotify from "public/spotify.png"
import Link from "next/link";
import TopTracks from "@/components/artists/topTracks";

export async function getArtistData(artistId) {
  const endpoint = 'https://accounts.spotify.com/api/token';
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  let artistData;
  let accessToken;

  try {
    // Get access token using client credentials flow
    const tokenResponse = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: clientId,
        client_secret: clientSecret
      })
    });
    const tokenData = await tokenResponse.json();
    accessToken = tokenData.access_token;

    // Use access token to make request to artists endpoint
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
        <div className={"flex flex-col grow row-span-2 bg-neutral-800 border border-1" +
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
