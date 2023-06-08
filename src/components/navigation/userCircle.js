"use client";
import { useSupabase } from "@/context/auth";
import { useState } from "react";
import PopUpMenu from "@/components/navigation/popUpMenu/popUpMenu";

export default function UserCircle() {
  const session = useSupabase();

  const initials = session?.user.email.charAt(0).toUpperCase();

  const [menu, showMenu] = useState(false);

  // if (session === null) {
  //   return (
  //     <div
  //       className={
  //         "flex h-11 w-11 items-center justify-center rounded-lg border" +
  //         " animate-pulse cursor-pointer border-neutral-700 bg-neutral-700"
  //       }
  //     ></div>
  //   );
  // }

  if (session)
    return (
      <div className={"relative"}>
        <PopUpMenu menu={menu} showMenu={showMenu} />
        <div
          onClick={() => showMenu(!menu)}
          className={
            "flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border" +
            " border-neutral-700 bg-neutral-900 text-neutral-600" +
            " hover:border-neutral-500 hover:text-neutral-500 hover:shadow-lg"
          }
        >
          <p>{initials}</p>
        </div>
      </div>
    );
}
