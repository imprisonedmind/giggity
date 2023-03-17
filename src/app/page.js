import {createClient} from "@supabase/supabase-js";
import ItemCard from "@/components/card/itemCard";

export const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
)

async function getData() {
  let {data} = await supabaseAdmin.from('Event').select()
  return data
}

export default async function Home() {
  const data = await getData()
  return (
      <main className={"flex flex-wrap sm:flex-nowrap gap-4"}>
        {data.map((item) => <ItemCard item={item} key={item.id}/>
        )}
      </main>
  )
}
