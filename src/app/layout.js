import "./globals.css";
import { Inter } from "next/font/google";
import SupabaseProvider from "@/context/auth";
import LandingFooter from "@/components/landing/footer/landingFooter";
import Script from "next/script";

export const revalidate = 120;

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
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-4BJNGWR6CP" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-4BJNGWR6CP');
        `}
      </Script>
    </html>
  );
}

export const metadata = {
  title: {
    default: "Giggity",
    template: "Giggity | %s ",
  },
  description:
    "Discover Cape Town's Vibrant Music Scene with Giggity! Find Local Music Gigs, Concerts, and Events. Don't Miss Unforgettable Live Performances and Talented Artists. Explore Now!",
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
      "Discover Cape Town's Vibrant Music Scene with Giggity! Find Local Music Gigs, Concerts, and Events. Don't Miss Unforgettable Live Performances and Talented Artists. Explore Now!",
    url: "htttps://giggity.co.za",
    siteName: "Giggity",
    images: [
      {
        url: "htttps://giggity.co.za/api/og",
        width: 1800,
        height: 1600,
        alt: "Discover Cape Town's Vibrant Music Scene with Giggity! Find Local Music Gigs, Concerts, and Events. Don't Miss Unforgettable Live Performances and Talented Artists. Explore Now!",
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
