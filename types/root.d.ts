//* (Root) folder types
declare type HeaderBoxProps = {
   type?: "title" | "greeting"
   title: string
   subtext: string
   user?: string
}

declare type TotalBalanceBoxProps = {
   accounts: Account[]
   totalBanks: number
   totalCurrentBalance: number
}

declare type DoughnutChartProps = {
   accounts: Account[]
}

declare type MobileNavProps = {
   user: User
}

declare type SidebarProps = {
   user: User
}

declare type RightSidebarProps = {
   user: User
   transactions: Transaction[]
   banks: Bank[] & Account[]
}

declare type CreditCardProps = {
   account: Account
   userName: string
   showBalance?: boolean
}
