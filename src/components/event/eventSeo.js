import { EventJsonLd } from "next-seo";
import { getArtistData } from "@/components/artists/artist";

export default async function EventSeo({ item }) {
  const data = await Promise.all(
    item.artists.map(async (a) => {
      return await getArtistData(a);
    })
  );

  console.log("---->", data);

  return (
    <EventJsonLd
      useAppDir={true}
      name={item.title}
      startDate={item.date}
      endDate={item.date}
      location={{
        name: item.location,
        sameAs: `https://www.google.com/search?q=${item.location}`,
        address: {
          streetAddress: item.location,
        },
      }}
      url={`https://giggity.co.za/app/gig/${item.uid}`}
      images={[item.img]}
      description={item.description}
      offers={[
        {
          price: item.price,
          priceCurrency: "ZAR",
          priceValidUntil: "2020-11-05",
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          url: `https://giggity.co.za/app/gig/${item.uid}`,
          seller: {
            name: "Giggity",
          },
          validFrom: item.date,
        },
      ]}
      performers={data.map((x) => ({ name: x.name }))}
      eventStatus={"https://schema.org/EventScheduled"}
    />
  );
}
