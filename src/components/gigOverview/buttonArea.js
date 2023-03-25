import ItemButton from "@/components/card/itemButton";
import {
  CheckBadgeIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  TicketIcon,
} from "@heroicons/react/24/solid";

export default function ButtonArea({ ticket }) {
  return (
    <div
      className={
        "border-1 flex rounded-lg border border-neutral-700 px-4 py-6" +
        " item-center flex h-fit grow flex-wrap gap-4 bg-neutral-800" +
        " items-center"
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
