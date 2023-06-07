import Link from "next/link";
import Image from "next/image";
import lukey from "/public/logo.png";

const copyRightDate = new Date();

export default function Footer() {
  return (
    <footer className={"hidden px-4 pb-4 md:flex"}>
      <div className={"w-full p-2 md:flex md:p-0"}>
        <div
          className={
            "border-1 left-0 mt-4 grid w-full grid-cols-1 border md:grid-cols-3" +
            " gap-4 rounded-lg border-neutral-700 bg-neutral-800 p-4 text-neutral-500" +
            " md:gap-0"
          }
        >
          <div
            className={
              "col-span-1 flex flex-col items-center justify-center md:items-start"
            }
          >
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
          <div
            className={
              "relative col-span-1 flex flex-col items-center justify-center"
            }
          >
            <p>Version {process.env.APP_VERSION}</p>
            <div className={"group "}>
              <div
                className={
                  "border-1 absolute -top-8 bottom-8 left-0 right-0 m-auto group-hover:flex" +
                  " w-max items-center rounded-lg border border-neutral-800 bg-neutral-900" +
                  " hidden p-4"
                }
              >
                <p>Created by Luke Stephens</p>
              </div>
              <Link
                href={"https://bento.me/lukey"}
                target={"_blank"}
                className={"cursor-pointer"}
              >
                <Image
                  src={lukey}
                  alt={"https://bento.me/lukey"}
                  className={"h-6 w-6"}
                />
              </Link>
            </div>
          </div>
          <div
            className={
              "col-span-1 flex flex-col items-center justify-center md:items-end"
            }
          >
            <div className={"flex w-fit flex-nowrap gap-2"}>
              <p>📓 </p>
              <Link
                href={"app/changelogs"}
                className={"hover:text-blue-500 hover:underline"}
              >
                Changelogs
              </Link>
            </div>
            <Link href={"app/privacy"} className={"w-fit"}>
              Privacy Policy
            </Link>
            <p className={"w-fit"}>© 2023 - {copyRightDate.getFullYear()}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
