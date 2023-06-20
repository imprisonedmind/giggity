"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function NavBack({ title }) {
  const router = useRouter();

  return (
    <div
      className={
        "sticky left-0 top-0 z-20 flex  h-fit w-full bg-green-500 p-2 text-white" +
        " md:hidden"
      }
    >
      <div onClick={() => router.back()} className={"flex flex-nowrap gap-2"}>
        <ArrowLeftIcon className={"h-w w-4"} />
        <p>Back</p>
      </div>
      {title && (
        <p
          className={
            "absolute left-1/2 top-1/2 w-[55%] -translate-x-1/2 -translate-y-1/2" +
            " transform truncate text-lg"
          }
        >
          {title}
        </p>
      )}
    </div>
  );
}
