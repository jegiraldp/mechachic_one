import { z } from "zod";
export const CustomerSchema = z.object({
  /*id*/
  id:z.string().min(1,{message:"Customer's code is Required ⚠️"}),
  /*first name*/
  firstName: z.string().min(1, { message: "Customer´s first name is Required ⚠️" }),
  /*last name*/
  lastName: z.string().min(1, { message: "Customer´s last name is Required ⚠️" }),
  /*tipo*/
  tipo: z.string().min(1, { message: "Customer´s type is Required ⚠️" }).refine((value)=>value!=="0",{
    message:"Customer´s type is Required ⚠️"
  }),
  /*email*/
  email: z.string().min(1, { message: "Customer´s email is Required ⚠️" }),
  phone: z.string().min(1, { message: "Customer´s phone is Required ⚠️" }),
  address: z.string().min(1, { message: "Customer´s address is Required ⚠️" }),

});