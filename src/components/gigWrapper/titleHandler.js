import Link from "next/link";

export default function TitleHandler({ title, link }) {
  return (
    <div
      className={
        "z-10 flex w-full flex-nowrap items-center justify-between px-2 text-neutral-500"
      }
    >
      <h3 className={""}>{title}</h3>
      <Link
        href={link}
        className={
          "cursor-pointer text-xs tracking-wide underline underline-offset-2" +
          " hover:text-green-500 "
        }
      >
        SEE ALL
      </Link>
    </div>
  );
}
