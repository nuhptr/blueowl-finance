import { AnimatedCounter } from "@/components/root/AnimatedCounter"
import { DoughnutChart } from "@/components/root/DoughnutChart"

export function TotalBalanceBox({
   accounts = [],
   totalBanks,
   totalCurrentBalance,
}: TotalBalanceBoxProps) {
   return (
      <section className="total-balance">
         <div className="total-balance-chart">
            <DoughnutChart accounts={accounts} />
         </div>

         <div className="flex flex-col gap-6">
            <h2 className="header-2">Bank Accounts: {totalBanks}</h2>

            <div className="flex flex-col gap-2">
               <p className="total-balance-label">Total Current Balance</p>
               <div className="gap-2 total-balance-amount flex-center">
                  <AnimatedCounter amount={totalCurrentBalance} />
               </div>
            </div>
         </div>
      </section>
   )
}
