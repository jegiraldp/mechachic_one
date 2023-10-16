import { z } from "zod";
export const LoginSchema = z.object({
  userName: z.string().min(1, { message: "Username is Required⚠️" }),
  password: z.string().min(1, { message: "Password is Required⚠️" }),
});
