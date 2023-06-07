import { AddGigContextProvider } from "@/context/addGig";
import { QuickViewProvider } from "@/context/quickView";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/footer/footer";
import { Analytics } from "@vercel/analytics/react";
import BottomBar from "@/components/navigation/bottomBar";
import SupabaseProvider from "@/context/auth";

export default function AppLayout({ children }) {
  return (
    <div
      className={
        "mx-auto flex h-[100svh] w-[100svw] max-w-[1200px] flex-col md:h-full"
      }
    >
      <SupabaseProvider>
        <AddGigContextProvider>
          <QuickViewProvider>
            <Navbar />
            {children}
            <Footer />
            <Analytics />
            <BottomBar />
          </QuickViewProvider>
        </AddGigContextProvider>
      </SupabaseProvider>
    </div>
  );
}
