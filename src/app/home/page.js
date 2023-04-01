import { supabaseAdmin } from "/lib/supabaseClient";
import GigWeeklyWrapper from "@/components/gigWrapper/gigWeeklyWrapper";

export const revalidate = 0;

// async function getFutureGigs(lat, long) {
//   let { data } = await supabaseAdmin.rpc("get_events_within_radius", {
//     lat: lat,
//     long: long,
//   });
//   // .gt("date", new Date().toISOString())
//   // .order("date", { ascending: true })
//   // .order("time", { ascending: true });
//   return data;
// }
const today = new Date();
const options = { timeZone: "Africa/Johannesburg" };
const todayString = today.toLocaleString("en-US", options);
const todayInJohannesburg = new Date(todayString);
const nextWeek = new Date(
  todayInJohannesburg.getTime() + 7 * 24 * 60 * 60 * 1000
);

export async function getThisWeeksEvents(lat, long) {
  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .gte("date", today.toISOString())
    .lt("date", nextWeek.toISOString())
    .order("date", { ascending: true })
    .order("time", { ascending: true });

  return data;
}

export async function getFutureGigs(lat, long) {
  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .gt("date", nextWeek.toISOString())
    .order("date", { ascending: true })
    .order("time", { ascending: true });
  return data;
}

export async function getPastGigs() {
  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .lt("date", new Date().toISOString())
    .order("date", { ascending: false })
    .order("time", { ascending: true });
  return data;
}

export default async function Home() {
  const thisWeekGiggs = await getThisWeeksEvents();
  const futureGigs = await getFutureGigs("-33.92622", "18.47954");
  const pastGigs = await getPastGigs();
  return (
    <>
      <main className={"flex flex-wrap gap-8"}>
        <GigWeeklyWrapper
          data={thisWeekGiggs}
          title={"Events This Week"}
          link={"/weekly"}
        />
        <GigWeeklyWrapper
          data={futureGigs}
          title={"Upcoming Events"}
          link={"/upcoming"}
        />
        <GigWeeklyWrapper
          data={pastGigs}
          title={"Previous Events"}
          link={"/previous"}
        />
      </main>
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
