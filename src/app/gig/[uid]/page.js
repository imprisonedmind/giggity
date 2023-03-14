import {supabaseAdmin} from "@/app/page";
import HeroImage from "@/components/gigOverview/heroImage";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemLocation from "@/components/card/itemLocation";
import ItemDescription from "@/components/card/itemDescription";
import ItemButton from "@/components/card/itemButton";
import {
  CheckBadgeIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  TicketIcon
} from "@heroicons/react/24/solid";
import Map from "@/components/map/map";


async function getLatLngFromAddress(address) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || ''
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.results.length === 0) {
    throw new Error('Invalid address');
  }
  console.log(data)
  const {lat, lng} = data.results[0].geometry.location;
  return {lat, lng};
}

export default async function Gig({params}) {
  let {data} = await supabaseAdmin.from('Event').select().match({uid: params.uid})
  const item = data[0]

  let {latLong} = getLatLngFromAddress("surfa rosa, cape town")
  console.log(latLong)


  return <>
    <div className={"flex flex-wrap sm:flex-nowrap text-neutral-400 flex" +
        " gap-4" +
        " w-full h-fit bg-neutral-800 p-4 border border rounded-lg border-1" +
        " border-neutral-700"}>
      <HeroImage image={item.image} imgAlt={item.imgAlt}/>
      <div className={"flex-col"}>
        <h1 className={"text-xl"}>{item.title}</h1>
        <ItemLocation item={item}/>
        <ItemDateTime item={item}/>
        <ItemDescription description={item.description} height={"fit"}/>
        <div className={"flex flex-nowrap gap-2"}>
          {item.ticket &&
              <ItemButton
                  title={"Tickets"}
                  link={item.ticket}
                  textColour={"text-green-500"}
                  colour={"bg-green-500/10"}
                  icon={<TicketIcon/>}/>
          }
          <ItemButton
              title={"I'm Going"}
              link={"/test"}
              textColour={"text-blue-500"}
              colour={"bg-blue-500/10"}
              icon={<CheckBadgeIcon/>}/>
          <ItemButton
              title={"Like"}
              link={"/test"}
              textColour={"text-pink-500"}
              colour={"bg-pink-500/10"}
              icon={<HandThumbUpIcon/>}/>
          <ItemButton
              title={"Dislike"}
              link={"/test"}
              textColour={"text-red-500"}
              colour={"bg-red-500/10"}
              icon={<HandThumbDownIcon/>}/>
        </div>
      </div>
    </div>
    <div>
      <Map location={latLong}/>
    </div>
  </>
}