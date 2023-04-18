import ItemPriceElement from "@/components/card/itemPriceElement";

export default function Price({ onlinePrice, doorPrice }) {
  if (onlinePrice || doorPrice) {
    return (
      <>
        {onlinePrice !== 0 && (
          <ItemPriceElement online={true} price={onlinePrice} />
        )}
        {doorPrice !== 0 && <ItemPriceElement price={doorPrice} />}
      </>
    );
  } else
    return (
      <div
        className={
          "my-2 flex h-fit w-fit flex-nowrap rounded-md bg-orange-500/10 px-2 py-1" +
          " text-xs text-orange-500"
        }
      >
        <p>FREE</p>
      </div>
    );
}
