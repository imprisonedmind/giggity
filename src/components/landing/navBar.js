import Logo from "@/components/navigation/logo";
import DarkButton from "@/components/buttons/darkButton";

export default function LandingNavBar() {
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
