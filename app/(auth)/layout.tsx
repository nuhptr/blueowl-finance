import Image from "next/image"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
   return (
      <main className="flex min-h-screen w-full justify-between font-inter">
         {children}

         <div className="auth-asset">
            {/* This is for trigger flex layout */}
            <div>
               <Image
                  src="/icons/ic_auth-image.svg"
                  width={500}
                  height={500}
                  alt="Auth Assets"
                  className="rounded-l-xl object-contain"
               />
            </div>
         </div>
      </main>
   )
}
