"use client";
import ItemCard from "@/components/card/itemCard";
import BackButton from "@/components/buttons/backButton";

export default function GigsWrapper({ data, m, title }) {
  return (
    <div
      className={`${m} grid h-[92%] w-full grid-cols-1 gap-4 overflow-y-auto p-2 sm:grid-cols-2
      md:h-full md:grid-cols-3 md:overflow-y-visible md:p-0 lg:grid-cols-4`}
    >
      <BackButton title={title} />
      {data.map((item) => (
        <ItemCard item={item} key={item.id} full={true} />
      ))}
    </div>
  );
}
