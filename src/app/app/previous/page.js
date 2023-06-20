import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getPastAll } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";
import ListWrapper from "@/components/wrappers/listWrapper";

export default async function Page() {
  let data = await getPastAll();

  return (
    <ListWrapper>
      <NavBack title={"Previous Events"} />
      <GigsWrapper data={data} title={"Previous Events"} />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
