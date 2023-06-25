import devil from "../../../public/devil.png";
import Image from "next/image";
import { Gochi_Hand } from "next/font/google";
import Link from "next/link";

const reenie = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
});

export default function LogoName() {
  return (
    <Link
      href={"/app"}
      className={"mx-auto text-center text-[60px] text-green-600"}
    >
      <Image
        src={devil}
        alt={"Giggity Logo"}
        className={"aspect-square h-60 w-60"}
        loading={"lazy"}
        quality={50}
      />
      <h1 className={reenie.className}>Giggity</h1>
    </Link>
  );
}
