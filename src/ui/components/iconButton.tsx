import React from "react";
import { cn } from "@/utils/functions";
import { SideBarNavbarBox } from "@/ui/view";

interface IProps {
  children?: React.ReactNode;
  containerClass?: string;
  disabled?: boolean;
  clickHandler?: (ev?: React.MouseEvent<HTMLDivElement>) => void;
}

const IconButton: React.FC<IProps> = ({
  children,
  containerClass,
  disabled,
  clickHandler = () => {},
}) => {
  return (
    <div
      onClick={clickHandler}
      className={cn(
        "inline-flex items-center justify-center cursor-pointer click_Effect",
        containerClass,
        !!disabled && "bg-slate-500/20"
      )}
    >
      {children}
    </div>
  );
};

export default IconButton;
