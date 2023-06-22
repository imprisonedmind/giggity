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
      prefetch={true}
      href={`/app/gig/${item.uid}`}
      key={item.id}
      className={`${
        full ? "w-full " : "w-fit max-w-[300px]"
      } group col-span-1 flex cursor-pointer flex-col justify-between gap-2 
        rounded-xl border border-neutral-700 bg-neutral-800 p-2 transition 
        duration-300 ease-in-out hover:border-neutral-600 md:max-w-[300px]`}
    >
      <ItemImage item={item} />
      <ItemTitle title={item.title} />

      <div className={"flex w-full flex-col "}>
        <ItemLocation city={item.city} location={item.address} />
        <ItemDateTime eventDate={item.date} eventTime={item.time} />
      </div>
      <div className={"flex flex-nowrap gap-2 pt-1"}>
        <Price onlinePrice={item.onlinePrice} doorPrice={item.doorPrice} />
        <ItemCountDown date={item.date} time={item.time} />
      </div>
    </Link>
  );
}
