import GigWeeklyWrapper from "@/components/gigWrapper/gigWeeklyWrapper";
import { getFuture8, getPast8, getThisWeeksEvents } from "/lib/dataFetching";
import { SoftwareAppJsonLd } from "next-seo";

export const revalidate = 120;

export default async function Home() {
  const [weekGigs, futureGigs, pastGigs] = await Promise.all([
    getThisWeeksEvents(),
    getFuture8(),
    getPast8(),
  ]);

  return (
    <div
      className={
        "flex h-[92%] w-full flex-wrap gap-2 overflow-y-auto pt-2 md:h-full md:gap-4" +
        " md:overflow-y-visible md:p-2 md:px-4 md:pb-4 md:pt-0"
      }
    >
      {weekGigs.length > 0 && (
        <GigWeeklyWrapper
          data={weekGigs}
          title={"Events This Week"}
          link={"/app/weekly"}
          pos={1}
        />
      )}
      {futureGigs.length > 0 && (
        <GigWeeklyWrapper
          data={futureGigs}
          title={"Upcoming Events"}
          link={"/app/upcoming"}
          pos={2}
        />
      )}
      <GigWeeklyWrapper
        data={pastGigs}
        title={"Previous Events"}
        link={"/app/previous"}
        pos={3}
      />
      <SoftwareAppJsonLd
        useAppDir={true}
        name={"Giggity"}
        price={"0"}
        priceCurrency={null}
        operatingSystem="ANDROID"
        applicationCategory="GameApplication"
      />
    </div>
  );
}

export async function generateMetadata() {
  return {
    theme_color: "#171717",
  };
}
