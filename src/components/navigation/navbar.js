import Logo from "@/components/navigation/logo";
import BackButton from "@/components/navigation/backButton";
import LoginOrAddGig from "@/components/navigation/loginOrAddGig";
import UserCircle from "@/components/navigation/userCircle";

export default function Navbar() {
  return (
    <header className={"hidden px-4 pt-4 md:flex"}>
      <div className={"z-50  flex w-full flex-nowrap gap-4 p-2 md:mb-4 md:p-0"}>
        <BackButton />
        <div
          className={
            "sticky top-4 z-10 flex h-fit grow items-center justify-between p-2" +
            " border-1 rounded-xl border border-neutral-700 bg-neutral-800 shadow-lg"
          }
        >
          <Logo />
          <div className={"flex flex-nowrap items-center gap-2"}>
            <LoginOrAddGig />
            <UserCircle />
          </div>
        </div>
      </div>
    </header>
  );
}
