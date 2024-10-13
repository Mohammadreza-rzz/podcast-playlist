import React from "react";
import { cn } from "@/utils/functions";
import { SideBarNavbarBox, SavedItemBox } from "@/ui/view";

interface IProps {
  containerClass?: string;
}

const SideBar: React.FC<IProps> = ({ containerClass }) => {
  return (
    <aside className={cn(containerClass)}>
      <SideBarNavbarBox />
      <SavedItemBox />
    </aside>
  );
};

export default SideBar;
