import Map from "@/components/map/map";
import Artist from "@/components/artists/artist";
import MainArea from "@/components/gigOverview/mainArea";
import ButtonWeatherArea from "@/components/gigOverview/buttonWeatherArea";
import { supabaseAdmin } from "/lib/supabaseClient";
import NavBack from "@/components/gigOverview/navBack";

const apiKey = process.env.GOOGLE_MAPS_API_KEY || "";

async function getLatLngFromAddress(address) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.results.length === 0) {
    throw new Error("Invalid address");
  }
  const lat = data.results[0].geometry.location.lat;
  const lng = data.results[0].geometry.location.lng;
  return { lat, lng };
}

async function getGig(params) {
  const { data } = await supabaseAdmin
    .from("event")
    .select()
    .match({ uid: params.uid });
  return data[0];
}

export default async function Gig({ params }) {
  let latLong = null;
  const item = await getGig(params);
  const address = item.address + ", " + item.city;
  if (address) latLong = await getLatLngFromAddress(address);

  return (
    <>
      <main className={"flex flex-wrap gap-4 md:p-2 md:px-4"}>
        <NavBack title={item.title} />
        <div
          className={
            "flex w-full grid-rows-1 flex-wrap gap-4 sm:grid md:h-[350px]" +
            " p-2 pb-0 pt-0 md:grid-cols-4 md:p-0"
          }
        >
          <MainArea item={item} latLng={latLong} />
          <Map latLong={latLong} apikey={apiKey} />
        </div>
        <div
          className={"flex w-full flex-col gap-4 p-2 pt-0 md:flex-wrap md:p-0"}
        >
          <ButtonWeatherArea item={item} latLong={latLong} />
          {item.artists &&
            item.artists.map((artist) => {
              return <Artist id={artist} key={artist} />;
            })}
        </div>
      </main>
    </>
  );
}

export async function generateMetadata({ params }) {
  const item = await getGig(params);
  return {
    title: {
      default: item.title,
    },
    description: item.description,
    keywords: item.title.split(/\s+/).map((word) => word.replace(/[,x-]/g, "")),
    openGraph: {
      title: item.title,
      description: item.description,
      siteName: "Giggity",
      images: [
        {
          url: `https://giggity-ruddy.vercel.app/api/gigImage?title="${item.title}"&gigImg="${item.image}"`,
          width: 1800,
          height: 1600,
          alt: item.description,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      creator: "@lukey_stephens",
      images: [
        `https://giggity-ruddy.vercel.app/api/gigImage?title="${item.title}"&gigImg="${item.image}"`,
      ],
    },
    themeColor: "#22c55e",
  };
}
