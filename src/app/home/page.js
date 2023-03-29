import { supabaseAdmin } from "/lib/supabaseClient";
import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import SectionDivider from "@/components/divider/sectionDivider";

export const revalidate = 60;

async function getFutureGigs() {
  let { data } = await supabaseAdmin
    .from("Event")
    .select()
    .gt("date", new Date().toISOString())
    .order("date", { ascending: true })
    .order("time", { ascending: true });
  return data;
}

async function getPastGigs() {
  let { data } = await supabaseAdmin
    .from("Event")
    .select()
    .lt("date", new Date().toISOString())
    .order("date", { ascending: false })
    .order("time", { ascending: true });
  return data;
}

export default async function Home() {
  const futureGigs = await getFutureGigs();
  const pastGigs = await getPastGigs();
  return (
    <>
      <div className={"flex flex-wrap gap-4"}>
        <GigsWrapper data={futureGigs} />
        <SectionDivider title={"previous gigs"} />
        <GigsWrapper data={pastGigs} m={"mb-8"} />
      </div>
    </>
  );
}

export async function generateMetadata() {
  return {
    openGraph: {
      title: "Giggity",
      description:
        "Find your favorite artist & local gigs with our platform. Browse diverse concerts, sample music on Spotify & don't miss unforgettable experiences. Start exploring now!",
      url: "https://giggity-ruddy.vercel.app",
      siteName: "Giggity",
      images: [
        {
          url: "https://giggity-ruddy.vercel.app/api/og",
          width: 1800,
          height: 1600,
          alt: "Find your favorite artist & local gigs with our platform. Browse diverse concerts, sample music on Spotify & don't miss unforgettable experiences. Start exploring now!",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Giggity",
      description:
        "Find your favorite artist & local gigs with our platform. Browse diverse concerts, sample music on Spotify & don't miss unforgettable experiences. Start exploring now!",
      // siteId: '1467726470533754880',
      creator: "@lukey_stephens",
      // creatorId: '1467726470533754880',
      images: ["https://giggity-ruddy.vercel.app/api/og"],
    },
  };
}
