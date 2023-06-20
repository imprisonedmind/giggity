import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getPastAll } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";

export default async function Page() {
  let data = await getPastAll();

  return (
    <div className={"h-[92%] md:h-full"}>
      <NavBack title={"Previous Events"} />
      <GigsWrapper data={data} title={"Previous Events"} />;
    </div>
  );
}

export function generateMetadata() {
  return {
    themeColor: "#22c55e",
  };
}
