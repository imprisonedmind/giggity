import React from "react";

export default function GreenButton({ title, icon, callBack }) {
  return (
    <div className={"border-1 rounded-lg border border-green-600 p-[1px]"}>
      <div
        onClick={callBack}
        className={
          "border-1 flex cursor-pointer items-center justify-between gap-4 rounded-md" +
          " border border-white/20 bg-green-600 py-2 px-4 text-white shadow-sm" +
          " hover:bg-green-500 hover:shadow-lg"
        }
      >
        <p>{title}</p>
        {icon}
      </div>
    </div>
  );
}
