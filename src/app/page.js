import FirstSection from "@/components/landing/firstSection/firstSection";
import SecondSection from "@/components/landing/secondSection/secondSection";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <main>
      <FirstSection />
      <SecondSection />
      {/*<LandingFooter />*/}
    </main>
  );
}
