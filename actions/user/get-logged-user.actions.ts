"use server"

import { createSessionClient } from "@/lib/appwrite"
import { parseStringify } from "@/lib/utils"

import { getUserInfo } from "@/actions/user/get-user-info.actions"

export async function getLoggedInUser() {
   try {
      const { account } = await createSessionClient()
      const result = await account.get()

      const user = await getUserInfo({ userId: result.$id })

      return parseStringify(user)
   } catch (error) {
      console.error("Error get logged in user actions: ", error)
      return null
   }
}
