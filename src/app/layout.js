import "./globals.css";
import { Inter } from "next/font/google";
import SupabaseProvider from "@/context/auth";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
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
      </body>
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
  keywords: ["Giggity", "District", "Surfa Rosa", "Cape Town", "Gigs"],
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
};
