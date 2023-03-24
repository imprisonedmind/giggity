import { ArrowPathIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Loading({ title }) {
  return (
    <div
      className={
        "flex w-full flex-nowrap items-center justify-center gap-4 rounded-lg" +
        " bg-green-500/10 p-2 text-green-500"
      }
    >
      <ArrowPathIcon className={"h-6 w-6 animate-spin"} />
      <p>{title}</p>
    </div>
  );
}
