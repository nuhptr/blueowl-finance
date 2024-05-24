"use server"

import { ID } from "node-appwrite"
import { cookies } from "next/headers"

import { createAdminClient } from "@/lib/appwrite"
import { parseStringify } from "@/lib/utils"

export async function signUp({ password, ...userData }: SignUpParams) {
   const { email, firstName, lastName } = userData

   let newUserAccount

   // Create User Account
   try {
      const { account, databases } = await createAdminClient()

      newUserAccount = await account.create(
         ID.unique(),
         email,
         password,
         `${firstName} ${lastName}`
      )

      if (!newUserAccount) throw new Error("Error when creating user account.")

      // const dwollaCustomerUrl = await createDwollaCustomer({
      //    ...userData,
      //    type: "personal",
      // })

      // if (!dwollaCustomerUrl) throw new Error("Error when creating dwolla customer.")

      // const dwollaCustomerId = extractCustomerIdFromUrl(dwollaCustomerUrl)

      // const newUser = await databases.createDocument(
      //    process.env.APPWRITE_DATABASE_ID!,
      //    process.env.APPWRITE_USER_COLLECTION_ID!,
      //    ID.unique(),
      //    {
      //       ...userData,
      //       userId: newUserAccount.$id,
      //       dwollaCustomerId,
      //       dwollaCustomerUrl,
      //    }
      // )

      const session = await account.createEmailPasswordSession(email, password)

      cookies().set("appwrite-session", session.secret, {
         path: "/",
         httpOnly: true,
         sameSite: "strict",
         secure: true,
      })

      return parseStringify(newUserAccount)
   } catch (error) {
      console.error("Error sign up user actions: ", error)
   }
}
