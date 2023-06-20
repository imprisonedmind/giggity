import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getPastAll } from "/lib/dataFetching";

export default async function Page() {
  let data = await getPastAll();

  return <GigsWrapper data={data} title={"Previous Events"} />;
}
