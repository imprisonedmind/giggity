"use client";
import { useSupabase } from "@/context/auth";
import { useState } from "react";
import PopUpMenu from "@/components/navigation/popUpMenu/popUpMenu";
import Image from "next/image";

export default function UserCircle() {
  const session = useSupabase();

  const initials = session?.user.email.charAt(0).toUpperCase();

  const [menu, showMenu] = useState(false);

  const url = "https://source.unsplash.com/random/?punkrock";

  if (session)
    return (
      <div className={"relative"}>
        <PopUpMenu menu={menu} showMenu={showMenu} />
        <div
          onClick={() => showMenu(!menu)}
          className={
            "relative flex h-11 w-11 cursor-pointer items-center justify-center" +
            " overflow-hidden rounded-xl border border-neutral-700 bg-neutral-900" +
            " text-neutral-600 hover:border-neutral-500 hover:text-neutral-500" +
            " hover:shadow-lg"
          }
        >
          {session ? (
            <Image
              src={url}
              alt={"User profile Image"}
              fill={true}
              sizes={"100%"}
              className={"object-cover"}
            />
          ) : (
            <p>{initials}</p>
          )}
        </div>
      </div>
    );
}
