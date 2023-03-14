"use client"
import ItemImage from "@/components/card/itemImage";
import ItemButton from "@/components/card/itemButton";
import ItemPriceOnline from "@/components/card/itemPriceOnline";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemTitle from "@/components/card/itemTitle";
import ItemLocation from "@/components/card/itemLocation";
import ItemPriceDoor from "@/components/card/itemPriceDoor";

export default function ItemCard({item}) {
  return <div key={item.id}
              className={"flex flex-col p-2 bg-neutral-800 w-full sm:w-[250px]" +
                  " rounded-xl border" +
                  " border-neutral-700"}>
    <ItemImage item={item}/>
    <div className={"w-full flex flex-nowrap justify-between items-center mt-4 overflow-hidden"}>
      <div className={"w-full"}>
        <ItemTitle item={item}/>
        <ItemLocation item={item}/>
        <ItemDateTime item={item}/>
      </div>
    </div>
    <div className={"flex flex-nowrap gap-2"}>
      <ItemPriceOnline onlinePrice={item.onlinePrice}/>
      <ItemPriceDoor doorPrice={item.doorPrice}/>
    </div>
    <ItemButton title={"View More"} colour={"bg-neutral-900"}
                hover={"hover:text-neutral-500"} textColour={"text-neutral-600"}
                link={`/gig/${item.uid}`}/>
  </div>
}