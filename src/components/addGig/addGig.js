import { useState } from "react";
import ApiMessage from "@/components/apiMessage/apiMessage";
import Header from "@/components/addGig/header";
import AddingInfo from "@/components/addGig/addingInfo";
import { useFormik } from "formik";
import { supabaseAdmin } from "../../../lib/supabaseClient";
import { useRouter } from "next/navigation";
import { UseQuickViewContext } from "@/context/quickView";
import ManualEntry from "@/components/addGig/manualEntry";

export default function AddGig() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setMsg] = useState("");

  const [imgUrl, setImgUrl] = useState(null);
  const [description, setDescription] = useState(null);

  const [showSubmission, setShowSubmission] = useState(false);

  const { setIsOpen, isOpen } = UseQuickViewContext();

  const router = useRouter();

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
      try {
        const { data, error } = await supabaseAdmin
          .from("Event")
          .insert(values);
        if (error) {
          throw error;
        }
        router.refresh();
        setIsOpen(!isOpen);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div
      className={
        "border-1 relative border border-neutral-700 bg-neutral-800" +
        " h-full max-h-[90vh] max-w-[600px] rounded-lg p-4 text-neutral-500" +
        " overflow-y-auto"
      }
    >
      <ApiMessage
        msg={errMsg}
        error={error}
        success={success}
        loading={loading}
      />
      <Header imgUrl={imgUrl} loading={loading} />
      <AddingInfo imgUrl={imgUrl} description={description} formik={formik} />
      <ManualEntry
        setLoading={(v) => setLoading(v)}
        imgUrl={imgUrl}
        setImgUrl={(v) => setImgUrl(v)}
      />
    </div>
  );
}
