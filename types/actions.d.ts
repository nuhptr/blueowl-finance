//* Actions Types
declare type getAccountsProps = {
   userId: string
}

declare type getAccountProps = {
   appwriteItemId: string
}

declare type getInstitutionProps = {
   institutionId: string
}

declare type getTransactionsProps = {
   accessToken: string
}

declare type CreateFundingSourceOptions = {
   customerId: string // Dwolla Customer ID
   fundingSourceName: string // Dwolla Funding Source Name
   plaidToken: string // Plaid Account Processor Token
   _links: object // Dwolla On Demand Authorization Link
}

declare type CreateTransactionProps = {
   name: string
   amount: string
   senderId: string
   senderBankId: string
   receiverId: string
   receiverBankId: string
   email: string
}

declare type getTransactionsByBankIdProps = {
   bankId: string
}

declare type getUserInfoProps = {
   userId: string
}

declare type exchangePublicTokenProps = {
   publicToken: string
   user: User
}

declare type createBankAccountProps = {
   accessToken: string
   userId: string
   accountId: string
   bankId: string
   fundingSourceUrl: string
   shareableId: string
}

declare type getBanksProps = {
   userId: string
}

declare type getBankProps = {
   documentId: string
}

declare type getBankByAccountIdProps = {
   accountId: string
}
