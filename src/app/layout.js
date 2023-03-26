import "./globals.css";
import { QuickView } from "@/context/quickView";
import Navbar from "@/components/navigation/navbar";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={"bg-neutral-900"}>
      <div className={"m-auto max-w-[1200px] py-4 px-2 md:p-4"}>
        <QuickView>
          <Navbar />
          {children}
        </QuickView>
      </div>
      <Analytics />
    </html>
  );
}
