import PopUpMenuItem from "@/components/navigation/popUpMenu/popUpMenuItem";
import { useEffect } from "react";
import { supabaseAdmin } from "../../../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function PopUpMenu({ menu, showMenu }) {
  const router = useRouter();

  const version = process.env.APP_VERSION;
  const copyRightDate = new Date();

  const signOut = () => {
    supabaseAdmin.auth.signOut();
    router.refresh();
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.getAttribute("itemRef") !== "popUpMenu" && menu) {
        showMenu(!menu);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menu, showMenu]);

  if (menu)
    return (
      <div
        itemRef={"popUpMenu"}
        className={
          "absolute -right-2 top-16 rounded-xl border border-neutral-700" +
          " w-max overflow-hidden bg-neutral-800 text-sm text-neutral-500 shadow-sm"
        }
      >
        <PopUpMenuItem title={"Profile"} link={"app/profile"} />
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
      </div>
    );
}
