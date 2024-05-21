import { HeaderBox } from "@/components/root/HeaderBox"
import { TotalBalanceBox } from "@/components/root/TotalBalanceBox"
import { RightSidebar } from "@/components/root/RightSidebar"

export default function HomePage() {
   const loggedIn = { firstName: "Nuhptr", lastName: "Developer", email: "nuhptr@gmail.com" }

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

            {/* RECENT TRANSACTIONS */}
         </div>

         <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
      </section>
   )
}
