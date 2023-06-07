"use client";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  if (pathname !== "/app")
    return (
      <div
        onClick={() => router.back()}
        className={
          "flex w-fit flex-nowrap items-center rounded-xl bg-neutral-800 py-1 pl-2" +
          " border-1 text-normal cursor-pointer gap-2 border pr-4 text-neutral-500" +
          " border-neutral-700"
        }
      >
        <ArrowLeftIcon className={"h-4 w-4"} /> Back
      </div>
    );
}
