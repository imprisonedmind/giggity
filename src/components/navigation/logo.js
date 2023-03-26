import { Gochi_Hand } from "next/font/google";
import Image from "next/image";
import icon from "public/devil.png";

const reenie = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div className={"relative flex h-full flex-nowrap items-center gap-1"}>
      <div className={"relative h-10 w-10"}>
        <Image src={icon} alt={"Giggity Icon image"} fill={true} />
      </div>
      <div
        className={"mt-2 h-fit text-xl font-thin tracking-[3px] text-green-600"}
      >
        <h1 className={reenie.className}>Giggity</h1>
      </div>
    </div>
  );
}
