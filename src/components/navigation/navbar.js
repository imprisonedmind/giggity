"use client"
import Link from "next/link";
import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import {usePathname} from "next/navigation";
import Logo from "@/components/navigation/logo";
import {UseQuickViewContext} from "@/context/quickView";
import AddGig from "@/components/addGig/addGig";


export default function Navbar() {
  const pathname = usePathname()
  const {setContent, setIsOpen, isOpen} = UseQuickViewContext()

  const handleGig = () => {
    setIsOpen(!isOpen)
    setContent(<AddGig/>)
  }

  return <div className={"flex flex-nowrap gap-4 w-full sticky mb-4"}>
    {pathname !== "/" && <Link href={"/"} className={"flex flex-nowrap" +
        " items-center pl-2 pr-4 py-1" +
        " bg-neutral-800 w-fit text-neutral-500 rounded-md gap-2 border border-1" +
        " border-neutral-700 cursor-pointer text-normal"}>
      <ArrowLeftIcon className={"h-4 w-4"}/> Back
    </Link>}
    <div className={"flex justify-between items-center sticky top-4 z-10 h-fit grow p-2" +
        " bg-neutral-800 rounded-xl border border-1 border-neutral-700 shadow-lg"}>
      <Logo/>
      <div onClick={() => handleGig()} className={"bg-orange-500/20" +
          " text-neutral-100 p-2 rounded-lg cursor-pointer"}>
        <p className={"text-orange-500 font-medium"}>Add a Gig!</p>
      </div>
    </div>
  </div>
}