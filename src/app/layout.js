import "./globals.css";
import { QuickView } from "@/context/quickView";
import Navbar from "@/components/navigation/navbar";
import Head from "next/head";

// export const metadata = {
//   title: "Giggity",
//   description: "Find local gigs near you!",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Giggity</title>
        <desc>Find local gigs near you!</desc>
        <meta property={"og:image"} content={"/api/og"} />
      </head>
      <body className={"m-auto max-w-[1200px] bg-neutral-900 py-4 px-2 md:p-4"}>
        <QuickView>
          <Navbar />
          {children}
        </QuickView>
      </body>
    </html>
  );
}
