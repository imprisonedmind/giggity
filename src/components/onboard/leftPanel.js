import Image from "next/image";

export async function getImg(url) {
  const res = await fetch(url);
  const resJson = await res.json();
  return resJson.data;
}

export default async function OnboardLeftPanel() {
  const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_URL;
  const tag = "punk+rock";
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=pg-13`;

  const img = await getImg(url);

  return (
    <div
      className={
        "hidden h-full w-3/5 overflow-hidden rounded-xl border bg-neutral-800 md:flex" +
        " border-neutral-700"
      }
    >
      {img && (
        <Image
          src={img.images.original.webp}
          alt={img.title}
          width={500}
          height={500}
          priority={true}
          className={"h-full w-full object-cover"}
        />
      )}
    </div>
  );
}
