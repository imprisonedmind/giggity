"use client";
import PopUpMenuItem from "@/components/navigation/popUpMenu/popUpMenuItem";
import { useSupabase } from "@/context/auth";
import { supabaseAdmin } from "../../../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function PopUpItems({ copyRightDate, version }) {
  const router = useRouter();

  const signOut = () =>
    supabaseAdmin.auth.signOut().then((res) => router.push("/app"));

  return (
    <>
      <PopUpMenuItem title={"Profile"} link={"/app/profile"} />
      <PopUpMenuItem title={"Sign Out"} callback={() => signOut()} />
      <div className={"w-full border border-neutral-700"} />
      <PopUpMenuItem title={"Creator"} />
      <PopUpMenuItem title={"Change Logs"} link={"/app/changelogs"} />
      <PopUpMenuItem title={"Privacy Policy"} link={"/app/privacy"} />
      <div className={"w-full border border-neutral-700"} />
      <div className={"flex flex-col gap-2 px-4 py-2"}>
        <p>© 2023 - {copyRightDate.getFullYear()}</p>
        <p>Version {version}</p>
      </div>
    </>
  );
}
