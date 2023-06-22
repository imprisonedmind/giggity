import { AddGigContextProvider } from "@/context/addGig";
import { QuickViewProvider } from "@/context/quickView";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react";
import BottomBar from "@/components/navigation/bottomBar";

export default function AppLayout({ children }) {
  return (
    <div
      className={
        "mx-auto flex h-[100svh] w-full max-w-[1280px] flex-col md:h-full"
      }
    >
      <AddGigContextProvider>
        <QuickViewProvider>
          <Navbar />
          {children}
          <Footer />
          <Analytics />
          <BottomBar />
        </QuickViewProvider>
      </AddGigContextProvider>
    </div>
  );
}
