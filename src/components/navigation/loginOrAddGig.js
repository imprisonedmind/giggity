"use client";
import GreenButton from "@/components/buttons/greenButton";
import { MusicalNoteIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { useSupabase } from "@/context/auth";
import AddGig from "@/components/addGig/addGig";
import { UseQuickViewContext } from "@/context/quickView";
import { useRouter } from "next/navigation";

export default function LoginOrAddGig() {
  const router = useRouter();
  const session = useSupabase();

  const { setContent, setIsOpen, isOpen } = UseQuickViewContext();

  const handleGig = () => {
    setIsOpen(!isOpen);
    setContent(<AddGig />);
  };

  return (
    <>
      {session?.user ? (
        <GreenButton
          title={"Add a Gig"}
          icon={<MusicalNoteIcon className={"h-4 w-4"} />}
          callBack={() => handleGig()}
        />
      ) : (
        <GreenButton
          title={"Log In"}
          icon={<UserGroupIcon className={"h-4 w-4"} />}
          callBack={() => router.push("/onboard/login")}
        />
      )}
    </>
  );
}
