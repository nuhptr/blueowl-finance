import Image from "next/image"
import { redirect } from "next/navigation"

import { getLoggedInUser } from "@/actions/user/get-logged-user.actions"

import { MobileNav } from "@/components/root/MobileNav"
import { Sidebar } from "@/components/root/Sidebar"

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   const loggedIn = await getLoggedInUser()

   if (!loggedIn) redirect("/sign-in")

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
