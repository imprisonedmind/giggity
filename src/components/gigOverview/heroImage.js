import Image from "next/image";

export default function HeroImage({image, imgAlt}) {
  return <div className={"relative overflow-hidden rounded-lg border border-1" +
      " border-neutral-700 shadow-2xl aspect-square w-full h-[300px] sm:h-auto" +
      " sm:w-1/4" +
      " flex-shrink-0 "}>
    <Image src={image} alt={imgAlt} fill={"cover"}
           className={"object-cover"} placeholder={"blur"} blurDataURL={image}/>
  </div>
}