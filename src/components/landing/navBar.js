"use client";
import Logo from "@/components/navigation/logo";
import DarkButton from "@/components/buttons/darkButton";
import { useSupabase } from "@/context/auth";
import { useRouter } from "next/navigation";

export default function LandingNavBar() {
  const session = useSupabase();
  const user = session?.user;

  const router = useRouter();

  if (user) router.push("/app");

  return (
    <div
      className={"flex h-fit w-full items-center justify-between pt-4 md:pt-8"}
    >
      <Logo />
      <div className="flex items-start justify-start gap-2 p-[0px]">
        <DarkButton title={"Log in"} link={"/onboard/login"} />
        <DarkButton title={"Sign up"} link={"/onboard/signup"} />
      </div>
    </div>
  );
}
