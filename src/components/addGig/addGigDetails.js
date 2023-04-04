import React, { useEffect } from "react";
import FormInput from "@/components/form/input";
import { TrashIcon } from "@heroicons/react/24/solid";
import Loading from "@/components/loading/loading";

async function GetTextExtraction(img) {
  const response = await fetch("/api/textExtract", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ imgUrl: img }),
  });
  return await response.json();
}

export default function AddGigDetails({
  imgUrl,
  setShowInputs,
  artistsArray,
  setArtistsArray,
  formik,
  handleFormInputChange,
  gigData,
  setGigData,
}) {
  const fetchData = async () => {
    const result = await GetTextExtraction(imgUrl);
    if (result !== gigData) setGigData(result);

    if (result && result.artists && artistsArray.length < 1) {
      setArtistsArray(result.artists);
    }
  };

  useEffect(() => {
    if (formik.values.title === null) {
      fetchData();
    }
  }, [gigData]);

  const handleAddArtist = () => {
    setArtistsArray([...artistsArray, ""]);
  };

  const handleArtistChange = (event, id) => {
    const updatedArtists = artistsArray.map((artist) => {
      if (artist.id === id) {
        return { ...artist, name: event.target.value };
      } else {
        return artist;
      }
    });
    setArtistsArray(updatedArtists);
  };

  const deleteArtist = (id) => {
    const updatedArtists = artistsArray.filter((artist) => artist.id !== id);
    setArtistsArray(updatedArtists);
  };

  if (formik.values.title) {
    return (
      <div className={"mt-4 flex w-full flex-col gap-4"}>
        <div className={"flex flex-col gap-2"}>
          <p>Title</p>
          <FormInput
            id={"title"}
            name={"title"}
            placeholder={"Enter event title"}
            onChange={handleFormInputChange}
            defaultValue={formik.values.title}
          />
        </div>

        <div className={"flex flex-col gap-2"}>
          <p>Artists</p>
          <div className={"flex flex-wrap gap-x-2 gap-y-4 "}>
            {artistsArray.length > 0 &&
              artistsArray.map((artist) => (
                <div
                  key={artist.id}
                  className={
                    "group relative grow items-center" + " flex max-w-[33%]"
                  }
                >
                  <FormInput
                    width={"w-full"}
                    placeholder={"Enter an artist name"}
                    defaultValue={artist.name}
                    onChange={(event) => handleArtistChange(event, artist.id)}
                  />
                  <div
                    onClick={() => deleteArtist(artist.id)}
                    className={
                      "bg-red-500/20" +
                      " absolute right-1 hidden aspect-square h-3/4 p-[5px] text-red-500" +
                      " cursor-pointer rounded-md group-hover:flex"
                    }
                  >
                    <TrashIcon />
                  </div>
                </div>
              ))}
            <div
              className={
                "flex items-center rounded-md border bg-neutral-700 px-2" +
                " border-1 cursor-pointer border-neutral-600 text-neutral-400"
              }
              onClick={handleAddArtist}
            >
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
              onChange={handleFormInputChange}
              defaultValue={formik.values.address}
            />
            <FormInput
              id={"city"}
              name={"city"}
              placeholder={"Enter a city"}
              onChange={handleFormInputChange}
              defaultValue={formik.values.city}
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
              type={"date"}
              onChange={handleFormInputChange}
              defaultValue={formik.values.date}
            />
            <FormInput
              id={"time"}
              name={"time"}
              type={"time"}
              placeholder={"Enter a time"}
              onChange={handleFormInputChange}
              defaultValue={formik.values.time}
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
              type={"number"}
              onChange={handleFormInputChange}
              defaultValue={formik.values.onlinePrice}
            />
            <FormInput
              id={"doorPrice"}
              name={"doorPrice"}
              placeholder={"Enter door price"}
              type={"number"}
              onChange={handleFormInputChange}
              defaultValue={formik.values.doorPrice}
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
              onChange={handleFormInputChange}
              defaultValue={formik.values.ticket}
            />
          </div>
        </div>

        <div
          onClick={() => {
            setShowInputs(false);
          }}
          className={
            "flex w-full justify-center rounded-md border bg-neutral-700 p-2" +
            " border-1 cursor-pointer border-neutral-600 text-neutral-400"
          }
        >
          <p>Next</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className={"mt-4"}>
        <Loading title={"Fetching Data..."} />
      </div>
    );
  }
}
