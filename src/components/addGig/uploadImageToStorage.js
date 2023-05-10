import { ArrowRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { supabaseAdmin } from "../../../lib/supabaseClient";
import GreenButton from "@/components/buttons/greenButton";
import { useAddGigContext } from "@/context/addGig";

async function uploadImageToSupabaseStorage(displayFile) {
  try {
    const fileName = displayFile.name;
    const { data, error, status } = await supabaseAdmin.storage
      .from("gig-images")
      .upload(fileName, displayFile);

    // Check if file already exists
    if (status === 409) {
      const publicUrl = supabaseAdmin.storage
        .from("gig-images")
        .getPublicUrl(fileName);

      return publicUrl.data.publicUrl;
    }

    // Get the public URL of the uploaded file
    const publicUrl = supabaseAdmin.storage
      .from("gig-images")
      .getPublicUrl(fileName);

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
      .from("event")
      .insert({ image: url });

    return "Successful Table Creation";
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export default function UploadImageToStorage({ displayFile }) {
  const { setLoading, setImgUrl } = useAddGigContext();

  const handleUpload = async () => {
    setLoading(true);
    const publicImg = await uploadImageToSupabaseStorage(displayFile);
    setImgUrl(publicImg);
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
