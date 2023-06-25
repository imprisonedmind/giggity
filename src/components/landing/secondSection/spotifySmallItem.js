import Image from "next/image";

export default function SpotifySmallItem({ src, alt }) {
  return (
    <Image
      className={
        "cursor-pointer rounded-md object-contain transition hover:scale-90" +
        " duration-300 ease-in-out"
      }
      src={src}
      alt={alt}
      loading={"lazy"}
      quality={70}
    />
  );
}
