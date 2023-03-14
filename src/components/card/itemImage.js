import Image from "next/image";

export default function ItemImage({item}) {
  return <div className={"relative h-72 overflow-hidden rounded-lg border" +
      " border-1 border-neutral-700 shadow-2xl"}>
    <Image src={item.image} alt={item.imgAlt} fill={"cover"}
           className={"object-cover "} placeholder={"blur"} blurDataURL={item.image}/>
  </div>
}