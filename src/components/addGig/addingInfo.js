import ImageDescriptionHeader from "@/components/addGig/imageDescriptionHeader";
import { useEffect, useState } from "react";
import AddGigDetails from "@/components/addGig/addGigDetails";
import GetArtists from "@/components/addGig/getArtists";
import { FormikProvider } from "formik";
import { parseDateString, parseTimeString } from "../../../lib/utilities";

export default function AddingInfo({ imgUrl, description, formik }) {
  const [showInputs, setShowInputs] = useState(true);
  const [artistsArray, setArtistsArray] = useState([]);
  const [gigData, setGigData] = useState(null);
  const [spotifyArtists, setSpotifyArtists] = useState([]);

  const handleFormInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formik.setFieldValue(`${fieldName}`, fieldValue);
    console.log(formik.values);
  };

  useEffect(() => {
    const setFormValues = async () => {
      if (gigData && gigData.title !== null) {
        const parsedDate = parseDateString(gigData.date);
        const parsedTime = parseTimeString(gigData.time);

        formik.setValues({
          title: gigData.title,
          description: description,
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
    console.log("GIG DATA:");
    console.log(gigData);
    console.log("FORMIK VALUES:");
    console.log(formik.values);
  }, [gigData]);

  useEffect(() => {
    formik.setValues((values) => ({
      ...values,
      artists: spotifyArtists,
    }));
  }, [spotifyArtists]);

  if (imgUrl || description) {
    return (
      <div className={"flex flex-col items-center gap-2"}>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}>
            {showInputs && (
              <>
                <ImageDescriptionHeader
                  imgUrl={imgUrl}
                  description={description}
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
