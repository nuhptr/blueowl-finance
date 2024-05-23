import z from "zod"

export function authFormSchema(type: "sign-in" | "sign-up") {
   const isSignIn = type === "sign-in" // return true if type is sign-in

   return z.object({
      // sign up
      firstName: isSignIn ? z.string().optional() : z.string().min(3),
      lastName: isSignIn ? z.string().optional() : z.string().min(3),
      address1: isSignIn ? z.string().optional() : z.string().max(50),
      city: isSignIn ? z.string().optional() : z.string().max(50),
      state: isSignIn ? z.string().optional() : z.string().min(2).max(2),
      postalCode: isSignIn ? z.string().optional() : z.string().min(3).max(6),
      dateOfBirth: isSignIn ? z.string().optional() : z.string().min(3),
      ssn: isSignIn ? z.string().optional() : z.string().min(3),

      // both sign up and sign in
      email: z.string().email(),
      password: z.string().min(8),
   })
}
