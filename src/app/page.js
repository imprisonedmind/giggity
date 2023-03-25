import { supabaseAdmin } from "../../lib/supabaseClient";
import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import SectionDivider from "@/components/divider/sectionDivider";

async function getFutureGigs() {
  let { data } = await supabaseAdmin
    .from("Event")
    .select()
    .gt("date", new Date().toISOString());
  return data;
}

async function getPastGigs() {
  let { data } = await supabaseAdmin
    .from("Event")
    .select()
    .lt("date", new Date().toISOString());
  return data;
}

export default async function Home() {
  const futureGigs = await getFutureGigs();
  const pastGigs = await getPastGigs();
  return (
    <main className={"flex flex-wrap gap-4"}>
      <GigsWrapper data={futureGigs} />
      <SectionDivider title={"past gigs"} />
      <GigsWrapper data={pastGigs} />
    </main>
  );
}
