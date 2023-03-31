import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getPastGigs } from "@/app/home/page";

export default async function Page() {
  let data = await getPastGigs();

  return <GigsWrapper data={data} />;
}
