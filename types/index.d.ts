//* Global Types
declare type SearchParamProps = {
   params: { [key: string]: string }
   searchParams: { [key: string]: string | string[] | undefined }
}

// ========================================

declare type User = {
   $id: string
   email: string
   userId: string
   dwollaCustomerUrl: string
   dwollaCustomerId: string
   firstName: string
   lastName: string
   name: string
   address1: string
   city: string
   state: string
   postalCode: string
   dateOfBirth: string
   ssn: string
}

declare type NewUserParams = {
   userId: string
   email: string
   name: string
   password: string
}

declare type Account = {
   id: string
   availableBalance: number
   currentBalance: number
   officialName: string
   mask: string
   institutionId: string
   name: string
   type: string
   subtype: string
   appwriteItemId: string
   shareableId: string
}

declare type Transaction = {
   id: string
   $id: string
   name: string
   paymentChannel: string
   type: string
   accountId: string
   amount: number
   pending: boolean
   category: string
   date: string
   image: string
   type: string
   $createdAt: string
   channel: string
   senderBankId: string
   receiverBankId: string
}

declare type Bank = {
   $id: string
   accountId: string
   bankId: string
   accessToken: string
   fundingSourceUrl: string
   userId: string
   shareableId: string
}

declare type AccountTypes = "depository" | "credit" | "loan " | "investment" | "other"

declare type Category = "Food and Drink" | "Travel" | "Transfer"

declare type CategoryCount = {
   name: string
   count: number
   totalCount: number
}

declare type Receiver = {
   firstName: string
   lastName: string
}

declare type TransferParams = {
   sourceFundingSourceUrl: string
   destinationFundingSourceUrl: string
   amount: string
}

declare type AddFundingSourceParams = {
   dwollaCustomerId: string
   processorToken: string
   bankName: string
}

declare type NewDwollaCustomerParams = {
   firstName: string
   lastName: string
   email: string
   type: string
   address1: string
   city: string
   state: string
   postalCode: string
   dateOfBirth: string
   ssn: string
}

declare type BankInfoProps = {
   account: Account
   appwriteItemId?: string
   type: "full" | "card"
}

declare type PageHeaderProps = {
   topTitle: string
   bottomTitle: string
   topDescription: string
   bottomDescription: string
   connectBank?: boolean
}

declare type PaginationProps = {
   page: number
   totalPages: number
}

declare type PlaidLinkProps = {
   user: User
   variant?: "primary" | "ghost"
   dwollaCustomerId?: string
}

declare type BankDropdownProps = {
   accounts: Account[]
   setValue?: UseFormSetValue<any>
   otherStyles?: string
}

declare type BankTabItemProps = {
   account: Account
   appwriteItemId?: string
}

declare type FooterProps = {
   user: User
   type?: "mobile" | "desktop"
}

declare type RecentTransactionsProps = {
   accounts: Account[]
   transactions: Transaction[]
   appwriteItemId: string
   page: number
}

declare type TransactionHistoryTableProps = {
   transactions: Transaction[]
   page: number
}

declare type CategoryBadgeProps = {
   category: string
}

declare type TransactionTableProps = {
   transactions: Transaction[]
}

declare type CategoryProps = {
   category: CategoryCount
}

declare type PaymentTransferFormProps = {
   accounts: Account[]
}
