import Image from "next/image";
import Link from "next/link";

export default function ItemImage({ item }) {
  return (
    <Link
      href={`/gig/${item.uid}`}
      className={
        "relative aspect-square h-[400px] overflow-hidden rounded-lg border md:h-72" +
        " border-1 border-neutral-700 shadow-2xl"
      }
    >
      <Image
        src={item.image}
        alt={item.description}
        fill={true}
        className={"object-cover"}
        placeholder={"blur"}
        blurDataURL={item.image}
      />
    </Link>
  );
}
