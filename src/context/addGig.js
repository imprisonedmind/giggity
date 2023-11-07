"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import { supabaseAdmin } from "../../lib/supabaseClient";
import { parseDateString, parseTimeString } from "../../lib/utilities";
import { useSupabase } from "@/context/auth";

export const AddGigContext = createContext({});
export const useAddGigContext = () => useContext(AddGigContext);

export function AddGigContextProvider({ children }) {
  // Get the current user to add their details to the gig
  const session = useSupabase();
  const user = session?.user;

  const router = useRouter();

  // State variable to store abstract artist data
  const [artistsData, setArtistsData] = useState([]);

  // State Variables for form
  const [imgUrl, setImgUrl] = useState(null);
  const [showInputs, setShowInputs] = useState(false);
  const [showGetArtists, setShowGetArtists] = useState(false);

  // State Variables for api state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  // Formik Values
  const formik = useFormik({
    initialValues: {
      title: null,
      description: null,
      date: null,
      time: null,
      image: null,
      artists: [],
      ticket: null,
      city: null,
      address: null,
      onlinePrice: null,
      doorPrice: null,
      user_id: user?.id,
      username: user?.user_metadata?.username,
    },
    onSubmit: async (values) => {
      try {
        const { data, error } = await supabaseAdmin
          .from("event")
          .insert(values);
        if (error) {
          throw error;
        }
        router.refresh();
      } catch (error) {
        console.error(error);
      }
    },
  });

  // Text Extract Function
  const getGigData = async (img) => {
    setLoading(true);
    const response = await fetch("/api/textExtract", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imgUrl: img }),
    }).then((res) =>
      res.json().catch((error) => {
        throw new Error(error);
      })
    );

    const {
      title,
      artists,
      venue,
      location,
      date,
      time,
      price,
      doorPrice,
      organiser,
      description,
    } = await response;

    setArtistsData(artists);

    await formik.setValues({
      title: title,
      date: parseDateString(date),
      time: parseTimeString(time),
      image: imgUrl,
      artists: [],
      address: venue,
      city: location,
      onlinePrice: price,
      doorPrice: doorPrice,
      description: description,
      user_id: user?.id,
      username: user?.user_metadata?.username,
    });
    setLoading(false);
    setShowInputs(true);
  };

  useEffect(() => {
    if (imgUrl) {
      getGigData(imgUrl);
    }
  }, [imgUrl]);

  const scanContextValue = {
    showInputs,
    setShowInputs,
    artistsData,
    setArtistsData,
    showGetArtists,
    setShowGetArtists,
    imgUrl,
    setImgUrl,
    success,
    setSuccess,
    error,
    setError,
    errMsg,
    setErrMsg,
    loading,
    setLoading,
    formik,
    getGigData,
  };

  return (
    <AddGigContext.Provider value={scanContextValue}>
      {children}
    </AddGigContext.Provider>
  );
}
