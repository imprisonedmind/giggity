import GigWeeklyWrapper from "@/components/gigWrapper/gigWeeklyWrapper";
import { getFuture8, getPast8, getThisWeeksEvents } from "lib/dataFetching";

export const revalidate = 0;

export default async function Page() {
  const [weekGigs, futureGigs, pastGigs] = await Promise.all([
    getThisWeeksEvents(),
    getFuture8(),
    getPast8(),
  ]);

  return (
    <main className={"flex flex-wrap gap-2 md:gap-4"}>
      {weekGigs.length > 0 && (
        <GigWeeklyWrapper
          data={weekGigs}
          title={"Events This Week"}
          link={"/weekly"}
        />
      )}
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
      creator: "@lukey_stephens",
      images: ["https://giggity-ruddy.vercel.app/api/og"],
    },
  };
}
