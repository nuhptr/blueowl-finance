import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import qs from "query-string"

//* CN function to merge tailwind classes
export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs))
}

//* Function to format the amount into currency
export function formatAmount(amount: number): string {
   const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
   })

   return formatter.format(amount)
}

//* Will convert the value into object and stringify into JSON format
export function parseStringify(value: any) {
   return JSON.parse(JSON.stringify(value))
}

//* Regex to remove special characters ^\w\s
export function removeSpecialCharacters(value: string) {
   return value.replace(/[^\w\s]/gi, "")
}

interface UrlQueryParams {
   params: string
   key: string
   value: string
}

//* To make form URL query
export function formUrlQuery({ params, key, value }: UrlQueryParams) {
   const currentUrl = qs.parse(params)

   currentUrl[key] = value

   return qs.stringifyUrl({ url: window.location.pathname, query: currentUrl }, { skipNull: true })
}

//* To get the account type colors
export function getAccountTypeColors(type: AccountTypes) {
   switch (type) {
      case "depository":
         return {
            bg: "bg-blue-25",
            lightBg: "bg-blue-100",
            title: "text-blue-900",
            subText: "text-blue-700",
         }

      case "credit":
         return {
            bg: "bg-success-25",
            lightBg: "bg-success-100",
            title: "text-success-900",
            subText: "text-success-700",
         }

      default:
         return {
            bg: "bg-green-25",
            lightBg: "bg-green-100",
            title: "text-green-900",
            subText: "text-green-700",
         }
   }
}

//* Count the transaction categories and sort them by count
export function countTransactionCategories(transactions: Transaction[]): CategoryCount[] {
   const categoryCounts: { [category: string]: number } = {}
   let totalCount = 0

   //* Iterate over each transaction
   transactions &&
      transactions.forEach((transaction) => {
         //* Extract the category from the transaction
         const category = transaction.category

         //* If the category exists in the categoryCounts object, increment its count
         if (categoryCounts.hasOwnProperty(category)) {
            categoryCounts[category]++
         }
         //* Otherwise, initialize the count to 1
         else {
            categoryCounts[category] = 1
         }

         //* Increment total count
         totalCount++
      })

   //* Convert the categoryCounts object to an array of objects
   const aggregatedCategories: CategoryCount[] = Object.keys(categoryCounts).map((category) => ({
      name: category,
      count: categoryCounts[category],
      totalCount,
   }))

   //* Sort the aggregatedCategories array by count in descending order
   aggregatedCategories.sort((a, b) => b.count - a.count)

   return aggregatedCategories
}

//* Extract the customer ID from the URL
export function extractCustomerIdFromUrl(url: string) {
   //* Split the URL string by '/'
   const parts = url.split("/")

   //* Extract the last part, which represents the customer ID
   const customerId = parts[parts.length - 1]

   return customerId
}

//* Get the transaction status based on the date
export function getTransactionStatus(date: Date) {
   const today = new Date()
   const twoDaysAgo = new Date(today)
   twoDaysAgo.setDate(today.getDate() - 2)

   return date > twoDaysAgo ? "Processing" : "Success"
}
