"use client";
import PopUpMenuItem from "@/components/navigation/popUpMenu/popUpMenuItem";
import { useSupabase } from "@/context/auth";

export default function PopUpItems({ copyRightDate, version }) {
  const session = useSupabase();
  const user = session?.user;
  const uuid = user?.id;

  return (
    <>
      <PopUpMenuItem title={"Profile"} link={`app/profile/${uuid}`} />
      <PopUpMenuItem title={"Sign Out"} callback={() => signOut()} />
      <div className={"w-full border border-neutral-700"} />
      <PopUpMenuItem title={"Creator"} />
      <PopUpMenuItem title={"Change Logs"} link={"app/changelogs"} />
      <PopUpMenuItem title={"Privacy Policy"} link={"app/privacy"} />
      <div className={"w-full border border-neutral-700"} />
      <div className={"flex flex-col gap-2 px-4 py-2"}>
        <p>© 2023 - {copyRightDate.getFullYear()}</p>
        <p>Version {version}</p>
      </div>
    </>
  );
}
