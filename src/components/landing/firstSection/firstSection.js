import LandingNavBar from "@/components/landing/navBar";
import GigWeeklyWrapper from "@/components/gigWrapper/gigWeeklyWrapper";
import ButtonArea from "@/components/landing/firstSection/buttonArea";
import { getNext8 } from "/lib/dataFetching";
import FirstSectionTitle from "@/components/landing/firstSection/firstSectionTitle";

export default async function FirstSection() {
  const futureGigs = await getNext8();
  const apiKey = process.env.GOOGLE_MAPS_API_KEY || "";

  return (
    <div
      className={`
        z-5 relative mx-auto flex max-h-[h-fit] min-h-[h-min] w-[100svw] flex-col justify-between bg-opacity-5 
        bg-[url(/texture/stars.svg)] bg-repeat shadow-vignette
      `}
    >
      <div
        className={`
          flex h-full max-w-[1280px] flex-col justify-between gap-10 px-4 sm:gap-8 
          md:gap-24 md:px-20
        `}
      >
        <div className={"flex grow flex-col gap-10 sm:gap-4 md:gap-14"}>
          <LandingNavBar />
          <div className={"my-auto flex flex-col gap-4 md:gap-8"}>
            <FirstSectionTitle apiKey={apiKey} />
            <ButtonArea />
          </div>
        </div>

        <div
          className={`
            h-max w-full rounded-t-xl border border-b-0 border-green-500 bg-neutral-900 
            p-2 pb-0 shadow-main
          `}
        >
          <GigWeeklyWrapper
            data={futureGigs}
            title={"Upcoming Events"}
            link={"/app/upcoming"}
          />
        </div>
      </div>
    </div>
  );
}
