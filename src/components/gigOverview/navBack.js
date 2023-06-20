"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function NavBack() {
  const router = useRouter();

  return (
    <div
      className={
        "sticky left-0 top-0 z-20  h-fit w-full bg-green-500 p-2 text-white md:hidden"
      }
    >
      <div onClick={() => router.back()} className={"flex flex-nowrap gap-2"}>
        <ArrowLeftIcon className={"h-w w-4"} />
        <p>Back</p>
      </div>
    </div>
  );
}
