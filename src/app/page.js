import { supabaseAdmin } from "../../lib/supabaseClient";
import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import SectionDivider from "@/components/divider/sectionDivider";

export async function generateMetadata() {
  return {
    openGraph: {
      title: "Giggity",
      description:
        "Discover your next favorite artist and catch live music events in your area with our gig-finding platform. Browse a diverse selection of local gigs and concerts, and sample the artists' music on Spotify before you go. Don't miss out on unforgettable experiences - start exploring today!",
      url: "https://giggity-ruddy.vercel.app",
      siteName: "Giggity",
      images: [
        {
          url: "https://giggity-ruddy.vercel.app/api/og",
          width: 1800,
          height: 1600,
          alt: "Discover your next favorite artist and catch live music events in your area with our gig-finding platform. Browse a diverse selection of local gigs and concerts, and sample the artists' music on Spotify before you go. Don't miss out on unforgettable experiences - start exploring today!",
        },
      ],
      locale: "en-US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Giggity",
      description:
        "Discover your next favorite artist and catch live music events in your area with our gig-finding platform. Browse a diverse selection of local gigs and concerts, and sample the artists' music on Spotify before you go. Don't miss out on unforgettable experiences - start exploring today!",
      // siteId: '1467726470533754880',
      creator: "@lukey_stephens",
      // creatorId: '1467726470533754880',
      images: ["https://giggity-ruddy.vercel.app/api/og"],
    },
  };
}

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
      <div className={"flex flex-wrap gap-4"}>
        <GigsWrapper data={futureGigs} />
        <SectionDivider title={"previous gigs"} />
        <GigsWrapper data={pastGigs} />
      </div>
    </>
  );
}
