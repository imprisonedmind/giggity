"use client";
import FormInput from "@/components/form/input";
import Link from "next/link";
import GreenButton from "@/components/buttons/greenButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import { supabaseAdmin } from "../../../../lib/supabaseClient";
import OnBoardError from "@/components/error/onBoardError";
import { useState } from "react";
import { router } from "next/client";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const [err, setErr] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: null,
      password: null,
    },
    onSubmit: async (values) =>
      supabaseAdmin.auth
        .signUp({
          email: formik.values.email,
          password: formik.values.password,
        })
        .then((res) => {
          console.log(res);
          if (res.error) {
            setErr(res.error);
          } else {
            router.push("onboard/login");
          }
        }),
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
      </div>

      <div className={"mt-8 flex w-full flex-col gap-2 text-center"}>
        <GreenButton
          title={"Sign up"}
          icon={<ArrowRightIcon className={"h-6 w-6"} />}
          callBack={formik.submitForm}
        />
        <Link
          href={"onboard/login"}
          className={"group w-full text-center text-sm text-neutral-500"}
        >
          Already have an account?{" "}
          <span
            className={
              "underline underline-offset-4 group-hover:text-green-500"
            }
          >
            Log In
          </span>
        </Link>
      </div>
    </form>
  );
}
