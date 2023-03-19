import Map from "@/components/map/map";
import Weather from "@/components/weather/weather";
import ButtonArea from "@/components/gigOverview/buttonArea";
import Artist from "@/components/artists/artist";
import MainArea from "@/components/gigOverview/mainArea";


const apiKey = process.env.GOOGLE_MAPS_API_KEY || ''
const weatherApiKey = process.env.OPEN_WEATHER_API || ''

async function getLatLngFromAddress(address) {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.results.length === 0) {
    throw new Error('Invalid address');
  }
  const lat = data.results[0].geometry.location.lat
  const lng = data.results[0].geometry.location.lng
  return {lat, lng};
}

export default async function Gig({params}) {
  const {data} = await supabaseAdmin.from('Event').select().match({uid: params.uid})
  const item = data[0]

  let latLong = await getLatLngFromAddress(item.location)

  return <div className={"flex flex-wrap gap-4"}>
    <div className={"grid grid-cols-4 grid-rows-1 w-full h-[350px] gap-4"}>
      <MainArea item={item}/>
      <Map latLong={latLong} apikey={apiKey}/>
    </div>
    <div className={"w-full gap-4 flex"}>
      <ButtonArea ticket={item.ticket}/>
      <Weather latLng={latLong} date={item.date} apiKey={weatherApiKey}/>
    </div>
    {item.artists && item.artists.map((artist) => {
      return <Artist id={artist} key={artist}/>
    })}
  </div>
}