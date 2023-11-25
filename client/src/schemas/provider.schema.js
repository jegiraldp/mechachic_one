import { z } from "zod";
export const ProviderSchema = z.object({
  /*id*/
  id:z.string().min(1,{message:"Provider's code is Required ⚠️"}),
  /*first name*/
  firstName: z.string().min(1, { message: "Provider´s first name is Required ⚠️" }),
  /*last name*/
  lastName: z.string().min(1, { message: "Provider´s last name is Required ⚠️" }),
  /*email*/
  email: z.string().min(1, { message: "Provider´s email is Required ⚠️" }),
  phone: z.string().min(1, { message: "Provider´s phone is Required ⚠️" }),
  address: z.string().min(1, { message: "Provider´s address is Required ⚠️" }),

});