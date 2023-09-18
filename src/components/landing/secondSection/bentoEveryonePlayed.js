import Image from "next/image";
import lung from "public/bands/blackLung.png";
import consti from "public/bands/const.png";
import math from "public/bands/math.png";
import tough from "public/bands/tough.png";
import myn from "public/bands/myn.png";
import elle from "public/bands/elle.png";
import cis from "public/bands/cis.png";
import mouse from "public/bands/mouse.png";
import danger from "public/bands/danger.png";
import SpotifySmallItem from "@/components/landing/secondSection/spotifySmallItem";

export default function BentoEveryonePlayed() {
  return (
    <div className="grid grid-cols-3 grid-rows-3 pb-4">
      <SpotifySmallItem
        src={lung}
        alt={"Black Lung - Giggity, Surfa Rosa, District"}
      />
      <SpotifySmallItem
        src={consti}
        alt={"Constellatia - Giggity, Surfa Rosa, District"}
      />
      <SpotifySmallItem
        src={math}
        alt={"Black Math - Giggity, Surfa Rosa, District"}
      />
      <SpotifySmallItem
        src={tough}
        alt={"Tough Guy - Giggity, Surfa Rosa, District"}
      />
      <SpotifySmallItem
        src={myn}
        alt={"Yndian Mynah - Giggity, Surfa Rosa, District"}
      />
      <SpotifySmallItem
        src={elle}
        alt={"Elle E - Giggity, Surfa Rosa, District"}
      />
      <SpotifySmallItem
        src={cis}
        alt={"Cistamatic - Giggity, Surfa Rosa, District"}
      />
      <SpotifySmallItem
        src={mouse}
        alt={"Mouse - Giggity, Surfa Rosa, District"}
      />
      <SpotifySmallItem
        src={danger}
        alt={"Dangerfields - Giggity, Surfa Rosa, District"}
      />
    </div>
  );
}
