import { ArrowPathIcon } from "@heroicons/react/24/solid";
import React from "react";
import Image from "next/image";

export default function Loading({ title, img, alt }) {
  return (
    <div
      className={
        "flex w-full flex-col items-center justify-center rounded-lg bg-green-500/10" +
        " p-2 text-green-500"
      }
    >
      <div
        className={
          "relative aspect-square h-60 w-auto overflow-hidden rounded-xl border" +
          " border-green-500 bg-green-500/30 shadow-md"
        }
      >
        <Image
          src={img}
          alt={alt}
          fill={true}
          className={"h-full w-full object-cover"}
        />
      </div>
      <div className={"flex flex-nowrap items-center gap-4 p-2 pt-4"}>
        <p>{title}</p>
        <ArrowPathIcon className={"h-4 w-4 animate-spin"} />
      </div>
    </div>
  );
}
