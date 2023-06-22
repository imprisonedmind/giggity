"use client";
import GreenButton from "@/components/buttons/greenButton";
import { ArrowTrendingUpIcon, SparklesIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";

export default function ButtonArea() {
  const router = useRouter();

  return (
    <div className={"flex w-fit flex-nowrap gap-4"}>
      <GreenButton
        title={"Try for free!"}
        icon={<SparklesIcon className={"h-w w-4"} />}
        dark={true}
        callBack={() => router.push("/app")}
      />
      <GreenButton
        title={"Get it on Google Play"}
        icon={<ArrowTrendingUpIcon className={"h-w w-4"} />}
        dark={true}
        callBack={() =>
          router.push(
            "https://play.google.com/store/apps/details?id=za.co.giggity.twa"
          )
        }
      />
    </div>
  );
}
