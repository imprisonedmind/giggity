import { supabaseAdmin } from "./supabaseClient";

const today = new Date();
const options = { timeZone: "Africa/Johannesburg" };
const todayString = today.toLocaleString("en-US", options);
const todayInJohannesburg = new Date(todayString);
const daysUntilSunday = 7 - todayInJohannesburg.getDay(); // get number of days until Sunday
const nextWeek = new Date(
  todayInJohannesburg.getTime() + (daysUntilSunday + 1) * 24 * 60 * 60 * 1000
);

export async function getThisWeeksEvents() {
  if (!supabaseAdmin) return [];

  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .gte("date", today.toISOString())
    .lt("date", nextWeek.toISOString())
    .order("date", { ascending: true })
    .order("time", { ascending: true });

  return data;
}

export async function getFutureAll() {
  if (!supabaseAdmin) return [];

  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .gt("date", nextWeek.toISOString())
    .order("date", { ascending: true })
    .order("time", { ascending: true });
  return data;
}

export async function getNext8() {
  if (!supabaseAdmin) return [];

  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .gt("date", today.toISOString())
    .order("date", { ascending: true })
    .order("time", { ascending: true })
    .limit(8);
  return data;
}

export async function getFuture8() {
  if (!supabaseAdmin) return [];

  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .gt("date", nextWeek.toISOString())
    .order("date", { ascending: true })
    .order("time", { ascending: true })
    .limit(8);
  return data;
}

export async function getPastAll() {
  if (!supabaseAdmin) return [];

  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .lt("date", new Date().toISOString())
    .order("date", { ascending: false })
    .order("time", { ascending: true });
  return data;
}

export async function getPast8() {
  if (!supabaseAdmin) return [];

  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .lt("date", new Date().toISOString())
    .order("date", { ascending: false })
    .order("time", { ascending: true })
    .limit(8);
  return data;
}
