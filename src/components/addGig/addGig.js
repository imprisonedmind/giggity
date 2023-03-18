import {useFormik} from "formik";
import {useState} from "react";
import ApiMessage from "@/components/apiMessage/apiMessage";
import Header from "@/components/addGig/header";
import AddingInfo from "@/components/addGig/addingInfo";
import LinkForm from "@/components/addGig/linkForm";
import LinkOrManualBtn from "@/components/addGig/linkOrManualBtn";

export default function AddGig() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errMsg, setMsg] = useState("")

  const [imgUrl, setImgUrl] = useState()
  const [description, setDescription] = useState()

  const formik = useFormik({
    initialValues: {
      link: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const response = await fetch('api/gig', {
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


  const [showInstaInput, setShowInstaInput] = useState(false)
  const [showSubmission, setShowSubmission] = useState(false)

  return <div className={"bg-neutral-800 border border-1 border-neutral-700 rounded-lg" +
      " p-4 text-neutral-500 max-w-[600px] max-h-[90vh] h-full overflow-y-auto"}>
    <ApiMessage msg={errMsg} error={error} success={success} loading={loading}/>
    <Header showSubmission={showSubmission}/>
    <LinkForm
        formik={formik}
        showInstaInput={showInstaInput}
        showSubmission={showSubmission}
    />
    <AddingInfo imgUrl={imgUrl} description={description}/>
    <LinkOrManualBtn
        showInstaInput={showInstaInput}
        setShowInstaInput={setShowInstaInput}
        showSubmission={showSubmission}
    />
  </div>
}