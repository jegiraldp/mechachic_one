import { z } from "zod";
export const ServiceSchema = z.object({
  /*id*/
  id:z.string().min(1,{message:"Service's code is Required ⚠️"}),
  /*nombre*/
  nombre: z.string().min(1, { message: "Service´s name is Required ⚠️" }),
  descripcion: z.string().min(1, { message: "Service´s description is Required ⚠️" }),
  
  /*valor*/
  valor:z.string().min(1,{message:"Service´s value is Required ⚠️"}),

});