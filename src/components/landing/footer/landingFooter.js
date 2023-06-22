import Link from "next/link";
import LandingFooterElement from "@/components/landing/footer/landingFooterElement";
import LandingFooterItem from "@/components/landing/footer/landingFooterItem";
import Logo from "@/components/navigation/logo";
import { copyRightDate } from "../../../../lib/utilities";

export default function LandingFooter() {
  return (
    <div
      className={
        "flex max-w-[1280px] flex-wrap justify-between gap-8 border-t md:gap-0" +
        " border-neutral-700 p-4 text-neutral-500 md:p-20"
      }
    >
      <div className={"pr-40 md:pr-0"}>
        <LandingFooterElement logo={<Logo />}>
          <LandingFooterItem
            copyright={`© 2023 - ${copyRightDate.getFullYear()}`}
            link={"/"}
          />
        </LandingFooterElement>
      </div>
      <LandingFooterElement title={"Technology"}>
        <LandingFooterItem title={"NextJs"} link={"https://nextjs.org/"} />
        <LandingFooterItem title={"Vercel"} link={"https://vercel.com/"} />
        <LandingFooterItem title={"Supabase"} link={"https://supabase.com/"} />
        <LandingFooterItem
          title={"Cloud Vision"}
          link={"https://cloud.google.com/vision"}
        />
        <LandingFooterItem
          title={"Open Api gpt-3"}
          link={"https://openai.com/gpt-4"}
        />
      </LandingFooterElement>
      <LandingFooterElement title={"Creator"}>
        <LandingFooterItem
          title={"Luke Stephens"}
          link={"https://bento.me/lukey"}
        />
        <LandingFooterItem
          title={"Buy me a coffee"}
          link={"https://www.buymeacoffee.com/lukestephens"}
        />
      </LandingFooterElement>
      <LandingFooterElement title={"Download"}>
        <LandingFooterItem title={"Desktop"} link={"/"} />
        <LandingFooterItem title={"Android"} link={"/"} />
        <LandingFooterItem title={"IOS"} link={"/"} />
      </LandingFooterElement>
    </div>
  );
}
