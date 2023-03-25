import Map from "@/components/map/map";
import Weather from "@/components/weather/weather";
import ButtonArea from "@/components/gigOverview/buttonArea";
import Artist from "@/components/artists/artist";
import MainArea from "@/components/gigOverview/mainArea";
import { supabaseAdmin } from "../../../../lib/supabaseClient";
import ButtonWeatherArea from "@/components/gigOverview/buttonWeatherArea";
import Head from "next/head";

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
    <div className={"flex flex-wrap gap-4"}>
      <Head>
        <title></title>
        <meta property={"og:image"} content={"/api/gigImage"} />
      </Head>
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
  );
}
