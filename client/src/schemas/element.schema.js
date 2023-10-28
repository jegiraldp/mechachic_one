import { z } from "zod";
export const ElementSchema = z.object({
  /*codigo*/
  codigo:z.string().min(1,{message:"Element's code is Required ⚠️"}),
  /*nombre*/
  nombre: z.string().min(1, { message: "Element´s name is Required ⚠️" }),
  descripcion: z.string().min(1, { message: "Element´s description is Required ⚠️" }),
  /*categoria*/
  idCategoria: z.string().min(1, { message: "Element´s category is Required ⚠️" }).refine((value)=>value!=="0",{
    message:"Element´s category is Required ⚠️"
  }),
  /*stock*/
  stock:z.string().min(1,{message:"Element´s stock is Required ⚠️"}),
  /*valor*/
  valorUnitario:z.string().min(1,{message:"Element´s value is Required ⚠️"}),

});