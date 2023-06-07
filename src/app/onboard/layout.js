import SupabaseProvider from "@/context/auth";
import OnboardLeftPanel from "@/components/onboard/leftPanel";
import { Suspense } from "react";
import LeftPanelLoading from "@/components/loading/leftPanel";
import LogoName from "@/components/onboard/logoName";
import TermsAndConditions from "@/components/onboard/termsAndConditions";

export default function LoginLayout({ children }) {
  return (
    <SupabaseProvider>
      <div className="flex h-screen flex-nowrap items-center justify-center gap-4 p-4">
        <Suspense fallback={<LeftPanelLoading />}>
          <OnboardLeftPanel />
        </Suspense>
        <div
          className={
            " flex h-full w-full rounded-xl border border-neutral-700 md:w-2/5" +
            " flex-col justify-between bg-neutral-800 p-4"
          }
        >
          <div className={"flex flex-col gap-4"}>
            <LogoName />
            {children}
          </div>

          <TermsAndConditions />
        </div>
      </div>
    </SupabaseProvider>
  );
}
