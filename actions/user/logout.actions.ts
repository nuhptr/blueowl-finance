"use server"

import { cookies } from "next/headers"

import { createSessionClient } from "@/lib/appwrite"

export async function logoutAccount() {
   try {
      const { account } = await createSessionClient()

      cookies().delete("appwrite-session")

      await account.deleteSession("current")
   } catch (error) {
      console.error("Error logout account actions: ", error)
      return null
   }
}
