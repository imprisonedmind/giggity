import Link from "next/link";

export default function ItemButton({title, link, colour, textColour, hover, icon}) {
  return <Link href={link}
               className={`${colour} ${textColour} ${hover} 
      text-center flex flex-nowrap py-1 px-2 gap-1 items-center rounded-lg mt-4
       cursor-pointer text-sm hover:shadow-md`}>
    {icon && <div className={"h-4 w-4"}>{icon}</div>}
    <p className={"m-auto"}>{title}</p>
  </Link>
}