"use client";
import { Cog6ToothIcon, HeartIcon, HomeIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function BottomBar() {
  const router = useRouter();
  const pathname = usePathname();

  let back = "text-neutral-500";
  let home = "text-neutral-500";
  let heart = "text-neutral-500";
  let settings = "text-neutral-500";

  switch (true) {
    case pathname === "/app":
      home = "text-green-500";
      break;

    case pathname === "/app/favourites":
      heart = "text-pink-500";
      break;

    case pathname === "/app/settings":
      settings = "text-green-500";
      break;
  }

  return (
    <div
      className={
        "absolute bottom-0 flex h-[8%] w-[100svw] items-center justify-between" +
        " z-20 border-t border-neutral-600 bg-neutral-800 px-12 md:hidden"
      }
    >
      <Link href={"/app"} prefetch={true} className={`${home} h-8 w-8 `}>
        <HomeIcon />
      </Link>
      <Link
        href={"/app/favourites"}
        prefetch={true}
        className={`${heart} h-8 w-8 `}
      >
        <HeartIcon />
      </Link>
      <Link
        href={"/app/settings"}
        prefetch={true}
        className={`${settings} h-8 w-8 `}
      >
        <Cog6ToothIcon />
      </Link>
    </div>
  );
}
