import ImageDescriptionHeader from "@/components/addGig/imageDescriptionHeader";
import React, { useEffect, useState } from "react";
import AddGigDetails from "@/components/addGig/addGigDetails";
import GetArtists from "@/components/addGig/getArtists";
import { FormikProvider } from "formik";
import { parseDateString, parseTimeString } from "../../../lib/utilities";
import Loading from "@/components/loading/loading";

export default function AddingInfo({ imgUrl, formik }) {
  const [showInputs, setShowInputs] = useState(true);
  const [artistsArray, setArtistsArray] = useState([]);
  const [gigData, setGigData] = useState(null);
  const [spotifyArtists, setSpotifyArtists] = useState([]);

  const handleFormInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formik.setFieldValue(`${fieldName}`, fieldValue);
  };

  useEffect(() => {
    const setFormValues = async () => {
      if (gigData && gigData.title !== null) {
        const parsedDate = parseDateString(gigData.date);
        const parsedTime = parseTimeString(gigData.time);

        formik.setValues({
          title: gigData.title,
          image: imgUrl,
          city: gigData.location,
          address: gigData.venue,
          onlinePrice: parseFloat(gigData.price),
          doorPrice: parseFloat(gigData.doorPrice),
          date: parsedDate,
          time: parsedTime,
        });
      }
    };
    setFormValues();
  }, [gigData]);

  useEffect(() => {
    formik.setValues((values) => ({
      ...values,
      artists: spotifyArtists,
    }));
  }, [spotifyArtists]);

  if (imgUrl || formik.description) {
    return (
      <div className={"flex flex-col items-center gap-2"}>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            {showInputs && (
              <>
                {!gigData && <Loading title={"Fetching Data..."} />}
                <ImageDescriptionHeader
                  imgUrl={imgUrl}
                  formik={formik}
                  handleFormInputChange={(e) => handleFormInputChange(e)}
                />
                <AddGigDetails
                  imgUrl={imgUrl}
                  setShowInputs={setShowInputs}
                  artistsArray={artistsArray}
                  setArtistsArray={setArtistsArray}
                  formik={formik}
                  handleFormInputChange={(e) => handleFormInputChange(e)}
                  gigData={gigData}
                  setGigData={setGigData}
                />
              </>
            )}
            {!showInputs && (
              <GetArtists
                artists={artistsArray}
                setSpotifyArtists={setSpotifyArtists}
                spotifyArtists={spotifyArtists}
                formik={formik}
                setShowInputs={setShowInputs}
              />
            )}
          </form>
        </FormikProvider>
      </div>
    );
  } else return null;
}
