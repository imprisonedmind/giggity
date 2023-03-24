import {FormikProvider, useFormik} from "formik";
import FormInput from "@/components/form/input";

export default function LinkForm({
                                   showInstaInput,
                                   showSubmission,
                                   setLoading,
                                   setImgUrl,
                                   setDescription,
                                   setShowInstaInput,
                                   setShowSubmission,
                                   setError,
                                   setMsg
                                 }) {
  const url = process.env.INSTA_SCRAPE_API

  const formik = useFormik({
    initialValues: {
      link: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const response = await fetch(`/api/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({link: values.link})
      });

      if (response.ok) {
        const data = await response.json()
        setImgUrl(data.imageUrl)
        setDescription(data.description)
        setShowInstaInput(false)
        setShowSubmission(true)
        setError(false)
      } else {
        const errorResponse = await response.json();
        const errorMessage = errorResponse.error || "error"; // Set error message to "error" if not provided in the response
        setMsg(errorMessage);
        setError(true);
      }

      setLoading(false);
    },
  });

  if (showInstaInput && !showSubmission) {
    return <>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <FormInput id={"link"} name={"link"} placeholder={"Enter Instagram link"}
                     onChange={formik.handleChange}/>
        </form>
      </FormikProvider>
      <div onClick={formik.handleSubmit}
           className={"flex bg-neutral-700 p-2 rounded-lg border border-1" +
               " border-neutral-600 text-neutral-400 justify-center cursor-pointer mt-4"}>
        <p>Submit</p>
      </div>
    </>
  } else return null

}