import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { supabaseAdmin } from "../../../lib/supabaseClient";
import GreenButton from "@/components/buttons/greenButton";

async function uploadImageToSupabaseStorage(displayFile) {
  try {
    const fileName = displayFile.name;
    const { data, error } = await supabaseAdmin.storage
      .from("gig-images")
      .upload(fileName, displayFile);

    if (error) {
      throw error;
    }

    // Get the public URL of the uploaded file
    const publicUrl = supabaseAdmin.storage
      .from("gig-images")
      .getPublicUrl(fileName);

    // if (!publicUrl) {
    //   throw new Error("Failed to generate public URL for uploaded file");
    // }
    //
    // const tableUpload = await UploadToEvents(publicUrl);
    // console.log(tableUpload);

    return publicUrl.data.publicUrl;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to upload image to Supabase Storage");
  }
}

async function UploadToEvents(publicUrl) {
  try {
    const url = publicUrl.data.publicUrl;

    const { data, error } = await supabaseAdmin
      .from("Event")
      .insert({ image: url });

    return "Successful Table Creation";
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function UploadImageToStorage({
  displayFile,
  setPublicImg,
  setLoading,
}) {
  const handleUpload = async () => {
    setLoading(true);
    const publicImg = await uploadImageToSupabaseStorage(displayFile);
    setPublicImg(publicImg);
    setLoading(false);
  };

  if (displayFile) {
    return (
      <GreenButton
        title={"Next"}
        icon={<ArrowRightIcon className={"h-4 w-4"} />}
        callBack={() => handleUpload()}
      />
    );
  } else return null;
}