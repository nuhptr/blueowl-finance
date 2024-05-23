import { z } from "zod"
import { Control, FieldPath } from "react-hook-form"

import { authFormSchema } from "@/lib/schema"

import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// parameter is "sign-up" for get all fields
const formSchema = authFormSchema("sign-up")

interface CustomInput {
   control: Control<z.infer<typeof formSchema>>
   name: FieldPath<z.infer<typeof formSchema>>
   label: string
   placeholder: string
}

export function CustomInput({ control, name, label, placeholder }: CustomInput) {
   return (
      <FormField
         control={control}
         name={name}
         render={({ field }) => (
            <div className="form-item">
               <FormLabel className="form-label">{label}</FormLabel>
               <div className="flex flex-col w-full">
                  <FormControl>
                     <Input
                        id={name}
                        placeholder={placeholder}
                        className="input-class"
                        type={
                           name === "password" ? "password" : name === "email" ? "email" : "text"
                        }
                        {...field}
                     />
                  </FormControl>
                  <FormMessage className="mt-2 form-message" />
               </div>
            </div>
         )}
      />
   )
}
