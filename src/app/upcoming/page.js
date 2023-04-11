import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getFutureAll } from "../../../lib/dataFetching";

export default async function Page() {
  let data = await getFutureAll();

  return <GigsWrapper data={data} />;
}
