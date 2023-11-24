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

export const onboardingMetadata = {
  title: "Giggity Onboarding - Get Started with Cape Town's Music Scene",
  description:
    "Begin your journey with Giggity's seamless onboarding process. Dive into Cape Town's vibrant music scene and personalize your experience. Explore live gigs, discover top venues like District and Surfa Rosa, and tailor your preferences to unlock the best concerts and events in the city.",
  keywords: [
    "Cape Town live music",
    "Giggity onboarding",
    "music gigs Cape Town",
    "concert tickets Cape Town",
    "live performances Cape Town",
    "local bands",
    "Quicket tickets",
    "upcoming gigs District",
    "Surfa Rosa events",
    "Let's Get Local",
    "music scene exploration",
    "personalized music experience",
  ],
};
