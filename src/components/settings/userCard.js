"use client";
import Image from "next/image";
import { useSupabase } from "@/context/auth";
import { ArrowRightIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import GreenButton from "@/components/buttons/greenButton";
import { useRouter } from "next/navigation";

export default function UserCard() {
  const session = useSupabase();
  const user = session?.user.user_metadata;

  const router = useRouter();

  if (!user)
    return (
      <div
        className={
          "flex flex-col gap-4 rounded-xl border border-neutral-700 bg-neutral-800 p-2" +
          " text-sm text-neutral-500"
        }
      >
        <p>Please sign in or create an account to edit your profile.</p>
        <div className={"flex flex-col gap-2"}>
          <GreenButton
            title={"Log In"}
            icon={<ArrowRightIcon className={"h-6 w-6"} />}
            callBack={() => router.push("/onboard/login")}
          />
          <GreenButton
            title={"Sign Up"}
            icon={<ArrowRightIcon className={"h-6 w-6"} />}
            callBack={() => router.push("/onboard/signup")}
          />
        </div>
      </div>
    );

  if (user)
    return (
      <Link
        href={"/app/profile"}
        prefetch={true}
        className={
          "item flex rounded-xl border border-neutral-700 bg-neutral-800 p-2" +
          " items-center justify-between text-neutral-500"
        }
      >
        <div className={"flex flex-nowrap gap-4"}>
          <div
            className={
              "relative h-16 w-16 overflow-hidden rounded-full border border-neutral-700"
            }
          >
            <Image
              src={user.profile_img}
              alt={"User profile image"}
              fill={true}
              sizes={"100%"}
              className={"object-cover"}
              loading={"lazy"}
              quality={50}
            />
          </div>
          <div className={"flex flex-col justify-center leading-4 "}>
            <p>
              {user.first_name} {user.last_name}
            </p>
            <p className={"text-sm"}>@{user.username}</p>
          </div>
        </div>
        <ChevronRightIcon className={"h-6 w-6"} />
      </Link>
    );
}
