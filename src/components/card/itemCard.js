import ItemImage from "@/components/card/itemImage";
import Price from "@/components/card/itemPrice";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemTitle from "@/components/card/itemTitle";
import ItemLocation from "@/components/card/itemLocation";
import Link from "next/link";
import ItemCountDown from "@/components/card/itemCountDown";

export default function ItemCard({ item, full }) {
  return (
    <Link
      href={`/app/gig/${item.uid}`}
      key={item.id}
      className={`${
        full ? "w-full " : "w-fit max-w-[300px]"
      } col-span-1 flex cursor-pointer flex-col justify-between rounded-xl 
        border border-neutral-700 bg-neutral-800 p-2`}
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
      <div className={"flex w-fit flex-nowrap gap-2 py-2"}>
        <Price onlinePrice={item.onlinePrice} doorPrice={item.doorPrice} />
        <ItemCountDown date={item.date} time={item.time} />
      </div>
    </Link>
  );
}
