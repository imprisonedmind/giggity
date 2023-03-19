import ImageDescriptionHeader from "@/components/addGig/imageDescriptionHeader";
import {useState} from "react";
import AddGigDetails from "@/components/addGig/addGigDetails";
import GetArtists from "@/components/addGig/getArtists";
import {FormikProvider, useFormik} from "formik";

export default function AddingInfo({imgUrl, description}) {
  const [showInputs, setShowInputs] = useState(true)
  const [artists, setArtists] = useState([])

  const formik = useFormik({
    initialValues: {
      title: "",
      description: description,
      date: "",
      time: "",
      image: imgUrl,
      artists: artists,
      ticket: "",
      city: "",
      location: "",
      onlinePrice: "",
      doorPrice: "",
    },
    onSubmit: async (values) => {
      // setLoading(true);
      const response = await fetch('api/gig', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formik.values)
      });

      if (response.ok) {
        const data = await response.json()
        // setImgUrl(data.imageUrl)
        // setDescription(data.description)
        // setShowInstaInput(false)
        // setShowSubmission(true)
        // setError(false)
      } else {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.error || "error";
        // setMsg(errorMessage);
        // setError(true);
      }

      // setLoading(false);
    },
  });

  console.log(formik.values)

  if (imgUrl || description) {
    return <div className={"flex flex-col gap-2 items-center"}>
      <FormikProvider value={formik}>
        {showInputs && (
            <>
              <ImageDescriptionHeader
                  imgUrl={imgUrl}
                  description={description}
                  formik={formik}
              />
              <AddGigDetails
                  imgUrl={imgUrl}
                  setShowInputs={setShowInputs}
                  artists={artists}
                  setArtists={setArtists}
                  formik={formik}
              />
            </>
        )}
        {!showInputs && (<GetArtists artists={artists}/>)}
      </FormikProvider>
    </div>
  } else return null
}