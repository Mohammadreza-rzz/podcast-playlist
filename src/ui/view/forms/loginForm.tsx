"use client";
import React, { useTransition } from "react";
import Image from "next/image";
import { cn } from "@/utils/functions";
import { loginSchemaType } from "@/types";
import { useForm } from "react-hook-form";
import { loginAction } from "@/actions/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextInput, SubmitButton } from "@/ui/components";
import { loginSchema } from "@/validations/loginFormSchema";

interface IProps {}

const LoginForm: React.FC<IProps> = () => {
  const [isPending, startTransition] = useTransition();
  const { handleSubmit, control, setValue, register, formState } =
    useForm<loginSchemaType>({
      resolver: yupResolver<any>(loginSchema),
      defaultValues: {
        userName: "",
        password: "",
      },
    });

  const submitHandler = (values: any) => {
    startTransition(async () => {
      const res = await loginAction(values);
      console.log(res, "response");
    });
  };

  return (
    <div className="px-48 py-64 flex flex-col items-center">
      <span className={cn("!inline-block w-fit p-4 bg-blue-800 rounded-sm")}>
        <Image
          className="object-cover"
          src={"/static/images/logo.svg"}
          alt="logo"
          width={50}
          height={25}
        />
      </span>
      <h2 className={"mt-8 text-heading_xs text-gray-100"}>
        Log in to dashboard
      </h2>
      <form onSubmit={handleSubmit(submitHandler)} className="w-full">
        <TextInput
          hasErrorMessage={true}
          containerStyle="w-full"
          InputContainerStyle="border-none bg-blue-800 rounded-xs"
          label="Email"
          inputProps={{
            control: control,
            name: "userName",
            disabled: false,
          }}
        />
        <TextInput
          hasErrorMessage={true}
          containerStyle="w-full mt-8"
          InputContainerStyle="border-none bg-blue-800 rounded-xs"
          label="Password"
          inputProps={{
            control: control,
            name: "password",
            disabled: false,
          }}
        />
        <SubmitButton
          disabled={isPending}
          classes="w-full rounded-xs mt-8"
          label="Login"
        />
      </form>
    </div>
  );
};

export default LoginForm;
