import {useEffect, useState} from 'react';
import Image from "next/image";
import {CheckBadgeIcon} from "@heroicons/react/24/solid";

async function getArtists({artists}) {
  const artistData = [];

  for (let artist of artists) {
    const response = await fetch('/api/getSpotifyArtistId', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({q: artist})
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    artistData.push(data);
  }

  return artistData;
}

export default function GetArtists({artists, spotifyArtists, setSpotifyArtists}) {
  const [artistData, setArtistData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getArtists({artists});
      setArtistData(data);
    }

    fetchData();
  }, [artists]);

  console.log(artistData)


  const handleSelection = (id) => {
    if (spotifyArtists.includes(id)) {
      setSpotifyArtists(spotifyArtists.filter(item => item !== id));
    } else {
      setSpotifyArtists([...spotifyArtists, id]);
    }
  }


  return (
      <div >
        <div className={"mb-4"}>
          <h1 className={"text-lg font-medium"}>Select Artists</h1>
          <p>Select the Spotify Account of the Artist playing.</p>
        </div>
        <div className={"flex flex-wrap gap-4"}>
          {artistData.map((response) =>
              response.artists.items.map((item) => (
                  <div key={item.id} onClick={() => handleSelection(item.id)}
                       className={`${spotifyArtists.includes(item.id) ? "bg-neutral-700" +
                           " text-neutral-400" : ""} 
                       relative flex items-center gap-2 grow w-[30%] hover:bg-neutral-700 
                       p-2 rounded-lg cursor-pointer hover:text-neutral-400"`}>
                    <div className={"relative h-12 w-12 overflow-hidden rounded-md" +
                        " flex-shrink-0 "}>
                      <Image src={item.images[0]?.url} alt={"test"} fill={true}/>
                    </div>
                    <div className={"flex flex-col"}>
                      <p className={"text-sm"}>{item.name}</p>
                      <p className={"text-xs"}>{item.followers.total}</p>
                    </div>
                    <div
                        className={`${spotifyArtists.includes(item.id) ? "flex" : "hidden"} absolute h-6 w-6 right-1 top-1 text-blue-500`}>
                      <CheckBadgeIcon/>
                    </div>
                  </div>
              ))
          )}
        </div>
        <div className={`${spotifyArtists.length > 0 ? "flex" : "hidden"} sticky bg-green-500 w-full 
        p-4 rounded-lg bottom-1 mt-8 justify-center text-white shadow-lg cursor-pointer`}>
          <p className={"text-xl"}>Confirm</p>
        </div>
      </div>

  );
}
