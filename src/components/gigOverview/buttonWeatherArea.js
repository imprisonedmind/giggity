import ButtonArea from "@/components/gigOverview/buttonArea";
import Weather from "@/components/weather/weather";

export default function ButtonWeatherArea({ item, latLong }) {
  const weatherApiKey = process.env.OPEN_WEATHER_API || "";

  let hide = false;

  if (new Date(item.date) < new Date() && item.ticket === null) {
    hide = true;
  }

  if (hide) return null;

  return (
    <div className={"flex w-full flex-wrap gap-4 md:flex-nowrap"}>
      <ButtonArea ticket={item.ticket} title={item.title} />
      <Weather latLng={latLong} date={item.date} apiKey={weatherApiKey} />
    </div>
  );
}
