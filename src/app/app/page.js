import GigWeeklyWrapper from "@/components/gigWrapper/gigWeeklyWrapper";
import { getFuture8, getPast8, getThisWeeksEvents } from "/lib/dataFetching";

export const revalidate = 0;

export default async function Home() {
  const [weekGigs, futureGigs, pastGigs] = await Promise.all([
    getThisWeeksEvents(),
    getFuture8(),
    getPast8(),
  ]);

  return (
    <div
      className={
        "flex h-[92%] flex-wrap gap-2 overflow-y-auto p-2 md:h-full md:gap-4 md:px-4" +
        " md:overflow-y-visible md:pb-4"
      }
    >
      {weekGigs.length > 0 && (
        <GigWeeklyWrapper
          data={weekGigs}
          title={"Events This Week"}
          link={"/app/weekly"}
        />
      )}
      <GigWeeklyWrapper
        data={futureGigs}
        title={"Upcoming Events"}
        link={"/app/upcoming"}
      />
      <GigWeeklyWrapper
        data={pastGigs}
        title={"Previous Events"}
        link={"/app/previous"}
      />
    </div>
  );
}
