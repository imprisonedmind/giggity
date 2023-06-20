"use client";
import FormInput from "@/components/form/input";
import Link from "next/link";
import GreenButton from "@/components/buttons/greenButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import { supabaseAdmin } from "../../../../lib/supabaseClient";
import { useState } from "react";
import { useRouter } from "next/navigation";
import OnBoardError from "@/components/error/onBoardError";

export default function Login() {
  const router = useRouter();

  const [err, setErr] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: null,
      password: null,
    },
    onSubmit: (values) => {
      supabaseAdmin.auth
        .signInWithPassword({
          email: formik.values.email,
          password: formik.values.password,
        })
        .then((res) => {
          console.log(res);
          if (res.error) {
            setErr(res.error);
          } else {
            router.push("/app");
          }
        });
    },
  });

  return (
    <form className="bg-neutral-750 flex h-fit w-full flex-col gap-2 rounded-md p-4">
      {err && <OnBoardError err={err} />}
      <FormInput
        id={"email"}
        name={"email"}
        type={"email"}
        onChange={formik.handleChange}
        placeholder={"Email"}
        padding={"p-3"}
      />
      <div className={"flex flex-col gap-2"}>
        <FormInput
          id={"password"}
          name={"password"}
          type={"password"}
          onChange={formik.handleChange}
          placeholder={"Password"}
          padding={"p-3"}
        />
        <Link
          href={"/forgot"}
          className={
            "text-xs text-neutral-500 underline underline-offset-4" +
            " cursor-pointer hover:text-green-500"
          }
        >
          Forgot Password
        </Link>
      </div>

      <div className={"mt-8 flex w-full flex-col gap-2 text-center"}>
        <GreenButton
          title={"Log In"}
          icon={<ArrowRightIcon className={"h-6 w-6"} />}
          callBack={formik.submitForm}
        />
        <Link
          href={"onboard/signup"}
          className={"group w-full text-center text-sm text-neutral-500"}
        >
          test
          <span
            className={
              "underline underline-offset-4 group-hover:text-green-500"
            }
          >
            Sign Up
          </span>
        </Link>
      </div>
    </form>
  );
}
