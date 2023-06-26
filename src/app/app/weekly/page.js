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
      "Explore the exciting live music gigs happening this week on Giggity. Discover a diverse range of upcoming performances, talented artists, and unforgettable experiences. Don't miss out on the incredible live music events lined up for this week!",
    keywords: ["Giggity", "Gigs", "Weekly", "upcoming", "Music"],
    themeColor: "#22c55e",
  };
}
