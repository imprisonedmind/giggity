import Link from "next/link";

export default function TitleHandler({ title, link, seeAll, pos }) {
  return (
    <div
      className={
        "z-10 flex w-full flex-nowrap items-center justify-between px-2 text-neutral-500"
      }
    >
      {pos === 1 ? (
        <h2 className={"select-none"}>{title}</h2>
      ) : pos === 2 ? (
        <h3 className={"select-none"}>{title}</h3>
      ) : (
        <h4 className={"select-none"}>{title}</h4>
      )}
      {seeAll && (
        <Link
          href={link}
          className={
            "cursor-pointer text-xs tracking-wide underline underline-offset-2" +
            " hover:text-green-500 focus:text-green-500"
          }
        >
          SEE ALL
        </Link>
      )}
    </div>
  );
}
