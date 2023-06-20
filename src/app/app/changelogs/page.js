import { supabaseAdmin } from "../../../../lib/supabaseClient";

async function getChangeLogs() {
  let { data } = await supabaseAdmin
    .from("changelogs")
    .select()
    .order("id", { ascending: false });
  return data;
}

export const revalidate = 120;

export default async function ChangeLogs() {
  const changeLogs = await getChangeLogs();
  return (
    <div className={"flex flex-wrap gap-4 px-2 md:px-4"}>
      {Object.values(changeLogs).map((log) => (
        <div
          key={log.id}
          className={
            "border-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 p-4" +
            " leading-6"
          }
        >
          <p className={"mb-2 text-lg text-neutral-400"}>Version {log.title}</p>
          <ul className={"list-disc pl-4"}>
            {Object.values(log.log).map((item) => (
              <li key={item} className={"text-md text-neutral-500"}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
