import ItemCard from "@/components/card/itemCard";

export default function GigsWrapper({ data, m }) {
  return (
    <div
      className={`${m} flex h-full w-full flex-wrap gap-4 overflow-y-scroll p-2 md:p-4`}
    >
      {data.map((item) => (
        <ItemCard item={item} key={item.id} full={true} />
      ))}
    </div>
  );
}
