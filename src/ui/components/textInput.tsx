"use client";

import React, { useState } from "react";
import { cn } from "@/utils/functions";
import { useController, UseControllerProps } from "react-hook-form";
import { WarningIcon } from "./icons";

interface IProps {
  LIcon?: JSX.Element;
  RIcon?: JSX.Element;
  hasIcon?: boolean;
  containerStyle?: string;
  InputContainerStyle?: string;
  type?: string;
  name?: string;
  id?: string;
  label?: string;
  labelStyle?: string;
  InputStyle?: string;
  placeholder?: string;
  inputProps: UseControllerProps<any>;

  hasErrorMessage?: boolean;
  hasSeccessMessage?: boolean;
  hasInfoMessage?: boolean;
  compact?: boolean;
  helpMessage?: string;
  seccessMeesage?: string;
  messageStyle?: string;
}

const CustomInput: React.FC<IProps> = ({
  inputProps,
  label,
  type,
  containerStyle,
  InputContainerStyle,
  labelStyle,
  id,
  InputStyle,
  placeholder,
  hasErrorMessage = false,
  RIcon,
  LIcon,
  compact = false,
  messageStyle,
  helpMessage,
  seccessMeesage,
  hasIcon,
  hasInfoMessage,
  hasSeccessMessage,
  ...rest
}) => {
  const { field, formState } = useController(inputProps);
  const { name, onChange, disabled } = field;
  const { errors, isValid, isDirty }: any = formState;
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const touchHandler = () => {
    setIsFocus(true);
  };
  const BlurHandler = () => {
    setIsFocus(false);
  };

  return (
    <div className={cn("flex flex-col", containerStyle)}>
      <label
        className={cn(
          "text-sm leading-[14.4px] font-normal mb-1",
          !!disabled && "text-gray-500",
          !disabled && "text-gray-300",
          labelStyle
        )}
        htmlFor={name}
      >
        {label}
      </label>
      <div
        className={`${InputContainerStyle} ${
          !!disabled
            ? "border-primery-100"
            : !!hasErrorMessage && errors[name]?.message
            ? "border-info-500 mb-6"
            : "border-primery-300"
        } ${!!compact ? "p-2" : "p-[14px]"} ${
          isFocus && "border-primery-500"
        } flex w-full  border-[2px]  relative`}
      >
        {!!RIcon && RIcon}
        <input
          {...field}
          {...rest}
          onTouchStart={touchHandler}
          onBlur={BlurHandler}
          onChange={onChange}
          type={type}
          id={name}
          placeholder={placeholder}
          className={`${InputStyle} ${
            !!disabled
              ? "placeholder:text-gray-400 "
              : "placeholder:text-gray-100"
          }  text-paragraph_lg  w-full 
        
           text-gray-300 bg-transparent relative`}
        />
        {!!hasErrorMessage && !!errors[name]?.message && !disabled && (
          <span className="inline-flex justify-start absolute top-full !left-0 mt-4 w-full">
            <WarningIcon classnames="w-4 h-4" />
            <p className="text-paragraph_md  text-red-600 ml-2">
              {errors[name]?.message}
            </p>
          </span>
        )}
      </div>
    </div>
  );
};

export default CustomInput;
