import React, { useState } from "react";
import Image from "next/image";
import UploadImageToStorage from "@/components/addGig/uploadImageToStorage";
import ChooseLocalImage from "@/components/addGig/chooseLocalImage";

export default function ManualEntry({ setImgUrl, imgUrl, setLoading }) {
  const [displayImage, setDisplayImage] = useState(null);
  const [displayFile, setDisplayFile] = useState(null);

  if (!imgUrl) {
    return (
      <div>
        {displayImage && (
          <div
            className="relative mt-4 aspect-square w-[300px] overflow-hidden
          rounded-lg border border-white/5 shadow-md"
          >
            <Image src={displayImage} alt="selected image" fill={true} />
          </div>
        )}

        <div className={"flex flex-col gap-2"}>
          <ChooseLocalImage
            setDisplayImage={(v) => setDisplayImage(v)}
            setDisplayFile={(v) => setDisplayFile(v)}
            displayImage={displayImage}
          />
          <UploadImageToStorage
            displayFile={displayFile}
            setPublicImg={(v) => setImgUrl(v)}
            setLoading={setLoading}
          />
        </div>
      </div>
    );
  } else return null;
}
