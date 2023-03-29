import HeroImage from "@/components/gigOverview/heroImage";
import ItemLocation from "@/components/card/itemLocation";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemDescription from "@/components/card/itemDescription";
import Price from "@/components/card/itemPrice";

export default function MainArea({ item }) {
  return (
    <div
      className={
        "border-1 col-span-3 row-span-1 flex flex-wrap text-neutral-400 sm:flex-nowrap" +
        " gap-4 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800 p-4"
      }
    >
      <HeroImage image={item.image} imgAlt={item.description} />
      <div className={"flex h-full flex-col"}>
        <h2 className={"text-xl"}>{item.title}</h2>
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
