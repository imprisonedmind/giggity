import Image from "next/image";
import math from "../../../../public/screens/math.png";
import mouse from "../../../../public/screens/mouse.png";

export default function BentoSpotifyStream() {
  return (
    <div className={"flex h-[569.02px] w-[632.47px] gap-[14px]"}>
      <Image
        className={
          "h-[555.81px] w-[274.04px] origin-top-left rotate-[2.91deg] rounded-lg"
        }
        alt={"Black math spotify stream"}
        src={math}
      />
      <Image
        className={
          "h-[479.85px] w-[272.42px] origin-top-left rotate-[-5.42deg] rounded-lg"
        }
        alt={"Mouse spotify stream"}
        src={mouse}
      />
    </div>
  );
}
