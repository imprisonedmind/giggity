import React, {useState} from 'react';
import FormInput from "@/components/form/input";
import {TrashIcon} from "@heroicons/react/24/solid";

async function GetTextExtraction(img) {
  const response = await fetch('/api/textExtract', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({imgUrl: img})
  });
  return await response.json();
}

export default function AddGigDetails({
                                        imgUrl,
                                        setShowInputs,
                                        artists,
                                        setArtists,
                                        formik
                                      }) {
  const [data, setData] = useState(null);


  const fetchData = async () => {
    const result = await GetTextExtraction(imgUrl);
    setData(result);

    if (result && result.artists) {
      setArtists(result.artists);
    }
  };

  const handleAddArtist = () => {
    setArtists([...artists, '']);
  };

  const handleArtistChange = (event, index) => {
    const updatedArtists = [...artists];
    updatedArtists[index] = event.target.value;
    setArtists(updatedArtists);
  };

  const deleteArtist = (index) => {
    const updatedArtists = artists.filter((artist, i) => i !== index);
    setArtists(updatedArtists);
  };

  if (data !== null) {
    return <div className={"flex flex-col gap-4 mt-4 w-full"}>

      <div className={"flex flex-col gap-2"}>
        <p>Title</p>
        <FormInput
            id={"title"}
            name={"title"}
            placeholder={"Enter event title"}
            onChange={formik.handleChange}
            defaultValue={data.title}
        />
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Artists</p>
        <div className={"flex flex-wrap gap-x-2 gap-y-4 "}>
          {artists && artists.map((artist, index) => (
              <div key={index} className={"group relative grow items-center" +
                  " flex max-w-[33%]"}>
                <FormInput
                    width={"w-full"}
                    placeholder={"Enter an artist name"}
                    defaultValue={artist}
                    onChange={(event) => handleArtistChange(event, index)}
                />
                <div onClick={() => deleteArtist(index)} className={"bg-red-500/20" +
                    " text-red-500 h-3/4 aspect-square p-[5px] hidden absolute right-1" +
                    " rounded-md cursor-pointer group-hover:flex"}>
                  <TrashIcon/>
                </div>
              </div>
          ))}
          <div className={"bg-neutral-700 flex items-center px-2 rounded-md border" +
              " border-1 border-neutral-600 text-neutral-400 cursor-pointer"}
               onClick={handleAddArtist}>
            Add Artist
          </div>
        </div>
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Venue</p>
        <div className={"flex gap-2"}>
          <FormInput
              id={"location"}
              name={"location"}
              placeholder={"Enter a venue"}
              onChange={formik.handleChange}
              defaultValue={data.venue}
          />
          <FormInput
              id={"city"}
              name={"city"}
              placeholder={"Enter a city"}
              onChange={formik.handleChange}
              defaultValue={data.location}
          />
        </div>
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Date</p>
        <div className={"flex gap-2"}>
          <FormInput
              id={"date"}
              name={"date"}
              placeholder={"Enter a date"}
              onChange={formik.handleChange}
              defaultValue={data.date}
          />
          <FormInput
              id={"time"}
              name={"time"}
              placeholder={"Enter a time"}
              onChange={formik.handleChange}
              defaultValue={data.time}
          />
        </div>
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Price</p>
        <div className={"flex gap-2"}>
          <FormInput
              id={"onlinePrice"}
              name={"onlinePrice"}
              placeholder={"Enter online price"}
              onChange={formik.handleChange}
              defaultValue={data.price}
          />
          <FormInput
              id={"doorPrice"}
              name={"doorPrice"}
              placeholder={"Enter door price"}
              onChange={formik.handleChange}
          />
        </div>
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Ticket Link</p>
        <div className={"flex gap-2"}>
          <FormInput
              id={"ticket"}
              name={"ticket"}
              placeholder={"Enter the ticket link"}
              onChange={formik.handleChange}
          />
        </div>
      </div>

      <div onClick={() => setShowInputs(false)}
           className={"flex justify-center p-2 w-full bg-neutral-700 rounded-md border" +
               " border-1 border-neutral-600 text-neutral-400 cursor-pointer"}>
        <p>Next</p>
      </div>

    </div>
  } else {
    fetchData()
    return <div>Loading...</div>
  }
}
