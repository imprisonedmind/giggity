import ItemCard from "@/components/card/itemCard";
import {supabaseAdmin} from "../../lib/supabaseClient";

async function getData() {
  let {data} = await supabaseAdmin.from('Event').select()
  return data
}

export default async function Home() {
  const data = await getData()
  return (
      <main className={"flex flex-wrap sm:flex-nowrap gap-4"}>
        {data.map((item) => <ItemCard item={item} key={item.id}/>)}
      </main>
  )
}
