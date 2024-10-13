import React from "react";
import { cn } from "@/utils/functions";
import { SideBarNavbarBox } from "@/ui/view";

interface IProps {
  children?: React.ReactNode;
  containerClass?: string;
  disabled?: boolean;
  clickHandler?: (ev?: React.MouseEvent<HTMLButtonElement>) => void;
}

const IconButton: React.FC<IProps> = ({
  children,
  containerClass,
  disabled,
  clickHandler = () => {},
}) => {
  return (
    <button
      onClick={clickHandler}
      className={cn(
        "click_Effect",
        containerClass,
        !!disabled && "bg-slate-500/20"
      )}
    >
      {children}
    </button>
  );
};

export default IconButton;
