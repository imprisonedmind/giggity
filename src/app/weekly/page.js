import { getThisWeeksEvents } from "@/app/home/page";
import GigsWrapper from "@/components/gigWrapper/gigsWrapper";

export default async function Page() {
  let data = await getThisWeeksEvents();

  return <GigsWrapper data={data} />;
}
