import { AuthForm } from "@/components/auth/AuthForm"

export default function SignIn() {
   return (
      <section className="flex-center size-full max-sm:px-6">
         <AuthForm type="sign-in" />
      </section>
   )
}
