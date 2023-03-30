"use client";
import ItemImage from "@/components/card/itemImage";
import ItemButton from "@/components/card/itemButton";
import Price from "@/components/card/itemPrice";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemTitle from "@/components/card/itemTitle";
import ItemLocation from "@/components/card/itemLocation";

export default function ItemCard({ item }) {
  return (
    <div
      key={item.id}
      className={
        "col-span-1 flex w-full flex-col justify-between rounded-xl border" +
        " border-neutral-700 bg-neutral-800 p-2"
      }
    >
      <ItemImage item={item} />
      <div
        className={
          "mt-4 flex w-full flex-col items-center justify-between overflow-hidden"
        }
      >
        <div className={"w-full"}>
          <ItemTitle title={item.title} />
          <ItemLocation city={item.city} location={item.address} />
          <ItemDateTime eventDate={item.date} eventTime={item.time} />
        </div>
      </div>
      <div className={"flex flex-nowrap gap-2 py-2"}>
        <Price price={item.onlinePrice} online={true} />
        <Price price={item.doorPrice} />
      </div>
      <ItemButton
        title={"View More"}
        colour={"bg-neutral-900 border-neutral-700"}
        hover={"hover:text-neutral-500"}
        textColour={"text-neutral-600"}
        link={`/gig/${item.uid}`}
      />
    </div>
  );
}
