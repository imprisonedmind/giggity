import MainArea from "@/components/gigOverview/mainArea";
import Map from "@/components/map/map";
import ButtonWeatherArea from "@/components/gigOverview/buttonWeatherArea";
import Artist from "@/components/artists/artist";

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

export default function GigContent({ item }) {
  // const [latLong, setLatLong] = useState(null);
  const address = item.address + " , " + item.city;
  //
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const localLtLng = await getLatLngFromAddress(address);
  //     setLatLong(localLtLng);
  //   };
  //   fetchData();
  // }, []);

  const latLong = false;

  return (
    <div className={"flex flex-wrap gap-4"}>
      <div
        className={
          "flex w-full grid-rows-1 flex-wrap gap-4 sm:grid md:h-[350px] md:grid-cols-4"
        }
      >
        <MainArea item={item} />
        {latLong && <Map latLong={latLong} apikey={apiKey} />}
      </div>
      {latLong && <ButtonWeatherArea item={item} latLong={latLong} />}
      {item.artists &&
        item.artists.map((artist) => {
          return <Artist id={artist} key={artist} />;
        })}
    </div>
  );
}
