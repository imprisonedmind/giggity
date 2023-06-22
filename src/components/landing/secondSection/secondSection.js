import BentoCard from "@/components/landing/secondSection/bentoCard";
import spotify from "../../../../public/logos/spotify.png";
import Image from "next/image";
import BentoSpotifyStream from "@/components/landing/secondSection/bentoSpotifyStream";
import BentoEveryonePlayed from "@/components/landing/secondSection/bentoEveryonePlayed";
import BentoStreamingIcons from "@/components/landing/secondSection/bentoStreamingIcons";
import SectionHeader from "@/components/landing/sectionHeader";

export default function SecondSection() {
  const spotifyLogo = (
    <Image
      className={"h-10 w-10 rounded-lg"}
      src={spotify}
      alt={"Spotify logo"}
    />
  );

  return (
    <div
      className={
        "relative z-40 h-fit w-full border-t border-neutral-600 bg-neutral-900"
      }
    >
      <div
        className={
          "mx-auto flex w-full max-w-[1280px] flex-col gap-8 p-4 py-8  md:gap-10" +
          " md:px-20 md:py-20"
        }
      >
        <SectionHeader title={"Explore a world of local artists!"} />
        <div className={"grid grid-cols-1 gap-4 md:grid-cols-2"}>
          <BentoCard
            icon={spotifyLogo}
            title={"Seamless Spotify Integration"}
            description={"Find artists & play their music from giggity"}
            content={<BentoSpotifyStream />}
          />
          <BentoCard
            title={"Lists of Artists & Bands"}
            description={"See everybody who has played in shows"}
            content={<BentoEveryonePlayed />}
          />
          <BentoCard
            large={true}
            title={"More coming soon!"}
            description={
              "We are planning to add more music exploration services in the future"
            }
            content={<BentoStreamingIcons />}
          />
        </div>
      </div>
    </div>
  );
}
