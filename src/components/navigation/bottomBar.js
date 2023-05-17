"use client";
import { Cog6ToothIcon, HeartIcon, HomeIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

export default function BottomBar() {
  const pathname = usePathname();

  let home = "text-neutral-500";
  let heart = "text-neutral-500";
  let settings = "text-neutral-500";

  switch (pathname) {
    case "/":
      home = "text-emerald-500";
      break;

    case "/favourites":
      heart = "text-pink-500";
      break;

    case "/settings":
      heart = "text-pink-500";
      break;
  }

  return (
    <div
      className={
        "flex h-[8%] w-[100svw] items-center justify-between border-t bg-neutral-800" +
        " border-neutral-600 px-12 md:hidden"
      }
    >
      <HomeIcon className={`${home} h-8 w-8 `} />
      <HeartIcon className={`${heart} h-8 w-8`} />
      <Cog6ToothIcon className={`${settings} h-8 w-8`} />
    </div>
  );
}
