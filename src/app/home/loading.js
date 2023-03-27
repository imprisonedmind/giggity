import LoadingCard from "@/components/loading/card";

export default function Loading() {
  const arr = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div className={"flex h-full w-full flex-wrap gap-4 "}>
      {arr.map((x) => (
        <LoadingCard key={x} />
      ))}
    </div>
  );
}
