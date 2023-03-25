import "./globals.css";
import { QuickView } from "@/context/quickView";
import Navbar from "@/components/navigation/navbar";

export const metadata = {
  title: "Giggity",
  description: "Find local gis near you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"m-auto max-w-[1200px] bg-neutral-900 py-4 px-2 md:p-4"}>
        <QuickView>
          <Navbar />
          {children}
        </QuickView>
      </body>
    </html>
  );
}
