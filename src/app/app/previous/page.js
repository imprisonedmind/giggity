import GigsWrapper from "@/components/gigWrapper/gigsWrapper";
import { getPastAll } from "/lib/dataFetching";
import NavBack from "@/components/gigOverview/navBack";
import ListWrapper from "@/components/wrappers/listWrapper";

export default async function Page() {
  let data = await getPastAll();

  return (
    <ListWrapper>
      <NavBack title={"Previous Events"} />
      <GigsWrapper data={data} title={"Previous Events"} />
    </ListWrapper>
  );
}

export function generateMetadata() {
  return {
    title: {
      default: "Giggity | Previous live music gigs.",
      template: "Giggity | %s ",
    },
    description:
      "Explore the exciting memories from previous live music gigs in Cape Town. Relive the energy, performances, and unforgettable moments from past events hosted on Giggity.",
    keywords: ["Giggity", "Gigs", "Previous", "Live", "Music"],
    themeColor: "#22c55e",
  };
}
