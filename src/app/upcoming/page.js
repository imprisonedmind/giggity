import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getFutureGigs } from "@/app/home/page";

export default async function Page() {
  let data = await getFutureGigs();

  return <GigsWrapper data={data} />;
}
