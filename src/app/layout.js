import './globals.css'
import Navbar from "@/components/navigation/navbar";

export const metadata = {
  title: 'Giggity',
  description: "Find local gis near you!"
}


export default function RootLayout({children}) {
  return (
      <html lang="en">
      <body className={"bg-neutral-900 p-4 max-w-[1200px] m-auto"}>{
        <>
          <Navbar/>
          {children}
        </>
      }</body>
      </html>
  )
}
