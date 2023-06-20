import { PhotoIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function ChooseImage({ displayImage }) {
  return (
    <div
      className={`${
        displayImage
          ? "bg-neutral-700 hover:bg-neutral-600"
          : "bg-green-500 hover:bg-green-600"
      } 
            flex cursor-pointer items-center justify-between gap-4 rounded-md px-4 py-2 
            text-white`}
    >
      <p>{displayImage ? "Change Image" : "Choose Image"}</p>
      <PhotoIcon className={"h-4 w-4"} />
    </div>
  );
}
