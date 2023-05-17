"use client";
import Link from "next/link";
import { ArrowLeftIcon, MusicalNoteIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";
import Logo from "@/components/navigation/logo";
import { UseQuickViewContext } from "@/context/quickView";
import AddGig from "@/components/addGig/addGig";
import GreenButton from "@/components/buttons/greenButton";

export default function Navbar() {
  const pathname = usePathname();
  const { setContent, setIsOpen, isOpen } = UseQuickViewContext();

  const handleGig = () => {
    setIsOpen(!isOpen);
    setContent(<AddGig />);
  };

  return (
    <header
      className={
        "z-50 mb-2 hidden w-full flex-nowrap gap-4 p-2 md:mb-4 md:flex md:p-0"
      }
    >
      {pathname !== "/" && (
        <Link
          href={"/"}
          className={
            "flex w-fit flex-nowrap items-center rounded-xl bg-neutral-800 py-1 pl-2" +
            " border-1 text-normal cursor-pointer gap-2 border pr-4 text-neutral-500" +
            " border-neutral-700"
          }
        >
          <ArrowLeftIcon className={"h-4 w-4"} /> Back
        </Link>
      )}
      <div
        className={
          "sticky top-4 z-10 flex h-fit grow items-center justify-between p-2" +
          " border-1 rounded-xl border border-neutral-700 bg-neutral-800 shadow-lg"
        }
      >
        <Logo />
        {pathname === "/" && (
          <GreenButton
            title={"Add a Gig"}
            icon={<MusicalNoteIcon className={"h-4 w-4"} />}
            callBack={() => handleGig()}
          />
        )}
      </div>
    </header>
  );
}
