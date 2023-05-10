import "./globals.css";
import { QuickViewProvider } from "@/context/quickView";
import Navbar from "@/components/navigation/navbar";
import { Analytics } from "@vercel/analytics/react";
import Footer from "@/components/footer/footer";
import { AddGigContextProvider } from "@/context/addGig";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"bg-neutral-900"}>
      <body className={"relative m-auto max-w-[1200px] md:p-4 lg:px-2 lg:pt-4"}>
        <AddGigContextProvider>
          <QuickViewProvider>
            <Navbar />
            {children}
            <Analytics />
            <Footer />
          </QuickViewProvider>
        </AddGigContextProvider>
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
  themeColor: "#131313",
};
