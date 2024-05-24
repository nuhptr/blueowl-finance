import Image from "next/image"
import { useRouter } from "next/navigation"

import { logoutAccount } from "@/actions/user/logout.actions"

export function Footer({ user, type = "desktop" }: FooterProps) {
   const router = useRouter()

   const onHandleLogout = async () => {
      const loggedOut = await logoutAccount()

      if (loggedOut) router.push("/sign-in")
   }

   return (
      <footer className="footer">
         <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
            <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
         </div>

         <div className={type === "mobile" ? "footer_email-mobile" : "footer_email"}>
            <h1 className="text-14 truncate font-semibold text-gray-700">{user?.firstName}</h1>
            <p className="text-14 truncate font-normal text-gray-600">{user?.email}</p>
         </div>

         <div className="footer_image" onClick={onHandleLogout}>
            <Image src="/icons/ic_logout.svg" fill alt="logout icon" />
         </div>
      </footer>
   )
}
