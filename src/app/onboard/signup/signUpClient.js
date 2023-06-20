"use client";
import { useState } from "react";
import OnBoardError from "@/components/error/onBoardError";
import FormInput from "@/components/form/input";
import GreenButton from "@/components/buttons/greenButton";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useFormik } from "formik";
import { supabaseAdmin } from "../../../../lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function SignUpClient() {
  const router = useRouter();

  const [err, setErr] = useState(null);

  const formik = useFormik({
    initialValues: {
      username: null,
      email: null,
      password: null,
    },
    onSubmit: async (values) => {
      // Perform sign up if the username is unique
      try {
        // Create a new user
        const { error: signUpError } = await supabaseAdmin.auth.signUp({
          email: values.email,
          password: values.password,
          options: {
            data: {
              createdAt: new Date(),
              username: values.username,
              profile_img: "https://source.unsplash.com/random/?punkrock",
              banner_img: "https://source.unsplash.com/random/?hardcore",
            },
          },
        });

        if (signUpError) {
          throw signUpError;
        }

        router.push("/onboard/login");
      } catch (error) {
        console.error(error);
        setErr(error);
      }
    },
  });

  return (
    <form className="bg-neutral-750 flex h-fit w-full flex-col gap-2 rounded-md p-4">
      {err && <OnBoardError err={err} />}
      <FormInput
        id={"username"}
        name={"username"}
        type={"text"}
        autoComplete={"new-username"}
        onChange={formik.handleChange}
        placeholder={"Username"}
        padding={"p-3"}
      />
      <FormInput
        id={"email"}
        name={"email"}
        type={"email"}
        autoComplete={"new-email"}
        onChange={formik.handleChange}
        placeholder={"Email"}
        padding={"p-3"}
      />
      <div className={"flex flex-col gap-2"}>
        <FormInput
          id={"password"}
          name={"password"}
          type={"password"}
          autoComplete={"new-password"}
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
          href={"/onboard/login"}
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
