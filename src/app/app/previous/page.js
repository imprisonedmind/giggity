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
    title: "Previous live music gigs",
    description:
      "Dive into Giggity's archives for a nostalgic journey through Cape Town's most memorable music events. Revisit the highlights and legacy of the city's celebrated live gigs.",
    keywords: [
      "Cape Town past music events",
      "historical live gigs",
      "memorable concerts Cape Town",
      "archived music performances",
      "Giggity gig history",
      "popular past gigs",
      "music event archives",
      "legendary live shows Cape Town",
      "previous music festivals",
      "retrospective music experience",
      "historical music scene Cape Town",
    ],
    themeColor: "#22c55e",
  };
}
