import Image from "next/image";

export async function getWeatherData(latLng, date, apiKey) {
  const lat = latLng.lat
  const lng = latLng.lng
  const timeStamp = new Date(date)
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}&units=metric`
  const response = await fetch(url);
  const data = await response.json();

  return data;
}

export default async function Weather({latLng, date, apiKey}) {
  let data = await getWeatherData(latLng, date, apiKey)
  let description = data.weather[0].description
  let icon = data.weather[0].icon
  let location = data.name
  let temp = data.main.temp

  return <div className={"flex text-neutral-500 bg-neutral-800 border border-1" +
      " border-neutral-700 p-4 grow rounded-lg"}>
    <div className={"flex gap-2 items-center justify-between w-full"}>
      <div>
        <div>Weather in {location}</div>
        <div className={"flex flex-wrap uppercase text-xs tracking-wider"}>
          <p>{description}</p>
          <p className={"px-1"}>·</p>
          <p>{temp} °C</p>
        </div>
      </div>
      <div className={"relative h-12 w-12"}>
        <Image src={`https://openweathermap.org/img/wn/${icon}.png`} alt={"test"}
               fill={true}/>
      </div>
    </div>
  </div>
}