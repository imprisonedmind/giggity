import Link from "next/link";

export default function ItemButton({
  title,
  link,
  colour,
  textColour,
  hover,
  icon,
}) {
  return (
    <Link
      href={link}
      className={`${colour} ${textColour} ${hover}
      flex h-fit cursor-pointer flex-nowrap items-center gap-2 rounded-lg border 
      border-[0.6px] px-2 py-4 text-center text-sm font-medium uppercase hover:shadow-md md:py-2`}
    >
      {icon && <div className={"h-4 w-4"}>{icon}</div>}
      <p className={"m-auto"}>{title}</p>
    </Link>
  );
}
