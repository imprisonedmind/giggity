import {useState} from "react";
import ApiMessage from "@/components/apiMessage/apiMessage";
import Header from "@/components/addGig/header";
import AddingInfo from "@/components/addGig/addingInfo";
import LinkForm from "@/components/addGig/linkForm";
import LinkOrManualBtn from "@/components/addGig/linkOrManualBtn";
import {useFormik} from "formik";
import {supabaseAdmin} from "../../../lib/supabaseClient";

export default function AddGig() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const [errMsg, setMsg] = useState("")

  const [imgUrl, setImgUrl] = useState()
  const [description, setDescription] = useState()

  const [showInstaInput, setShowInstaInput] = useState(false)
  const [showSubmission, setShowSubmission] = useState(false)

  const formik = useFormik({
    initialValues: {
      title: null,
      description: null,
      date: null,
      time: null,
      image: null,
      artists: null,
      ticket: null,
      city: null,
      location: null,
      onlinePrice: null,
      doorPrice: null,
    },
    onSubmit: async (values) => {
      console.log("SUBMITTING")
      try {
        const {data, error} = await supabaseAdmin.from('Event').insert(values)

        if (error) {
          throw error
        }

        console.log(data)
        // Do something with the response data

      } catch (error) {
        console.error(error)
        // Handle the error
      }
    },
  })

  return <div className={"relative bg-neutral-800 border border-1 border-neutral-700" +
      " rounded-lg p-4 text-neutral-500 max-w-[600px] max-h-[90vh] h-full" +
      " overflow-y-auto"}>
    <ApiMessage msg={errMsg} error={error} success={success} loading={loading}/>
    <Header showSubmission={showSubmission}/>
    <LinkForm
        showInstaInput={showInstaInput}
        setShowInstaInput={setShowInstaInput}
        showSubmission={showSubmission}
        setShowSubmission={setShowSubmission}
        setDescription={setDescription}
        setImgUrl={setImgUrl}
        setError={setError}
        setMsg={setMsg}
        setLoading={setLoading}
    />
    <AddingInfo imgUrl={imgUrl} description={description} formik={formik}/>
    <LinkOrManualBtn
        showInstaInput={showInstaInput}
        setShowInstaInput={setShowInstaInput}
        showSubmission={showSubmission}
    />
  </div>
}




