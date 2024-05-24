"use server"

import { cookies } from "next/headers"

import { createAdminClient } from "@/lib/appwrite"
import { parseStringify } from "@/lib/utils"

import { getUserInfo } from "@/actions/user/get-user-info.actions"

export async function signIn({ email, password }: signInProps) {
   try {
      // Mutation / Database / Make Fetch
      const { account } = await createAdminClient()
      const session = await account.createEmailPasswordSession(email, password)

      cookies().set("appwrite-session", session.secret, {
         path: "/",
         httpOnly: true,
         sameSite: "strict",
         secure: true,
      })

      const user = await getUserInfo({ userId: session.userId })

      return parseStringify(user)
   } catch (error) {
      console.error("Error sign in user actions: ", error)
   }
}
