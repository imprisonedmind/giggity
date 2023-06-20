import ItemCard from "@/components/card/itemCard";

export default function GigsWrapper({ data, m }) {
  return (
    <div
      className={`${m} flex h-full w-full flex-wrap gap-4 overflow-auto p-2 md:px-4 md:pt-0`}
    >
      {data.map((item) => (
        <ItemCard item={item} key={item.id} full={true} />
      ))}
    </div>
  );
}
