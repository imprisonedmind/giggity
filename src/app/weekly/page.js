import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getThisWeeksEvents } from "../../../lib/dataFetching";

export default async function Page() {
  let data = await getThisWeeksEvents();

  return <GigsWrapper data={data} />;
}
