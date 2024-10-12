"use server";
import { loginSchema } from "@/validations/loginFormSchema";
import { signIn } from "@/auth";

import { loginSchemaType } from "@/types";

type a = {
  userName: string;
  password: string;
};

export const loginAction = async (values: loginSchemaType) => {
  const validationFields: any = await loginSchema.validate(values, {
    strict: true,
  });

  const result = await signIn("credentials", {
    userName: validationFields.userName as string,
    password: validationFields.password as string,
  });

  console.log(result, "resulttttttttttttttttttt");

  return { message: "succesful" };
};
