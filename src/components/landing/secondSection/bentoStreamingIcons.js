import Image from "next/image";
import streams from "public/logos/streaming.png";

export default function BentoStreamingIcons() {
  return (
    <div className="ml-auto flex w-[300px] md:ml-0">
      <Image
        src={streams}
        alt={"Streaming logos coming soon"}
        className={"object-contain"}
      />
    </div>
  );
}
