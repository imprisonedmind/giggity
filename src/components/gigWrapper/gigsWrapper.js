import ItemCard from "@/components/card/itemCard";

export default function GigsWrapper({ data, m }) {
  return (
    <div
      className={`${m} grid h-full w-full grid-cols-1 gap-4 overflow-y-auto p-2 
      sm:grid-cols-2 md:grid-cols-3 md:overflow-y-visible md:p-0 md:px-4 lg:grid-cols-4`}
    >
      {data.map((item) => (
        <ItemCard item={item} key={item.id} full={true} />
      ))}
    </div>
  );
}
