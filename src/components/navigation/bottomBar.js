"use client";
import { Cog6ToothIcon, HeartIcon, HomeIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";

export default function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  let back = "text-neutral-500";
  let home = "text-neutral-500";
  let heart = "text-neutral-500";
  let settings = "text-neutral-500";

  switch (true) {
    case pathname === "/":
      home = "text-green-500";
      break;

    case pathname === "/favourites":
      heart = "text-pink-500";
      break;

    case pathname === "/settings":
      settings = "text-green-500";
      break;
  }

  return (
    <div
      className={
        "flex h-[8%] w-[100svw] items-center justify-between border-t bg-neutral-800" +
        " border-neutral-600 px-12 md:hidden"
      }
    >
      <div onClick={() => router.push("/")} className={`${home} h-8 w-8 `}>
        <HomeIcon />
      </div>
      <div
        onClick={() => router.push("/favourites")}
        className={`${heart} h-8 w-8 `}
      >
        <HeartIcon />
      </div>
      <div
        onClick={() => router.push("/settings")}
        className={`${settings} h-8 w-8 `}
      >
        <Cog6ToothIcon />
      </div>
    </div>
  );
}
