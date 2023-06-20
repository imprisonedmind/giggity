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
        " flex flex-col gap-4 text-neutral-500"
      }
    >
      <p>Coming Soon!</p>
      <p className={"text-sm"}>
        This area will be available soon, in the meantime please create an
        account.
      </p>
      <GreenButton
        icon={<ArrowRightIcon className={"h-w w-4"} />}
        title={"Sign Up"}
        callBack={() => router.push("onboard/signup")}
      />
    </div>
  );
}
