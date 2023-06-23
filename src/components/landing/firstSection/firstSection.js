import LandingNavBar from "@/components/landing/navBar";
import GigWeeklyWrapper from "@/components/gigWrapper/gigWeeklyWrapper";
import ButtonArea from "@/components/landing/firstSection/buttonArea";
import { getNext8 } from "/lib/dataFetching";
import SectionHeader from "@/components/landing/sectionHeader";

export default async function FirstSection() {
  const futureGigs = await getNext8();

  return (
    <div
      className={
        "z-5 mx-auto  h-[100svh] w-full  justify-between bg-opacity-5" +
        "  bg-[url(/texture/stars.svg)] bg-repeat shadow-vignette"
      }
    >
      <div
        className={
          "mx-auto flex h-full max-w-[1280px] flex-col gap-10 px-4 sm:gap-8 md:gap-24" +
          " md:px-20"
        }
      >
        <div className={"flex grow flex-col gap-10 sm:gap-4 md:gap-14"}>
          <LandingNavBar />
          <div className={"my-auto flex flex-col gap-4 md:gap-8"}>
            <SectionHeader
              title={
                "Discover the Thrill of Live Music in Cape Town with Giggity."
              }
            />
            <ButtonArea />
          </div>
        </div>

        <div
          className={
            "h-min w-full rounded-t-xl border border-green-500 bg-neutral-900 p-2 pb-0" +
            " border-b-0 shadow-main"
          }
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
