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
    title: "Upcoming live music gigs",
    description:
      "Join the thrill of live concerts with Giggity's curated list of upcoming gigs in Cape Town. From indie bands to jazz nights, find your perfect music event and immerse yourself in the vibrant Cape Town music scene.",
    keywords: [
      "upcoming gigs Cape Town",
      "live music events Cape Town",
      "best concert tickets",
      "Cape Town music scene",
      "indie bands live shows",
      "jazz music events",
      "exclusive music performances",
      "Giggity event listings",
      "local gigs guide",
      "live entertainment Cape Town",
    ],
    themeColor: "#22c55e",
  };
}
