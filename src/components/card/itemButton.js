import Link from "next/link";

export default function ItemButton({title, link, colour, textColour, hover, icon}) {
  return <Link href={link} className={`${colour} ${textColour} ${hover}
      text-center flex flex-nowrap py-1 px-2 gap-2 items-center rounded-lg h-fit
       cursor-pointer text-sm font-medium uppercase hover:shadow-md border border-[0.6px]`}>
    {icon && <div className={"h-4 w-4"}>{icon}</div>}
    <p className={"m-auto"}>{title}</p>
  </Link>
}