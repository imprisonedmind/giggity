import ImageDescriptionHeader from "@/components/addGig/imageDescriptionHeader";
import {useState} from "react";
import AddGigDetails from "@/components/addGig/addGigDetails";
import GetArtists from "@/components/addGig/getArtists";

export default function AddingInfo({imgUrl, description}) {
  const [showInputs, setShowInputs] = useState(true)
  const [artists, setArtists] = useState([])

  if (imgUrl || description) {
    return <div className={"flex flex-col gap-2 items-center"}>
      {showInputs && (
          <>
            <ImageDescriptionHeader imgUrl={imgUrl} description={description}/>
            <AddGigDetails imgUrl={imgUrl} setShowInputs={setShowInputs}
                           artists={artists} setArtists={setArtists}/>
          </>
      )}

      {!showInputs && (
          <GetArtists artists={artists}/>
      )}


    </div>
  } else return null
}