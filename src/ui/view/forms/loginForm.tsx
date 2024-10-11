"use client";
import React from "react";
import Image from "next/image";
import { cn } from "@/utils/functions";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { TextInput, SubmitButton } from "@/ui/components";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchemaType } from "@/types";
import { loginSchema } from "@/validations/loginFormSchema";

interface IProps {}

const LoginForm: React.FC<IProps> = () => {
  const { handleSubmit, control, setValue, register, formState } =
    useForm<loginSchemaType>({
      resolver: yupResolver<any>(loginSchema),
      defaultValues: {
        userName: "",
        password: "",
      },
    });

  const submitHandler = () => {};

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
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="w-full"
        action="
      "
      >
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
        <SubmitButton classes="w-full rounded-xs mt-8" label="Login" />
      </form>
    </div>
  );
};

export default LoginForm;
