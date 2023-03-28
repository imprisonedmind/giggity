import Link from "next/link";

export default function Footer() {
  return (
    <div
      className={
        "border-1 left-0 mt-12 grid w-full grid-cols-3 border bg-neutral-800 p-4" +
        " rounded-lg border-neutral-700 text-neutral-500"
      }
    >
      <div className={"col-span-1 flex flex-col"}>
        <p>Do you like this project?</p>
        <div className={"flex flex-nowrap gap-2 text-sm tracking-wide"}>
          <p>🍺</p>
          <Link
            href={"https://www.buymeacoffee.com/lukestephens"}
            target={"_blank"}
            className={"hover:text-blue-500 hover:underline"}
          >
            Consider buying me a beer
          </Link>
        </div>
      </div>
      <div className={"col-span-1 flex items-center justify-center"}>
        <p>Version {process.env.APP_VERSION}</p>
      </div>
      <div
        className={"col-span-1 flex flex-nowrap items-center justify-end gap-2"}
      >
        <p>📓 </p>
        <Link
          href={"/changelogs"}
          className={"hover:text-blue-500 hover:underline"}
        >
          Changelogs
        </Link>
      </div>
    </div>
  );
}
