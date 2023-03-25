import Image from "next/image";

export async function getWeatherData(latLng, date, apiKey) {
  const lat = latLng.lat;
  const lng = latLng.lng;
  const timeStamp = new Date(date);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default async function Weather({ latLng, date, apiKey }) {
  let data = await getWeatherData(latLng, date, apiKey);
  let description = data.weather[0].description;
  let icon = data.weather[0].icon;
  let location = data.name;
  let temp = data.main.temp;

  return (
    <div
      className={
        "border-1 flex border bg-neutral-800 text-neutral-500" +
        " grow rounded-lg border-neutral-700 p-4"
      }
    >
      <div className={"flex w-full items-center justify-between gap-2"}>
        <div>
          <div>Weather in {location}</div>
          <div className={"flex flex-wrap text-xs uppercase tracking-wider"}>
            <p>{description}</p>
            <p className={"px-1"}>·</p>
            <p>{temp} °C</p>
          </div>
        </div>
        <div className={"relative h-12 w-12 flex-shrink-0"}>
          <Image
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            alt={"test"}
            fill={true}
          />
        </div>
      </div>
    </div>
  );
}
