import Map from "@/components/map/map";
import Artist from "@/components/artists/artist";
import MainArea from "@/components/gigOverview/mainArea";
import ButtonWeatherArea from "@/components/gigOverview/buttonWeatherArea";
import { supabaseAdmin } from "/lib/supabaseClient";
import NavBack from "@/components/gigOverview/navBack";
import EventSeo from "@/components/event/eventSeo";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

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
      <main className={"flex flex-wrap gap-4 md:p-2 md:px-4 md:pb-4"}>
        <NavBack title={item.title} />
        <div
          className={
            "flex w-full grid-rows-1 flex-wrap gap-4 md:grid md:h-[350px]" +
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
          <div className={"flex h-fit w-full flex-wrap gap-4"}>
            {item.artists &&
              item.artists.map((artist) => {
                return <Artist id={artist} key={artist} />;
              })}
          </div>
        </div>
      </main>
      <EventSeo item={item} getSpotify={true} />
    </>
  );
}

export async function generateMetadata({ params }) {
  const item = await getGig(params);

  // Additional contextual information for better keywords
  const city = item.city || "Cape Town";
  const venue = item.address || "District, Surfa Rosa";

  const sanitizedTitle = item.title.replace(/[^\w\s]/gi, "").trim(); // Remove special characters and trim spaces.

  const baseKeywords = [
    sanitizedTitle,
    city,
    venue,
    item.date,
    item.time,
    `R${item.price}`,
  ];

  return {
    description: item.description,
    keywords: [...baseKeywords],
    openGraph: {
      title: item.title,
      description: item.description,
      siteName: "Giggity",
      images: [
        {
          url: `htttps://giggity.co.za/api/gigImage?title="${item.title}"&gigImg="${item.image}"`,
          width: 1800,
          height: 1600,
          alt: item.title,
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: item.title,
      description: item.description,
      alt: item.title,
      creator: "@lukey_stephens",
      images: [
        `htttps://giggity.co.za/api/gigImage?title="${item.title}"&gigImg="${item.image}"`,
      ],
    },
    themeColor: "#22c55e",
  };
}
