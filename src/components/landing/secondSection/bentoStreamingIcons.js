import Image from "next/image";
import streams from "public/logos/streaming.png";

export default function BentoStreamingIcons() {
  return (
    <div className="flex w-[300px]">
      <Image
        src={streams}
        alt={"Streaming logos coming soon"}
        className={"object-contain"}
      />
    </div>
  );
}
