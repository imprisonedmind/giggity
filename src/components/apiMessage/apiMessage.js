import Loading from "@/components/loading/loading";
import { useAddGigContext } from "@/context/addGig";
import { useEffect, useState } from "react";

export default function ApiMessage({}) {
  const { errMsg, error, success, loading } = useAddGigContext();

  let tag = "drumming";
  const apiKey = process.env.NEXT_PUBLIC_GIPHY_API_URL;

  let wording = "Loading";
  let colours = "bg-neutral-600 text-neutral-300";

  if (error) {
    wording = errMsg;
    colours = "bg-red-500/20 text-red-500";
    tag = "punk+rock";
  }
  if (success) {
    wording = "Success";
    colours = "bg-green-500/20 text-green-500";
  }

  const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}&rating=pg-13`;

  const [img, setImg] = useState(null);

  useEffect(() => {
    const getImg = async () => {
      const res = await fetch(url);
      const resJson = await res.json();
      const data = resJson.data;
      setImg(data);
    };
    getImg();
  }, []);

  if (error || success || loading) {
    if (loading && img) {
      return (
        <Loading
          title={wording}
          img={img.images.original.webp}
          alt={img.title}
        />
      );
    } else {
      return (
        <div
          className={`${colours} mb-4 flex items-center justify-center rounded-lg p-2`}
        >
          <p>{wording}</p>
        </div>
      );
    }
  } else return null;
}
