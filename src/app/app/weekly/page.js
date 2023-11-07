import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getThisWeeksEvents } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";
import ListWrapper from "@/components/wrappers/listWrapper";

export default async function Page() {
  let data = await getThisWeeksEvents();

  return (
    <ListWrapper>
      <NavBack title={"Gigs This Week"} />
      <GigsWrapper data={data} title={"Gigs This Week"} />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    title: {
      default: "Giggity | Live music gigs this week.",
      template: "Giggity | %s ",
    },
    description:
      "Don't miss the beat in Cape Town this week with Giggity. From intimate jazz jams to electrifying rock concerts, find the best live music events and gigs happening in the city. Experience top artists and vibrant performances this week!",
    keywords: [
      "Cape Town live gigs this week",
      "weekly music events",
      "upcoming gigs Cape Town",
      "music scene this week",
      "top weekly concerts",
      "live shows Cape Town",
      "Giggity gig guide",
      "mid-week music gigs",
      "weekend concerts Cape Town",
      "discover local bands",
      "nightlife events Cape Town",
      "book live music tickets",
    ],
    themeColor: "#22c55e",
  };
}
