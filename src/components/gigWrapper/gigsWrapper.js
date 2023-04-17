import ItemCard from "@/components/card/itemCard";

export default function GigsWrapper({ data, m }) {
  return (
    <div
      className={`${m} grid w-full grid-cols-1 gap-4 p-2 sm:grid-cols-2 md:grid-cols-3 md:p-0 lg:grid-cols-4`}
    >
      {data.map((item) => (
        <ItemCard item={item} key={item.id} full={true} />
      ))}
    </div>
  );
}
