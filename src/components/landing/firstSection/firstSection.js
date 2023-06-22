import LandingNavBar from "@/components/landing/navBar";
import GigWeeklyWrapper from "@/components/gigWrapper/gigWeeklyWrapper";
import ButtonArea from "@/components/landing/firstSection/buttonArea";
import { getNext8 } from "/lib/dataFetching";

export default async function FirstSection() {
  const futureGigs = await getNext8();

  return (
    <div
      className={
        "flex h-[100svh] w-full max-w-[1280px] flex-col justify-between gap-8 md:gap-24" +
        " mx-auto px-4 md:px-20"
      }
    >
      <div className={"flex grow flex-col gap-4 md:gap-14"}>
        <LandingNavBar />
        <div className={"my-auto flex flex-col gap-4 md:gap-8"}>
          <div
            className={
              "max-w-[800px] text-center text-[24px] font-bold md:text-start" +
              " text-neutral-300 md:text-[50px]"
            }
          >
            Discover the Thrill of Live Music in Cape Town with Giggity.
          </div>
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
  );
}
