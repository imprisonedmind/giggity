import Image from "next/image";

export default function HeroImage({image, imgAlt}) {
  return <div className={"relative overflow-hidden rounded-lg border border-1" +
      " border-neutral-700 shadow-2xl aspect-square w-1/3 h-full flex-shrink-0"}>
    <Image src={image} alt={imgAlt} fill={true}
           className={"object-cover"} placeholder={"blur"} blurDataURL={image}/>
  </div>
}