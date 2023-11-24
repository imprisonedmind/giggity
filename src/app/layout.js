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
  title: "Giggity",
  name: "Giggity",
  description:
    "Connect with Cape Town's electric music vibe through Giggity. Immerse yourself in live gigs, explore top venues like District and Surfa Rosa, and experience the city's best concerts and events.",
  keywords: [
    "Cape Town live music",
    "Giggity events guide",
    "music gigs Cape Town",
    "concert tickets Cape Town",
    "live performances Cape Town",
    "local bands",
    "Quicket tickets",
    "upcoming gigs District",
    "Surfa Rosa events",
    "Let's Get Local",
  ],
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
      "Your gateway to Cape Town's rich musical tapestry. Giggity provides a platform to find and book tickets for the latest gigs, showcasing everything from underground rock to mainstream jazz.",
    url: "htttps://giggity.co.za",
    siteName: "Giggity",
    images: [
      {
        url: "htttps://giggity.co.za/api/og",
        width: 1800,
        height: 1600,
        alt: "Explore Cape Town's Dynamic Music Scene with Giggity",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giggity",
    description:
      "Dive into the heart of Cape Town's music scene with Giggity. From jazz nights to rock concerts, find and book the most exciting gigs in town. Join the rhythm of the city today.",
    creator: "@lukey_stephens",
    images: ["htttps://giggity.co.za/api/og"],
  },
};
