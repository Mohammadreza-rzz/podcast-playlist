import * as Yup from "yup";
import { loginSchemaType } from "@/types";

export const loginSchema = Yup.object<loginSchemaType>({
  userName: Yup.string().required("this filde is required"),
  password: Yup.string().required("this filde is required"),
});
