import GigWeeklyWrapper from "@/components/gigWrapper/gigWeeklyWrapper";
import { getFuture8, getPast8, getThisWeeksEvents } from "/lib/dataFetching";

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
        />
      )}
      {futureGigs.length > 0 && (
        <GigWeeklyWrapper
          data={futureGigs}
          title={"Upcoming Events"}
          link={"/app/upcoming"}
        />
      )}
      <GigWeeklyWrapper
        data={pastGigs}
        title={"Previous Events"}
        link={"/app/previous"}
      />
    </div>
  );
}