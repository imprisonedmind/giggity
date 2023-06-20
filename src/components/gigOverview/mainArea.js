import HeroImage from "@/components/gigOverview/heroImage";
import ItemLocation from "@/components/card/itemLocation";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemDescription from "@/components/card/itemDescription";
import Price from "@/components/card/itemPrice";
import ItemCountDown from "@/components/card/itemCountDown";

export default function MainArea({ item }) {
  return (
    <>
      <div
        className={
          "border-1 relative col-span-3 row-span-1 flex flex-wrap text-neutral-400" +
          " gap-4 overflow-hidden rounded-lg border border-neutral-700 sm:flex-nowrap" +
          " bg-neutral-800 p-4"
        }
      >
        <HeroImage image={item.image} imgAlt={item.description} />
        <div className={"flex w-full flex-col"}>
          <div className={"flex h-fit flex-col"}>
            <h2 className={"text-xl"}>{item.title}</h2>
            <ItemLocation location={item.address} city={item.city} />
            <ItemDateTime eventDate={item.date} eventTime={item.time} />
            <div className={"mb-2 flex gap-2"}>
              <Price
                onlinePrice={item.onlinePrice}
                doorPrice={item.doorPrice}
              />
              <ItemCountDown date={item.date} time={item.time} />
            </div>
          </div>
          <ItemDescription description={item.description} />
        </div>
      </div>
    </>
  );
}
