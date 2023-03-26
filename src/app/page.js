import { supabaseAdmin } from "../../lib/supabaseClient";
import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import SectionDivider from "@/components/divider/sectionDivider";

export const revalidate = 0;

async function getFutureGigs() {
  let { data } = await supabaseAdmin
    .from("Event")
    .select()
    .gt("date", new Date().toISOString())
    .order("date", { ascending: true });
  return data;
}

async function getPastGigs() {
  let { data } = await supabaseAdmin
    .from("Event")
    .select()
    .lt("date", new Date().toISOString())
    .order("date", { ascending: false });
  return data;
}

export default async function Home() {
  const futureGigs = await getFutureGigs();
  const pastGigs = await getPastGigs();
  return (
    <>
      <head>
        <meta property="og:title" content="Giggity" />
        <meta property="og:description" content="Find local gigs near you!" />
        <meta
          property="og:image"
          content="https://giggity-ruddy.vercel.app/api/og"
        />
        <meta
          property="twitter:image"
          content="https://giggity-ruddy.vercel.app/api/og"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <div className={"flex flex-wrap gap-4"}>
        <GigsWrapper data={futureGigs} />
        <SectionDivider title={"previous gigs"} />
        <GigsWrapper data={pastGigs} />
      </div>
    </>
  );
}
