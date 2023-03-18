import Image from "next/image";
import AddSpotifyArtists from "@/components/addGig/addSpotifyArtists";

export default function AddingInfo({imgUrl, description}) {
  if (imgUrl || description) {
    return <div className={"flex flex-col gap-2 items-center"}>

      <div className={"flex flex-nowrap gap-4 w-full"}>
        <div className={'relative w-full aspect-square overflow-hidden ' +
            ' m-auto rounded-lg h-[300px]'}>
          <Image src={imgUrl} alt={"test"} fill={true} className={"object-cover"}/>
        </div>
        <div className={'flex flex-col relative w-full gap-2'}>
          <p className={"font-bold"}>Description</p>
          <textarea value={description}
                    className={"h-full bg-neutral-900 p-2 rounded-md text-sm" +
                        " focus:outline-none"}/>
        </div>
      </div>

      <div className={"w-full grow border border-1 border-neutral-700"}/>

      <AddSpotifyArtists imgUrl={imgUrl}/>

    </div>
  } else return null
}