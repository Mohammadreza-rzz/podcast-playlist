import React from "react";
import { cn } from "@/utils/functions";

interface IProps {
  label?: string;
  classes?: string;
}

const SubmitButton: React.FC<IProps> = ({ label = "submit", classes }) => {
  return (
    <input
      type="submit"
      value={label}
      className={cn(
        "click_Effect text-gray-100 bg-blue-50 py-3 shadow-submit-shadow",
        classes
      )}
    />
  );
};

export default SubmitButton;
