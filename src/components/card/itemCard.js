"use client"
import ItemImage from "@/components/card/itemImage";
import ItemButton from "@/components/card/itemButton";
import Price from "@/components/card/itemPrice";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemTitle from "@/components/card/itemTitle";
import ItemLocation from "@/components/card/itemLocation";

export default function ItemCard({item}) {
  return <div key={item.id}
              className={"flex flex-col p-2 bg-neutral-800 w-full sm:w-[250px]" +
                  " rounded-xl border" +
                  " border-neutral-700"}>
    <ItemImage item={item}/>
    <div
        className={"w-full flex flex-nowrap justify-between items-center mt-4 overflow-hidden"}>
      <div className={"w-full"}>
        <ItemTitle title={item.title}/>
        <ItemLocation city={item.city} location={item.location}/>
        <ItemDateTime eventTime={item.time} eventDate={item.date}/>
      </div>
    </div>
    <div className={"flex flex-nowrap gap-2 py-4"}>
      <Price price={item.onlinePrice} online={true}/>
      <Price price={item.doorPrice}/>
    </div>
    <ItemButton title={"View More"} colour={"bg-neutral-900"}
                hover={"hover:text-neutral-500"} textColour={"text-neutral-600"}
                link={`/gig/${item.uid}`}/>
  </div>
}