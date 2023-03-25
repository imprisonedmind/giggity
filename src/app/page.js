import { supabaseAdmin } from "../../lib/supabaseClient";
import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import SectionDivider from "@/components/divider/sectionDivider";
import Head from "next/head";

export const revalidate = 0;

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
    <>
      <Head>
        <meta property="og:title" content="Giggity" />
        <meta property="og:image" content="/api/og" />
        <meta property="og:description" content="Find local gigs near you!" />
      </Head>
      <head>
        <title>Giggity</title>
        <meta name="description" content="Find local gigs near you!" />
        <meta property={"og:image"} content={"/api/og"} />
      </head>
      <div className={"flex flex-wrap gap-4"}>
        <GigsWrapper data={futureGigs} />
        <SectionDivider title={"previous gigs"} />
        <GigsWrapper data={pastGigs} />
      </div>
    </>
  );
}
