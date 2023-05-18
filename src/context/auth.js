"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { supabaseAdmin } from "../../lib/supabaseClient";

const Context = createContext(undefined);

export default function SupabaseProvider({ children }) {
  const [session, setSession] = useState(null);
  const [authSubscription, setAuthSubscription] = useState(null); // New state for storing subscription

  useEffect(() => {
    supabaseAdmin.auth.getSession().then(({ data: session }) => {
      setSession(session);
    });

    const { data: subscription } = supabaseAdmin.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    setAuthSubscription(subscription); // Store the subscription object

    return () => {
      if (authSubscription) {
        authSubscription.unsubscribe(); // Unsubscribe if the subscription object is defined
      }
    };
  }, []);

  return (
    <Context.Provider value={{ session }}>
      <>{children}</>
    </Context.Provider>
  );
}

export const useSupabase = () => {
  const context = useContext(Context);

  if (context === undefined) {
    throw new Error("useSupabase must be used inside SupabaseProvider");
  }

  return context;
};
