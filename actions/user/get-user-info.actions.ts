"use server"

import { Query } from "node-appwrite"

import { createAdminClient } from "@/lib/appwrite"
import { parseStringify } from "@/lib/utils"

export async function getUserInfo({ userId }: getUserInfoProps) {
   try {
      const { databases } = await createAdminClient()

      const user = await databases.listDocuments(
         process.env.APPWRITE_DATABASE_ID!,
         process.env.APPWRITE_USER_COLLECTION_ID!,
         [Query.equal("userId", [userId])]
      )

      return parseStringify(user.documents[0])
   } catch (error) {
      console.log("Error get user info actions: ", error)
   }
}
