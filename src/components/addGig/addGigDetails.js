import React from "react";
import FormInput from "@/components/form/input";
import { useAddGigContext } from "@/context/addGig";
import { TrashIcon } from "@heroicons/react/24/solid";

export default function AddGigDetails() {
  const {
    formik,
    artistsData,
    setArtistsData,
    setShowInputs,
    setShowGetArtists,
  } = useAddGigContext();
  console.log(artistsData);

  // Method to handle artist change
  const handleArtistChange = (event, artistId) => {
    const updatedArtists = artistsData.map((artist) => {
      if (artist.id === artistId) {
        return { ...artist, name: event.target.value };
      }
      return artist;
    });
    setArtistsData(updatedArtists);
  };

  // Method to delete an artist
  const deleteArtist = (artistId) => {
    const updatedArtists = artistsData.filter(
      (artist) => artist.id !== artistId
    );
    setArtistsData(updatedArtists);
  };

  // Method to handle adding an artist
  const handleAddArtist = () => {
    const newArtist = { id: Date.now(), name: "" };
    const updatedArtists = [...artistsData, newArtist];
    setArtistsData(updatedArtists);
  };

  return (
    <div className={"mt-4 flex w-full flex-col gap-4"}>
      <div className={"flex flex-col gap-2"}>
        <p>Title</p>
        <FormInput
          id={"title"}
          name={"title"}
          placeholder={"Enter event title"}
          onChange={formik.handleChange}
          defaultValue={formik.values.title}
        />
      </div>

      <div className={"flex flex-col gap-2"}>
        <p>Artists</p>
        <div className={"flex flex-wrap gap-x-2 gap-y-4 "}>
          {artistsData?.length > 0 &&
            artistsData.map((artist) => (
              <div
                key={artist.id}
                className={"group relative flex max-w-[33%] grow items-center"}
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
                    "absolute right-1 hidden aspect-square h-3/4 bg-red-500/20" +
                    " cursor-pointer rounded-md p-[5px] text-red-500 group-hover:flex"
                  }
                >
                  <TrashIcon />
                </div>
              </div>
            ))}
          <div
            className={
              "border-1 flex items-center rounded-md border bg-neutral-700 px-2" +
              " cursor-pointer border-neutral-600 text-neutral-400"
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
            id={"address"}
            name={"address"}
            placeholder={"Enter a venue"}
            onChange={formik.handleChange}
            defaultValue={formik.values.address}
          />
          <FormInput
            id={"city"}
            name={"city"}
            placeholder={"Enter a city"}
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            defaultValue={formik.values.date}
          />
          <FormInput
            id={"time"}
            name={"time"}
            type={"time"}
            placeholder={"Enter a time"}
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            defaultValue={formik.values.onlinePrice}
          />
          <FormInput
            id={"doorPrice"}
            name={"doorPrice"}
            placeholder={"Enter door price"}
            type={"number"}
            onChange={formik.handleChange}
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
            onChange={formik.handleChange}
            defaultValue={formik.values.ticket}
          />
        </div>
      </div>

      <div
        onClick={() => {
          setShowInputs(false);
          setShowGetArtists(true);
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
}
