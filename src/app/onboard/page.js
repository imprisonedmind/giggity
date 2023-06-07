"use client";

import { ArrowRightIcon } from "@heroicons/react/24/solid";
import GreenButton from "@/components/buttons/greenButton";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    <div className={"flex flex-col gap-4"}>
      <GreenButton
        title={"Sign Up"}
        icon={<ArrowRightIcon className={"h-6 w-6"} />}
        callBack={() => router.push("onboard/signup")}
      />
      <GreenButton
        title={"Log In"}
        icon={<ArrowRightIcon className={"h-6 w-6"} />}
        callBack={() => router.push("onboard/onboard")}
      />
    </div>
  );
}
