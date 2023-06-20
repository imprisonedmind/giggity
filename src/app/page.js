import TempReRoute from "@/components/tempReRoute";

export default function Page() {
  return (
    <main>
      <TempReRoute />
    </main>
  );
}

export async function generateMetadata() {
  return {
    openGraph: {
      title: "Giggity",
      description:
        "Discover and explore the vibrant music scene in Cape Town with Giggity! Find the hottest local music gigs, concerts, and events near you. Get ready to immerse yourself in the rhythm and energy of Cape Town's diverse music culture. Don't miss out on the unforgettable live performances and talented artists. Experience the magic of Giggity and uncover the best local music gigs in Cape Town today!",
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
