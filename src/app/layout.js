import "./globals.css";
import { Inter } from "next/font/google";
import SupabaseProvider from "@/context/auth";
import LandingFooter from "@/components/landing/footer/landingFooter";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`bg-neutral-900 ${inter.className}`}>
      <body
        className={
          "flex h-[100svh] w-[100svw] flex-col overflow-x-hidden md:h-full"
        }
      >
        <SupabaseProvider>{children}</SupabaseProvider>
        <LandingFooter />
      </body>
      {/*GOOGLE TAG*/}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-ZCBBV97YDW" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-ZCBBV97YDW');
        `}
      </Script>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Giggity | Find live music gigs in Cape Town.",
    template: "Giggity | %s ",
  },
  description:
    "Find your favorite artist & local gigs with our platform. Browse diverse concerts, sample music on Spotify & don't miss unforgettable experiences. Start exploring now!",
  keywords: ["Giggity", "Gigs", "District", "Surfa Rosa", "Cape Town"],
  generator: "Next.js",
  applicationName: "Giggity",
  robots: {
    index: true,
    follow: true,
  },
  google: {
    name: "google-site-verification",
    content: "Z7GA_0F_eEU5p3OX3vR2C95vrR8qXKHIhd-DKazVm8A",
  },
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/icon-512x512.png",
  },
  themeColor: "#171717",
  backgroundColor: "#171717",
  openGraph: {
    title: "Giggity",
    description:
      "Discover and explore the vibrant music scene in Cape Town with Giggity! Find the hottest local music gigs, concerts, and events near you. Get ready to immerse yourself in the rhythm and energy of Cape Town's diverse music culture. Don't miss out on the unforgettable live performances and talented artists. Experience the magic of Giggity and uncover the best local music gigs in Cape Town today!",
    url: "htttps://giggity.co.za",
    siteName: "Giggity",
    images: [
      {
        url: "htttps://giggity.co.za/api/og",
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
    images: ["htttps://giggity.co.za/api/og"],
  },
};
