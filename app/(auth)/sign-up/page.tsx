import { AuthForm } from "@/components/auth/AuthForm"

export default async function SignUp() {
   return (
      <section className="flex-center size-full max-sm:px-6">
         <AuthForm type="sign-up" />
      </section>
   )
}
