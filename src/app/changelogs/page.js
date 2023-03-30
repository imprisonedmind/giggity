import { supabaseAdmin } from "../../../lib/supabaseClient";

async function getChangeLogs() {
  let { data } = await supabaseAdmin.from("changelogs").select();
  return data;
}

export const revalidate = 0;

export default async function ChangeLogs() {
  const changeLogs = await getChangeLogs();
  return (
    <div
      className={
        "border-1 w-full rounded-lg border border-neutral-700 bg-neutral-800 p-4" +
        " leading-6"
      }
    >
      {Object.values(changeLogs).map((log) => (
        <>
          <p key={log.id} className={"mb-2 text-lg text-neutral-400"}>
            Version {log.title}
          </p>
          <ul className={"list-disc pl-4"}>
            {Object.values(log.log).map((item) => (
              <li key={item} className={"text-md text-neutral-500"}>
                {item}
              </li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}
