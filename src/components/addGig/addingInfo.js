import ImageDescriptionHeader from "@/components/addGig/imageDescriptionHeader";
import {useEffect, useState} from "react";
import AddGigDetails from "@/components/addGig/addGigDetails";
import GetArtists from "@/components/addGig/getArtists";
import {FormikProvider} from "formik";

export default function AddingInfo({imgUrl, description}) {
  const [showInputs, setShowInputs] = useState(true)
  const [artistsArray, setArtistsArray] = useState([])
  const [gigData, setGigData] = useState(null);
  const [spotifyArtists, setSpotifyArtists] = useState([])

  const handleFormInputChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formik.setFieldValue(`${fieldName}`, fieldValue);
  };

  useEffect(() => {
    if (gigData && gigData.title !== undefined) {
      formik.setValues({
        date: gigData.date,
        title: gigData.title,
        time: gigData.time,
        city: gigData.venue,
        location: gigData.location,
        onlinePrice: gigData.price,
        artists: spotifyArtists // include spotifyArtists here
      });
    }
  }, [gigData, spotifyArtists]); // check both gigData and spotifyArtists for updates


  if (imgUrl || description) {
    return <div className={"flex flex-col gap-2 items-center"}>
      <FormikProvider value={formik}>
        {showInputs && (
            <>
              <ImageDescriptionHeader
                  imgUrl={imgUrl}
                  description={description}
                  formik={formik}
                  handleFormInputChange={handleFormInputChange}
              />
              <AddGigDetails
                  imgUrl={imgUrl}
                  setShowInputs={setShowInputs}
                  artistsArray={artistsArray}
                  setArtistsArray={setArtistsArray}
                  formik={formik}
                  handleFormInputChange={handleFormInputChange}
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
            />
        )}
      </FormikProvider>
    </div>
  } else return null
}