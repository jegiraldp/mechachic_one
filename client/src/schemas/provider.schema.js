import { z } from "zod";
export const ProviderSchema = z.object({
  /*id*/
  id:z.string().min(1,{message:"Provider's code is Required ⚠️"}),
  /*nombre*/
  nombre: z.string().min(1, { message: "Provider´s name is Required ⚠️" }),
  descripcion: z.string().min(1, { message: "Provider´s description is Required ⚠️" }),
  
  /*valor*/
  valor:z.string().min(1,{message:"Provider´s value is Required ⚠️"}),

});