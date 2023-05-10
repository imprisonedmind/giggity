import Image from "next/image";

export default function HeroImage({ image, imgAlt }) {
  return (
    <div
      className={
        "border-1 relative aspect-square overflow-hidden rounded-lg border" +
        " max-h-[450px] w-full flex-shrink-0 border-neutral-700 shadow-2xl md:h-full" +
        " sm:w-1/3"
      }
    >
      <Image
        src={image}
        alt={imgAlt}
        fill={true}
        sizes={"100%"}
        className={"object-cover"}
        placeholder={"blur"}
        blurDataURL={image}
      />
    </div>
  );
}
