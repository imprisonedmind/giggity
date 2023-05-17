import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function BackButton({ title }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className={
        "mt-2 flex flex-nowrap items-center gap-2 text-neutral-500 md:hidden" +
        " cursor-pointer tracking-wide underline underline-offset-2" +
        " w-fit hover:text-green-500 focus:text-green-500"
      }
    >
      <ArrowLeftIcon className={"h-4 w-4"} />
      <p>{title}</p>
    </div>
  );
}
