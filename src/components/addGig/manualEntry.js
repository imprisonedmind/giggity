import React, { useState } from "react";
import Image from "next/image";
import UploadImageToStorage from "@/components/addGig/uploadImageToStorage";
import ChooseLocalImage from "@/components/addGig/chooseLocalImage";
import { useAddGigContext } from "@/context/addGig";

export default function ManualEntry() {
  const { loading, imgUrl, setImgUrl } = useAddGigContext();

  const [displayImage, setDisplayImage] = useState(null);
  const [displayFile, setDisplayFile] = useState(null);

  if (loading) return null;

  if (!imgUrl) {
    return (
      <div>
        {displayImage && (
          <div
            className="relative mt-4 aspect-square w-[300px] overflow-hidden
          rounded-lg border border-white/5 shadow-md"
          >
            <Image
              src={displayImage}
              alt="selected image"
              fill={true}
              sizes={"100%"}
              className={"object-cover"}
            />
          </div>
        )}

        <div className={"flex flex-col gap-2"}>
          <ChooseLocalImage
            setDisplayImage={(v) => setDisplayImage(v)}
            setDisplayFile={(v) => setDisplayFile(v)}
            displayImage={displayImage}
          />
          <UploadImageToStorage displayFile={displayFile} />
        </div>
      </div>
    );
  } else return null;
}
