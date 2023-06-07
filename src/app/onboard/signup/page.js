"use client";
import FormInput from "@/components/form/input";
import Link from "next/link";
import GreenButton from "@/components/buttons/greenButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import { supabaseAdmin } from "../../../../lib/supabaseClient";

export default function SignUp() {
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
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error.response.data.error_description);
        }),
  });

  return (
    <form className="bg-neutral-750 flex h-fit w-full flex-col gap-2 rounded-md p-4">
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
