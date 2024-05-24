import { getLoggedInUser } from "@/actions/user/get-logged-user.actions"

import { HeaderBox } from "@/components/root/HeaderBox"
import { TotalBalanceBox } from "@/components/root/TotalBalanceBox"
import { RightSidebar } from "@/components/root/RightSidebar"

export default async function HomePage() {
   const loggedIn = await getLoggedInUser()

   return (
      <section className="home">
         <div className="home-content">
            <header className="home-header">
               <HeaderBox
                  type="greeting"
                  title="Welcome"
                  user={loggedIn?.firstName || "Guest"}
                  subtext="Access and manage your account and transactions efficiently"
               />
               <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250.35} />
            </header>

            <h1>RECENT TRANSACTIONS</h1>
         </div>

         <RightSidebar
            user={loggedIn}
            transactions={[]}
            banks={[{ currentBalance: 1250.35 }, { currentBalance: 250.35 }]}
         />
      </section>
   )
}
