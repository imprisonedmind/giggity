import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getFutureAll } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";
import ListWrapper from "@/components/wrappers/listWrapper";

export default async function Page() {
  let data = await getFutureAll();

  return (
    <ListWrapper>
      <NavBack title={"Upcoming Gigs"} />
      <GigsWrapper data={data} title={"Upcoming Events"} />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
