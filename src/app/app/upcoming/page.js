import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getFutureAll } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";
import ListWrapper from "@/components/wrappers/listWrapper";

export default async function Page() {
  let data = await getFutureAll();

  return (
    <ListWrapper>
      <NavBack title={"Upcoming Gigs"} />
      <GigsWrapper data={data} title={"Upcoming Events"} />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    title: {
      default: "Giggity | Upcoming live music gigs.",
      template: "Giggity | %s ",
    },
    description:
      "Discover upcoming live music gigs in Cape Town. Explore a vibrant lineup of upcoming performances, talented artists, and unforgettable experiences at Giggity. Don't miss out on the hottest live music events in town!",
    keywords: ["Giggity", "Gigs", "Previous", "Live", "Music"],
    themeColor: "#22c55e",
  };
}
