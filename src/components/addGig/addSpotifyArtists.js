import React, {useState} from 'react';
import FormInput from "@/components/form/input";

async function GetSpotifyArtists(img) {
  const response = await fetch('/api/textExtract', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({imgUrl: img})
  });
  return await response.json();
}

export default function AddSpotifyArtists({imgUrl}) {
  const [data, setData] = useState(null);

  const fetchData = async () => {
    const result = await GetSpotifyArtists(imgUrl);
    setData(result);
  };

  if (data) {
    console.log(data)
    return <div className={"flex flex-col gap-4 mt-4"}>

      <div className={"flex flex-col gap-2"}>
        <p>Title</p>
        <FormInput value={data.title}/>
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Artists</p>
        <div className={"flex flex-nowrap gap-2"}>
          {Object.values(data.artists).map((artist) => (
              <FormInput value={artist}/>
          ))}
        </div>
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Venue</p>
        <div className={"flex gap-2"}>
          <FormInput value={data.venue}/>
          <FormInput value={data.location}/>
        </div>
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Date</p>
        <div className={"flex gap-2"}>
          <FormInput value={data.date}/>
          <FormInput value={data.time}/>
        </div>
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Price</p>
        <div className={"flex gap-2"}>
          <FormInput value={data.price}/>
        </div>
      </div>


    </div>
  } else {
    fetchData()
    return <div>Loading...</div>
  }
}
