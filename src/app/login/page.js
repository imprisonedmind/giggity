"use client";
import { useEffect, useState } from "react";
import { supabaseAdmin } from "../../../lib/supabaseClient";
import { useSupabase } from "@/context/auth";

export default function Login() {
  const { session } = useSupabase();

  if (!session) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-8 text-4xl font-bold">Login</h1>
        <form className="w-96">
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              id="email"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-gray-700"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 focus:outline-none"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
              onClick={() =>
                supabaseAdmin.auth.signInWithPassword({
                  email: "test@gmail.com",
                  password: "1234",
                })
              }
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="mb-8 text-4xl font-bold">Logged in!</h1>
        <button
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
          onClick={() => supabaseAdmin.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    );
  }
}
