"use client"
import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import {usePathname} from "next/navigation";
import {Creepster} from "next/font/google";


const patrick = Creepster({
  weight: '400',
  subsets: ['latin'],
})


export default function Navbar() {
  const pathname = usePathname()

  return <div className={"flex flex-nowrap gap-4 w-full sticky mb-4"}>
    {pathname !== "/" && <Link href={"/"} className={"flex flex-nowrap" +
        " items-center pl-2 pr-4 py-1" +
        " bg-neutral-800 w-fit text-neutral-500 rounded-md gap-2 border border-1" +
        " border-neutral-700 cursor-pointer text-normal"}>
      <ArrowLeftIcon className={"h-4 w-4"}/> Back
    </Link>}
    <div className={"sticky top-4 z-10 h-fit grow p-2 bg-neutral-800" +
        " rounded-xl border border-1 border-neutral-700 shadow-lg"}>
      <div className={patrick.className}>
        <div className={"bg-red-500/10 w-fit h-fit py-1 px-2 rounded-md"}>
          <h1 className={"font-bold text-2xl text-red-500 tracking-wider"}>Giggity</h1>
        </div>
      </div>
    </div>
  </div>
}