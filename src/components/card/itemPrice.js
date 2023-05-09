import ItemPriceElement from "@/components/card/itemPriceElement";
import { HeartIcon } from "@heroicons/react/24/solid";

export default function Price({ onlinePrice, doorPrice }) {
  if (onlinePrice || doorPrice) {
    return (
      <>
        {onlinePrice !== 0 && (
          <ItemPriceElement online={true} price={onlinePrice} />
        )}
        {doorPrice !== 0 && doorPrice !== null && (
          <ItemPriceElement price={doorPrice} />
        )}
      </>
    );
  } else
    return (
      <div
        className={
          "mt-2 flex h-fit w-fit flex-nowrap rounded-md bg-pink-500/10 px-2 py-1" +
          " text-xs text-pink-500"
        }
      >
        <div className={"flex flex-nowrap items-center gap-1"}>
          <p>Totally Free! </p>
          <HeartIcon className={"h-3 w-3"} />
        </div>
      </div>
    );
}
