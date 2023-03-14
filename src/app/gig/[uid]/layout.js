import {ArrowLeftIcon} from "@heroicons/react/24/solid";
import Link from "next/link";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function SingleGigLayout({children}) {

  return (
      <div>
        <>
          <Link href={"/"} className={"flex flex-nowrap items-center px-2 py-1 mb-4" +
              " bg-neutral-800 w-fit text-neutral-500 rounded-md gap-2 border border-1" +
              " border-neutral-700 cursor-pointer text-normal"}>
            <ArrowLeftIcon className={"h-4 w-4"}/> Back
          </Link>
          {children}
        </>
      </div>
  )
}
