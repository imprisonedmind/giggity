import Image from "next/image";

export default function ItemImage({ item, pos }) {
  return (
    <div
      className={
        "relative aspect-square h-[400px] overflow-hidden rounded-lg border md:h-96" +
        " border-1 border-neutral-700 shadow-2xl transition group-hover:drop-shadow-xl" +
        "  duration-300 ease-in-out"
      }
    >
      <Image
        src={item.image}
        alt={item.description}
        fill={true}
        priority={pos === 1}
        sizes={"100%"}
        className={"object-cover"}
        placeholder={"blur"}
        blurDataURL={item.image}
      />
    </div>
  );
}
