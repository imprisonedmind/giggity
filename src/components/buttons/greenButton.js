import React from "react";

export default function GreenButton({ title, icon, callBack, dark }) {
  return (
    <div className={"border-1 rounded-lg border border-green-600 p-[1px]"}>
      <div
        onClick={callBack}
        className={
          `${
            dark ? "text-neutral-900" : "text-white "
          } border-1 flex cursor-pointer items-center justify-between gap-4 rounded-md` +
          " border border-white/20 bg-green-600 px-4 py-[7px] shadow-sm" +
          " text-sm hover:bg-green-500 hover:shadow-lg md:text-lg"
        }
      >
        <p>{title}</p>
        {icon}
      </div>
    </div>
  );
}
