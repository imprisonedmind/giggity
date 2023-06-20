import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getFutureAll } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";

export default async function Page() {
  let data = await getFutureAll();

  return (
    <div className={"h-[92%] md:h-full"}>
      <NavBack title={"Upcoming Gigs"} />
      <GigsWrapper data={data} title={"Upcoming Events"} />;
    </div>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
