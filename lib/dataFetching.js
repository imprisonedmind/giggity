import { supabaseAdmin } from "./supabaseClient";

const today = new Date();
const options = { timeZone: "Africa/Johannesburg" };
const todayString = today.toLocaleString("en-US", options);
const todayInJohannesburg = new Date(todayString);
const nextWeek = new Date(
  todayInJohannesburg.getTime() + 7 * 24 * 60 * 60 * 1000
);

export async function getThisWeeksEvents() {
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
  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .gt("date", nextWeek.toISOString())
    .order("date", { ascending: true })
    .order("time", { ascending: true });
  return data;
}

export async function getFuture8() {
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
  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .lt("date", new Date().toISOString())
    .order("date", { ascending: false })
    .order("time", { ascending: true });
  return data;
}

export async function getPast8() {
  let { data } = await supabaseAdmin
    .from("event")
    .select()
    .lt("date", new Date().toISOString())
    .order("date", { ascending: false })
    .order("time", { ascending: true })
    .limit(8);
  return data;
}
