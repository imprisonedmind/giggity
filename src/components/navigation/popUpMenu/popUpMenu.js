import { useEffect } from "react";
import PopUpItems from "@/components/navigation/popUpMenu/popUpItems";

export default function PopUpMenu({ menu, showMenu }) {
  const version = process.env.NEXT_PUBLIC_APP_VERSION;
  const copyRightDate = new Date();

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
          "absolute -right-4 top-14 rounded-xl border border-neutral-700" +
          " w-max overflow-hidden bg-neutral-800 text-sm text-neutral-500 shadow-sm"
        }
      >
        <PopUpItems version={version} copyRightDate={copyRightDate} />
      </div>
    );
}
