import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getThisWeeksEvents } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";

export default async function Page() {
  let data = await getThisWeeksEvents();

  return (
    <div className={"h-[92%] md:h-full"}>
      <NavBack title={"Gigs This Week"} />
      <GigsWrapper data={data} title={"Gigs This Week"} />;
    </div>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
