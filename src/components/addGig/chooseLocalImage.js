import { PhotoIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function ChooseLocalImage({
  displayImage,
  setDisplayImage,
  setDisplayFile,
}) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setDisplayFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setDisplayImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <label htmlFor="imageInput" className="mt-4 block">
      <input
        id="imageInput"
        type="file"
        className="hidden"
        onChange={handleImageChange}
      />
      <div
        className={`${
          displayImage
            ? "bg-neutral-700 hover:bg-neutral-600"
            : "bg-green-500 hover:bg-green-600"
        } 
            flex cursor-pointer items-center justify-between gap-4 rounded-md py-2 px-4 
            text-white`}
      >
        <p>{displayImage ? "Change Image" : "Choose Image"}</p>
        <PhotoIcon className={"h-4 w-4"} />
      </div>
    </label>
  );
}
