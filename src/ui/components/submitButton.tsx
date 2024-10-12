import React from "react";
import { cn } from "@/utils/functions";

interface IProps {
  label?: string;
  classes?: string;
  disabled?: boolean;
}

const SubmitButton: React.FC<IProps> = ({
  label = "submit",
  classes,
  disabled = false,
}) => {
  return (
    <input
      disabled={disabled}
      type="submit"
      value={label}
      className={cn(
        "click_Effect text-gray-100 bg-blue-50 py-3 shadow-submit-shadow",
        !!disabled && "!opacity-35 pointer-events-none",
        classes
      )}
    />
  );
};

export default SubmitButton;
