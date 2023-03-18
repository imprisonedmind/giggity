import {Creepster} from "next/font/google";

const patrick = Creepster({
  weight: '400',
  subsets: ['latin'],
})

export default function Logo() {
  return <div className={patrick.className}>
    <div className={"bg-red-500/10 w-fit h-fit py-1 px-2 rounded-md"}>
      <h1 className={"font-bold text-2xl text-red-500 tracking-wider"}>Giggity</h1>
    </div>
  </div>
}