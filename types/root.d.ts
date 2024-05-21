declare interface HeaderBoxProps {
   type?: "title" | "greeting"
   title: string
   subtext: string
   user?: string
}

declare interface TotalBalanceBoxProps {
   accounts: Account[]
   totalBanks: number
   totalCurrentBalance: number
}

declare interface DoughnutChartProps {
   accounts: Account[]
}

declare interface MobileNavProps {
   user: User
}

declare interface SidebarProps {
   user: User
}

declare interface RightSidebarProps {
   user: User
   transactions: Transaction[]
   banks: Bank[] & Account[]
}
