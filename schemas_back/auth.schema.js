import { z } from "zod";

export const registerSchema = z.object({
  nombreCompleto: z.string({
    required_error: "Full name is required",
  }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Invalid email",
    }),
  userName: z.string({
    required_error: "Username is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "The password must be at least 6 characters..",
    }),
  perfil: z
    .number({ required_error: "Profile is required" })
    .max(2, { message: "1: admin, 2: worker" }),
});

export const loginSchema = z.object({
  userName: z.string({
    required_error: "USername is required",
  }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(6, {
      message: "Password must be at least 6 characters",
    }),
});
