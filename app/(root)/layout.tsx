import Image from "next/image"

import MobileNav from "@/components/MobileNav"
import Sidebar from "@/components/Sidebar"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   const loggedIn = { firstName: "Nuhptr", lastName: "Developer" }

   return (
      <main className="flex w-full h-screen font-inter">
         <Sidebar user={loggedIn} />

         <div className="flex flex-col size-full">
            {/* Hidden when md size screen */}
            <div className="root-layout">
               <Image src="/icons/ic_logo.svg" alt="menu icon" width={30} height={30} />
               <div>
                  <MobileNav user={loggedIn} />
               </div>
            </div>

            {children}
         </div>
      </main>
   )
}
