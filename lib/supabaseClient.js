import { createClient } from "@supabase/supabase-js";
import { options } from "prettier-plugin-tailwindcss";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
export const supabaseAdmin = createClient(supabaseUrl, supabaseAnonKey, {
  headers: {
    cache: "no-store",
    cacheControl: "no-store",
    next: {
      revalidate: 0,
    },
  },
});
