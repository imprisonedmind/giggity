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
      <SpotifySmallItem src={lung} alt={"Black Lung Spotify"} />
      <SpotifySmallItem src={consti} alt={"Constellatia Spotify"} />
      <SpotifySmallItem src={math} alt={"Black Math Spotify"} />
      <SpotifySmallItem src={tough} alt={"Tough Guy Spotify"} />
      <SpotifySmallItem src={myn} alt={"Yndian Mynah Spotify"} />
      <SpotifySmallItem src={elle} alt={"Elle E Spotify"} />
      <SpotifySmallItem src={cis} alt={"Cistamatic Spotify"} />
      <SpotifySmallItem src={mouse} alt={"Mouse Spotify"} />
      <SpotifySmallItem src={danger} alt={"Dangerfields Spotify"} />
    </div>
  );
}
