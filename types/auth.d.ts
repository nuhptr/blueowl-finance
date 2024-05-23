//* Auth types
declare type AuthFormProps = {
   type: "sign-in" | "sign-up"
}

declare type SignUpParams = {
   //* make it optional
   firstName?: string
   lastName?: string
   address1?: string
   city?: string
   state?: string
   postalCode?: string
   dateOfBirth?: string
   ssn?: string
   email: string
   password: string
}

declare type LoginUser = {
   email: string
   password: string
}

declare type signInProps = {
   email: string
   password: string
}
