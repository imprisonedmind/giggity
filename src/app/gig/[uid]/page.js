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

export default async function Gig({ params }) {
  const { data } = await supabaseAdmin
    .from("Event")
    .select()
    .match({ uid: params.uid });
  const item = data[0];
  let latLong;

  if (item.location) latLong = await getLatLngFromAddress(item.location);

  return (
    <>
      <head>
        <meta property="og:title" content={item.title} />
        <meta
          property="og:image"
          content={`https://giggity-ruddy.vercel.app/api/gigImage?title=${item.title}&gigImg=${item.image}`}
        />
        <meta
          name="twitter:image"
          content={`https://giggity-ruddy.vercel.app/api/gigImage?title=${item.title}&gigImg=${item.image}`}
        />
        <meta property="og:description" content={item.description} />
      </head>
      <div className={"flex flex-wrap gap-4"}>
        <div
          className={
            "flex w-full grid-rows-1 flex-wrap gap-4 sm:grid md:h-[350px] md:grid-cols-4"
          }
        >
          <MainArea item={item} />
          <Map latLong={latLong} apikey={apiKey} />
        </div>
        <ButtonWeatherArea item={item} latLong={latLong} />
        {item.artists &&
          item.artists.map((artist) => {
            return <Artist id={artist} key={artist} />;
          })}
      </div>
    </>
  );
}
