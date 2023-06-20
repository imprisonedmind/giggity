import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getThisWeeksEvents } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";
import ListWrapper from "@/components/wrappers/listWrapper";

export default async function Page() {
  let data = await getThisWeeksEvents();

  return (
    <ListWrapper>
      <NavBack title={"Gigs This Week"} />
      <GigsWrapper data={data} title={"Gigs This Week"} />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
