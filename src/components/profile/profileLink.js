import { LinkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function ProfileLink({ user }) {
  if (user?.link)
    return (
      <div
        className={
          "flex flex-nowrap items-center gap-1 text-green-500 underline-offset-4" +
          "  hover:underline"
        }
      >
        <LinkIcon className={"h-4 w-4"} />
        <Link target={"_blank"} href={`https://${user?.link}`}>
          {user?.link}
        </Link>
      </div>
    );
}
