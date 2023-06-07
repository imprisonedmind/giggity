"use client";
import GreenButton from "@/components/buttons/greenButton";
import { MusicalNoteIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useSupabase } from "@/context/auth";
import AddGig from "@/components/addGig/addGig";
import { UseQuickViewContext } from "@/context/quickView";

export default function LoginOrAddGig() {
  const session = useSupabase();
  console.log("***********");
  console.log(session);
  console.log("***********");

  const { setContent, setIsOpen, isOpen } = UseQuickViewContext();

  const handleGig = () => {
    setIsOpen(!isOpen);
    setContent(<AddGig />);
  };

  if (session === null) {
    return (
      <div className={"h-11 w-32 animate-pulse rounded-md bg-neutral-700"} />
    );
  }

  return (
    <>
      {session ? (
        <GreenButton
          title={"Add a Gig"}
          icon={<MusicalNoteIcon className={"h-4 w-4"} />}
          callBack={() => handleGig()}
        />
      ) : (
        <GreenButton
          title={"Login"}
          icon={<UserGroupIcon className={"h-4 w-4"} />}
          callBack={() => router.push("onboard/login")}
        />
      )}
    </>
  );
}
