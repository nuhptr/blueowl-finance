import Link from "next/link"
import Image from "next/image"

import { formatAmount } from "@/lib/utils"

export function BankCard({ account, userName, showBalance = true }: CreditCardProps) {
   return (
      <div className="flex flex-col">
         <Link href="/" className="bank-card">
            <div className="bank-card_content">
               <div>
                  <h1 className="font-semibold text-white text-16">{userName}</h1>
                  <p className="font-black text-white font-ibm-plex-serif">
                     {formatAmount(account.currentBalance)}
                  </p>
               </div>

               <article className="flex flex-col gap-2">
                  <div className="flex justify-between">
                     <h1 className="font-semibold text-white text-12">{userName}&nbsp;</h1>
                     <h2 className="font-semibold text-white text-12">●● / ●●</h2>
                  </div>
                  <p className="text-14 font-semibold tracking-[1.1px] text-white">
                     ●●●● ●●●● ●●●● <span className="text-16">1234</span>
                  </p>
               </article>
            </div>

            <div className="bank-card_icon">
               <Image src="/icons/ic_paypass.svg" width={20} height={24} alt="paypass" />
               <Image
                  src="/icons/ic_mastercard.svg"
                  width={45}
                  height={32}
                  alt="mastercard"
                  className="ml-5"
               />
            </div>

            <Image
               src="/icons/ic_lines.svg"
               width={316}
               height={190}
               alt="lines"
               className="absolute top-0 left-0"
            />
         </Link>
      </div>
   )
}
