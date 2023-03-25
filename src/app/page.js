import { supabaseAdmin } from "../../lib/supabaseClient";
import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import SectionDivider from "@/components/divider/sectionDivider";

export const revalidate = 0;

async function getFutureGigs() {
  const headers = { "Cache-Control": "no-cache" };
  const { data } = await supabaseAdmin
    .from("Event")
    .select()
    .gt("date", new Date().toISOString())
    .headers(headers);
  return data;
}

async function getPastGigs() {
  const headers = { "Cache-Control": "no-cache" };
  const { data } = await supabaseAdmin
    .from("Event")
    .select()
    .lt("date", new Date().toISOString())
    .headers(headers);
  return data;
}

export default async function Home() {
  const futureGigs = await getFutureGigs();
  const pastGigs = await getPastGigs();
  return (
    <main className={"flex flex-wrap gap-4"}>
      <GigsWrapper data={futureGigs} />
      <SectionDivider title={"previous gigs"} />
      <GigsWrapper data={pastGigs} />
    </main>
  );
}
