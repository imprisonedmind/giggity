import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { supabaseAdmin } from "../../../lib/supabaseClient";

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
      <div
        onClick={() => handleUpload()}
        className="border-1 flex cursor-pointer items-center justify-between
            gap-4 rounded border border-white/20 bg-green-600 py-2 px-4
            text-white shadow-sm hover:bg-green-500 hover:shadow-lg"
      >
        <p>Next</p>
        <ArrowRightIcon className={"h-4 w-4"} />
      </div>
    );
  } else return null;
}
