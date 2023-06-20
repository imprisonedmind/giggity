"use client";
import GreenButton from "@/components/buttons/greenButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function ComingSoon() {
  const router = useRouter();
  return (
    <div
      className={
        "rounded-lg border border-neutral-700 bg-neutral-800 p-2" +
        " flex flex-col gap-2 text-neutral-500"
      }
    >
      <p>Coming Soon!</p>
      <p className={"text-sm"}>
        This area will be available soon, in the process of shipping user
        accounts. This will allow you to Sign Up & Log In as well as favourite
        gigs and edit your profile.
      </p>
      {/*<GreenButton*/}
      {/*  icon={<ArrowRightIcon className={"h-w w-4"} />}*/}
      {/*  title={"Sign Up"}*/}
      {/*  callBack={() => router.push("onboard/signup")}*/}
      {/*/>*/}
    </div>
  );
}
