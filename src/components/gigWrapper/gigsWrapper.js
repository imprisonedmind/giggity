import ItemCard from "@/components/card/itemCard";

export default function GigsWrapper({ data, m }) {
  return (
    <div
      className={`${m} flex h-max w-full flex-wrap gap-4 p-2 md:overflow-auto md:px-4 md:pb-0 md:pt-0`}
    >
      {data.map((item) => (
        <ItemCard item={item} key={item.id} full={true} />
      ))}
    </div>
  );
}
