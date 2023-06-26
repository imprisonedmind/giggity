import Image from "next/image";
import icon from "public/devil.png";
import Link from "next/link";
import { Gochi_Hand } from "next/font/google";
import { LogoJsonLd } from "next-seo";

const reenie = Gochi_Hand({
  weight: "400",
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <>
      <Link
        href={"/"}
        className={"relative flex h-fit flex-nowrap items-center gap-1"}
      >
        <div className={"relative h-10 w-10"}>
          <Image
            src={icon}
            alt={"Giggity Icon image"}
            fill={true}
            loading={"lazy"}
            quality={70}
          />
        </div>
        <div
          className={
            "mt-2 h-fit text-xl font-thin tracking-[3px] text-green-600"
          }
        >
          <h1 className={reenie.className}>Giggity</h1>
        </div>
      </Link>
      <LogoJsonLd
        useAppDir={true}
        logo={"https://giggity.co.za/devil.png"}
        url={"https://giggity.co.za"}
      />
    </>
  );
}
