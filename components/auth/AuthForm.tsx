"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { authFormSchema } from "@/lib/schema"

import { signUp } from "@/actions/user/sign-up.actions"
import { signIn } from "@/actions/user/sign-in.actions"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { CustomInput } from "@/components/auth/CustomInput"

export function AuthForm({ type }: { type: "sign-in" | "sign-up" }) {
   const router = useRouter()
   const [user, setUser] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   const formSchema = authFormSchema(type)

   //* Define the form
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   })

   //* Define the submit handler
   const onHandleSubmit = async (data: z.infer<typeof formSchema>) => {
      setIsLoading(true)

      try {
         //* Sign up with Appwrite & create plaid token
         if (type === "sign-up") {
            const userData = {
               firstName: data.firstName!,
               lastName: data.lastName!,
               address1: data.address1!,
               city: data.city!,
               postalCode: data.postalCode!,
               dateOfBirth: data.dateOfBirth!,
               ssn: data.ssn!,
               email: data.email,
               password: data.password,
            }

            const newUser = await signUp(userData)

            setUser(newUser)
         }

         //* Sign in with Appwrite
         if (type === "sign-in") {
            const response = await signIn({
               email: data.email,
               password: data.password,
            })

            if (response) router.push("/")
         }
      } catch (error) {
         console.error(error)
      } finally {
         setIsLoading(false)
      }
   }

   return (
      <section className="auth-form">
         <header className="flex flex-col gap-5 md:gap-8">
            <Link href="/" className="flex items-center gap-1 cursor-pointer">
               <Image src="/icons/ic_logo.svg" width={34} height={34} alt="Horizon Logo" />
               <h1 className="font-bold text-26 font-ibm-plex-serif text-black-1">BlueOwl</h1>
            </Link>

            <div className="flex flex-col gap-1 md:gap-3">
               <h1 className="font-semibold text-gray-900 text-24 lg:text-36">
                  {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
               </h1>
               <p className="font-normal text-gray-600 text-16">
                  {user ? "Link your account to get started" : "Please enter your details"}
               </p>
            </div>
         </header>

         {user ? (
            <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
         ) : (
            <>
               <Form {...form}>
                  <form onSubmit={form.handleSubmit(onHandleSubmit)} className="space-y-8">
                     {type === "sign-up" && (
                        <>
                           <div className="flex gap-4">
                              <CustomInput
                                 control={form.control}
                                 name="firstName"
                                 label="First Name"
                                 placeholder="Enter your first name."
                              />
                              <CustomInput
                                 control={form.control}
                                 name="lastName"
                                 label="Last Name"
                                 placeholder="Enter your last name."
                              />
                           </div>
                           <CustomInput
                              control={form.control}
                              name="address1"
                              label="Address"
                              placeholder="Enter your specific address"
                           />
                           <CustomInput
                              control={form.control}
                              name="city"
                              label="City"
                              placeholder="Enter your city"
                           />
                           <div className="flex gap-4">
                              <CustomInput
                                 control={form.control}
                                 name="state"
                                 label="State"
                                 placeholder="Example: NY"
                              />
                              <CustomInput
                                 control={form.control}
                                 name="postalCode"
                                 label="Postal Code"
                                 placeholder="Example: 11101"
                              />
                           </div>
                           <div className="flex gap-4">
                              <CustomInput
                                 control={form.control}
                                 name="dateOfBirth"
                                 label="Date of Birth"
                                 placeholder="YYYY-MM-DD"
                              />
                              <CustomInput
                                 control={form.control}
                                 name="ssn"
                                 label="SSN"
                                 placeholder="Example: 1234"
                              />
                           </div>
                        </>
                     )}

                     <CustomInput
                        control={form.control}
                        name="email"
                        label="Email"
                        placeholder="Enter your email."
                     />
                     <CustomInput
                        control={form.control}
                        name="password"
                        label="Password"
                        placeholder="Enter your password"
                     />

                     <div className="flex flex-col gap-4">
                        <Button type="submit" disabled={isLoading} className="form-btn">
                           {isLoading ? (
                              <>
                                 <Loader2 size={20} className="animate-spin" /> &nbsp; Loading...
                              </>
                           ) : type === "sign-in" ? (
                              "Sign In"
                           ) : (
                              "Sign Up"
                           )}
                        </Button>
                     </div>
                  </form>
               </Form>

               <footer className="flex justify-center gap-1">
                  <p className="text-14 font-normal text-gray-600">
                     {type === "sign-in" ? "Already have an account?" : "New to BlueOwl?"}
                  </p>
                  <Link href={type === "sign-in" ? "/sign-up" : "/sign-in"} className="form-link">
                     {type === "sign-in" ? "Sign Up" : "Sign In"}
                  </Link>
               </footer>
            </>
         )}
      </section>
   )
}
