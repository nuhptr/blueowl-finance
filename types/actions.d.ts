//* Account
declare type getAccountsProps = {
   userId: string
}

declare type getAccountProps = {
   appwriteItemId: string
}

//* Institutions
declare type getInstitutionProps = {
   institutionId: string
}

//* Transactions
declare type getTransactionsProps = {
   accessToken: string
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

//* Dwolla
declare type CreateFundingSourceOptions = {
   customerId: string // Dwolla Customer ID
   fundingSourceName: string // Dwolla Funding Source Name
   plaidToken: string // Plaid Account Processor Token
   _links: object // Dwolla On Demand Authorization Link
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

declare type AddFundingSourceParams = {
   dwollaCustomerId: string
   processorToken: string
   bankName: string
}

declare type TransferParams = {
   sourceFundingSourceUrl: string
   destinationFundingSourceUrl: string
   amount: string
}

//* User
declare type getUserInfoProps = {
   userId: string
}

declare type exchangePublicTokenProps = {
   publicToken: string
   user: User
}

//* Banks
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
