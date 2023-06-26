import LandingFooterElement from "@/components/landing/footer/landingFooterElement";
import LandingFooterItem from "@/components/landing/footer/landingFooterItem";
import Logo from "@/components/navigation/logo";
import { copyRightDate } from "../../../../lib/utilities";

export default function LandingFooter() {
  return (
    <div
      className={
        "hidden w-full border-t border-neutral-700 p-4 py-8 text-neutral-500 md:inline-block"
      }
    >
      <div
        className={
          " mx-auto flex max-w-[1280px] flex-wrap justify-between gap-8 md:gap-0" +
          " md:p-10 md:py-20 lg:p-20"
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
          <LandingFooterItem
            title={"Supabase"}
            link={"https://supabase.com/"}
          />
          <LandingFooterItem
            title={"Cloud Vision"}
            link={"https://cloud.google.com/vision"}
          />
          <LandingFooterItem
            title={"Open Api gpt-3"}
            link={"https://openai.com/gpt-4"}
          />
        </LandingFooterElement>
        <LandingFooterElement title={"Information"}>
          <LandingFooterItem
            title={"Luke Stephens"}
            link={"https://bento.me/lukey"}
          />
          <LandingFooterItem
            title={"Support this project"}
            link={"https://www.buymeacoffee.com/lukestephens"}
          />
          <LandingFooterItem title={"Changelogs"} link={"/app/changelogs"} />
        </LandingFooterElement>
        <LandingFooterElement title={"Download"}>
          <LandingFooterItem title={"Desktop"} link={"/"} />
          <LandingFooterItem title={"Android"} link={"/"} />
          <LandingFooterItem title={"IOS"} link={"/"} />
        </LandingFooterElement>
      </div>
    </div>
  );
}
