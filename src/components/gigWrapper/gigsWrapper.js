import ItemCard from "@/components/card/itemCard";

export default function GigsWrapper({ data }) {
  return (
    <div className={"flex w-full flex-wrap gap-4"}>
      {data.map((item) => (
        <ItemCard item={item} key={item.id} />
      ))}
    </div>
  );
}
