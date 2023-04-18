import Map from "@/components/map/map";
import Artist from "@/components/artists/artist";
import MainArea from "@/components/gigOverview/mainArea";
import { supabaseAdmin } from "../../../../lib/supabaseClient";
import ButtonWeatherArea from "@/components/gigOverview/buttonWeatherArea";

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
      <main className={"flex flex-wrap gap-4 px-2 md:p-0"}>
        <div
          className={
            "flex w-full grid-rows-1 flex-wrap gap-4 sm:grid md:h-[350px] md:grid-cols-4"
          }
        >
          <MainArea item={item} latLng={latLong} />
          <Map latLong={latLong} apikey={apiKey} />
        </div>
        <ButtonWeatherArea item={item} latLong={latLong} />
        {item.artists &&
          item.artists.map((artist) => {
            return <Artist id={artist} key={artist} />;
          })}
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
      // siteId: '1467726470533754880',
      creator: "@lukey_stephens",
      // creatorId: '1467726470533754880',
      images: [
        `https://giggity-ruddy.vercel.app/api/gigImage?title="${item.title}"&gigImg="${item.image}"`,
      ],
    },
  };
}
