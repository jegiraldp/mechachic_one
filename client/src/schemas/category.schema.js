import { z } from "zod";
export const CategorySchema = z.object({
  nombre: z.string().min(1, { message: "Categorie´s name is Required ⚠️" }),

});
