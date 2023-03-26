import "./globals.css";
import { QuickView } from "@/context/quickView";
import Navbar from "@/components/navigation/navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: {
    default: "Giggity | Find a gig!",
    template: "Giggity | %s ",
  },
  description:
    "Discover your next favorite artist and catch live music events in your area with our gig-finding platform. Browse a diverse selection of local gigs and concerts, and sample the artists' music on Spotify before you go. Don't miss out on unforgettable experiences - start exploring today!",
  keywords: [
    "Giggity",
    "Disctrict",
    "Surfa Rosa",
    "Foul Play",
    "Mosh Responsibly",
    "Fuzz Nights",
    "Psych Night",
    "Evol",
    "Colourbox Studios",
  ],
  generator: "Next.js",
  applicationName: "Giggity",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"bg-neutral-900"}>
      <body className={"m-auto max-w-[1200px] py-4 px-2 md:p-4"}>
        <QuickView>
          <Navbar />
          {children}
          <Analytics />
        </QuickView>
      </body>
    </html>
  );
}
