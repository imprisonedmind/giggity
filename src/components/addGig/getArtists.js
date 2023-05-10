import { useEffect, useState } from "react";
import { ArrowLeftIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";
import Confirm from "@/components/buttons/confirm";
import { useAddGigContext } from "@/context/addGig";
import { UseQuickViewContext } from "@/context/quickView";
import Image from "next/image";

async function getArtists(artists) {
  const artistData = [];

  for (let artist of artists) {
    const response = await fetch("/api/getSpotifyArtistId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ q: artist.name }),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data = await response.json();
    artistData.push(data);
  }

  console.log(">>>>>>>>>>");
  console.log(artistData);
  console.log(">>>>>>>>>>");
  return artistData;
}

export default function GetArtists() {
  const {
    artistsData,
    setArtistsData,
    formik,
    setShowInputs,
    setShowGetArtists,
  } = useAddGigContext();

  const { setIsOpen } = UseQuickViewContext();

  const [spotifyArtists, setSpotifyArtists] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getArtists(artistsData);
      setSpotifyArtists(data);
    }

    fetchData();
  }, [artistsData]);

  useEffect(() => {}, [spotifyArtists]);

  const handleSelection = (id) => {
    let selectedArtists = [...formik.values.artists];

    if (selectedArtists.includes(id)) {
      selectedArtists = selectedArtists.filter((artistId) => artistId !== id);
    } else {
      selectedArtists = [id];
    }
    formik.setFieldValue("artists", selectedArtists);
    console.log(selectedArtists);
  };

  if (spotifyArtists)
    return (
      <div>
        <div className={"mb-4 flex items-center gap-4"}>
          <div
            onClick={() => {
              setShowInputs(true);
              setShowGetArtists(false);
            }}
            className={
              "flex items-center" +
              " border-1 gap-2 rounded-md border border-neutral-600 bg-neutral-700 p-2" +
              " cursor-pointer text-neutral-400"
            }
          >
            <ArrowLeftIcon className={"h-4 w-4"} />
            <p>Back</p>
          </div>
          <div className={"flex flex-col"}>
            <h1 className={"text-lg font-medium"}>Select Artists</h1>
            <p>Select the Spotify Account of the Artist playing.</p>
          </div>
        </div>
        <div className={"flex flex-wrap gap-4"}>
          {spotifyArtists &&
            spotifyArtists.map((response) =>
              response.artists.items.map((item) => (
                <div
                  key={item.id}
                  onClick={() => handleSelection(item.id)}
                  className={`${
                    formik.values.artists.includes(item.id)
                      ? "bg-neutral-700" + " text-neutral-400"
                      : ""
                  }
                     hover:text-neutral-400" relative flex w-[30%] grow cursor-pointer
                     items-center gap-2 rounded-lg p-2 hover:bg-neutral-700`}
                >
                  <div
                    className={
                      "relative h-12 w-12 overflow-hidden rounded-md" +
                      " flex-shrink-0 "
                    }
                  >
                    <Image
                      src={item.images[0]?.url}
                      alt={item.images[0]?.url}
                      fill={true}
                      sizes={"100%"}
                    />
                  </div>
                  <div className={"flex flex-col"}>
                    <p className={"text-sm"}>{item.name}</p>
                    <p className={"text-xs"}>{item.followers.total}</p>
                  </div>
                  <div
                    className={`${
                      formik.values.artists.includes(item.id)
                        ? "flex"
                        : "hidden"
                    } absolute right-1 top-1 h-6 w-6 text-blue-500`}
                  >
                    <CheckBadgeIcon />
                  </div>
                </div>
              ))
            )}
        </div>
        <Confirm
          callback={() => {
            formik.handleSubmit();
            setIsOpen(false);
          }}
          spotifyArtists={formik.values.artists}
        />
      </div>
    );
}
