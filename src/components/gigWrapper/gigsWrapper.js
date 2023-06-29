import ItemCard from "@/components/card/itemCard";
import EventSeo from "@/components/event/eventSeo";

export default function GigsWrapper({ data, m }) {
  return (
    <div
      className={`
      ${m} grid h-max w-full grid-cols-1 gap-4 p-2 md:grid-cols-2 md:overflow-auto md:px-4 
      md:pb-4 md:pt-0 lg:grid-cols-3
      `}
    >
      {data.map((item) => (
        <>
          <ItemCard item={item} key={item.id} full={true} />
          <EventSeo item={item} getSpotify={false} />
        </>
      ))}
    </div>
  );
}
