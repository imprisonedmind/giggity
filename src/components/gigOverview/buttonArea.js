"use client";
import ItemButton from "@/components/card/itemButton";
import { ShareIcon, TicketIcon } from "@heroicons/react/24/solid";
import { copyToClipboard } from "../../../lib/utilities";

export default function ButtonArea({ ticket, title }) {
  const share = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Giggity",
          text: `Check out this Gig: ${title}`,
          url: window.location.href,
        })
        .then(() => console.log("Shared successfully."))
        .catch((error) => console.log("Error sharing:", error));
    } else {
      copyToClipboard();
    }
  };

  return (
    <div
      className={
        "border-1 item-center flex rounded-lg border border-neutral-700 px-4 py-6" +
        " h-fit grow flex-wrap gap-4 bg-neutral-800 md:w-fit md:grow-0"
      }
    >
      {ticket && (
        <ItemButton
          title={"Tickets"}
          link={ticket}
          textColour={"text-green-500"}
          colour={"bg-green-500/10 border-green-500"}
          icon={<TicketIcon />}
        />
      )}
      <ItemButton
        title={"Share"}
        callback={() => share()}
        textColour={"text-blue-500"}
        colour={"bg-blue-500/10 border-blue-500"}
        icon={<ShareIcon />}
      />

      {/*<ItemButton*/}
      {/*    title={"I'm Going - 25"}*/}
      {/*    link={"/test"}*/}
      {/*    textColour={"text-blue-500 border-blue-500"}*/}
      {/*    colour={"bg-blue-500/10"}*/}
      {/*    icon={<CheckBadgeIcon/>}/>*/}
      {/*<ItemButton*/}
      {/*    title={"Like - 30"}*/}
      {/*    link={"/test"}*/}
      {/*    textColour={"text-pink-500 border-pink-500"}*/}
      {/*    colour={"bg-pink-500/10"}*/}
      {/*    icon={<HandThumbUpIcon/>}/>*/}
      {/*<ItemButton*/}
      {/*    title={"Dislike - 3"}*/}
      {/*    link={"/test"}*/}
      {/*    textColour={"text-red-500 border-red-500"}*/}
      {/*    colour={"bg-red-500/10"}*/}
      {/*    icon={<HandThumbDownIcon/>}/>*/}
    </div>
  );
}
