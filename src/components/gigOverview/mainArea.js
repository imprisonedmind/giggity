import HeroImage from "@/components/gigOverview/heroImage";
import ItemLocation from "@/components/card/itemLocation";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemDescription from "@/components/card/itemDescription";
import Price from "@/components/card/itemPrice";

export default function MainArea({ item }) {
  return (
    <div
      className={
        "row-span-1 flex flex-wrap text-neutral-400 sm:flex-nowrap" +
        " border-1 col-span-3 gap-4 rounded-lg border border bg-neutral-800 p-4" +
        " border-neutral-700 "
      }
    >
      <HeroImage image={item.image} imgAlt={item.description} />
      <div className={"flex h-full flex-col"}>
        <h1 className={"text-xl"}>{item.title}</h1>
        <ItemLocation location={item.location} city={item.city} />
        <ItemDateTime eventDate={item.date} eventTime={item.time} />
        <div className={"flex gap-4"}>
          <Price price={item.onlinePrice} online={true} />
          <Price price={item.doorPrice} />
        </div>
        <ItemDescription description={item.description} />
      </div>
    </div>
  );
}
