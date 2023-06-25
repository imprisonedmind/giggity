import { EventJsonLd } from "next-seo";
import { getArtistData } from "@/components/artists/artist";

export default async function EventSeo({ item }) {
  const data = await Promise.all(
    item.artists.map(async (a) => {
      return await getArtistData(a);
    })
  );

  return (
    <EventJsonLd
      useAppDir={true}
      name={item.title}
      startDate={item.date}
      endDate={item.date}
      location={{
        name: item.location,
        sameAs: `https://www.google.com/search?q=${item.address}`,
        address: {
          streetAddress: item.location,
        },
      }}
      url={`https://giggity.co.za/app/gig/${item.uid}`}
      images={[item.image]}
      description={item.description}
      offers={[
        {
          price: item.onlinePrice,
          priceCurrency: "ZAR",
          priceValidUntil: item.date,
          itemCondition: "https://schema.org/NewCondition",
          availability: "https://schema.org/InStock",
          url: `https://giggity.co.za/app/gig/${item.uid}`,
          seller: {
            name: "Giggity",
          },
          validFrom: item.date,
        },
      ]}
      performers={[
        data.map((x) => ({
          name: x.artistData.name,
        })),
      ]}
      eventStatus={"https://schema.org/EventScheduled"}
    />
  );
}
