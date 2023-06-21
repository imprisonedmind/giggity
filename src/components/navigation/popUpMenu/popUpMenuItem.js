import Link from "next/link";

export default function PopUpMenuItem({ title, link, callback }) {
  if (link) {
    return (
      <Link
        href={link}
        passHref={true}
        className={
          "flex w-full cursor-pointer px-4 py-2 hover:bg-neutral-700 hover:text-green-500"
        }
      >
        {title}
      </Link>
    );
  } else {
    return (
      <div
        onClick={callback}
        className={
          "flex w-full cursor-pointer px-4 py-2 hover:bg-neutral-700 hover:text-green-500"
        }
      >
        {title}
      </div>
    );
  }
}
