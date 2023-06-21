import HeroImage from "@/components/gigOverview/heroImage";
import ItemLocation from "@/components/card/itemLocation";
import ItemDateTime from "@/components/card/itemDateTime";
import ItemDescription from "@/components/card/itemDescription";
import Price from "@/components/card/itemPrice";
import ItemCountDown from "@/components/card/itemCountDown";
import Link from "next/link";

export default function MainArea({ item }) {
  return (
    <>
      <div
        className={
          "border-1 relative col-span-3 row-span-1 flex flex-wrap text-neutral-400" +
          " gap-4 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-800" +
          " p-2 md:flex-nowrap md:p-4"
        }
      >
        <HeroImage image={item.image} imgAlt={item.description} />

        <div className={"flex w-full flex-col gap-2"}>
          <h2 className={"text-xl"}>{item.title}</h2>

          <div className={"flex h-fit flex-col"}>
            <ItemLocation location={item.address} city={item.city} />
            <ItemDateTime eventDate={item.date} eventTime={item.time} />
          </div>

          <Link
            href={item.user ? `/app/profile/${item.user}` : "/app/profile/luke"}
            className={
              "group" + " cursor-pointer" + " text-xs text-neutral-500"
            }
          >
            Post by{" "}
            <span
              className={
                "capitalize text-green-500 underline-offset-4 group-hover:underline"
              }
            >
              @{item.user ? item.user : "luke"}
            </span>
          </Link>

          <div className={"flex gap-2 md:mb-2"}>
            <Price onlinePrice={item.onlinePrice} doorPrice={item.doorPrice} />
            <ItemCountDown date={item.date} time={item.time} />
          </div>

          <ItemDescription description={item.description} />
        </div>
      </div>
    </>
  );
}
