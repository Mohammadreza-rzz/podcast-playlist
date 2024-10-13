"use client";
import React from "react";
import ControlPanel from "./controlPanel";
import { NavButton } from "@/ui/components";
import { SearchIcon, MicIcon, GridIcon, BookIcon } from "@/ui/components/icons";
import { usePathname } from "next/navigation";

interface IProps {}

const SideBarNavBox: React.FC<IProps> = () => {
  const pathName = usePathname();
  return (
    <nav className="px-4 py-5 bg-gray-900">
      <ControlPanel />
      <div className="flex flex-col mt-3">
        <NavButton
          isActive={pathName.includes("/podcast")}
          value="Podcast"
          icon={<MicIcon classnames="h-5 w-5 fill-gray-100" />}
          to="/home/podcast"
        />
        <NavButton
          isActive={pathName.includes("/books")}
          value="Books"
          icon={<BookIcon classnames="h-5 w-5 fill-gray-100" />}
          to="/home/books"
        />
        <NavButton
          isActive={false}
          value="Category"
          icon={<GridIcon classnames="h-5 w-5 fill-gray-100" />}
          to="/home"
        />
        <NavButton
          isActive={false}
          value="Search"
          icon={<SearchIcon classnames="h-5 w-5 fill-gray-100" />}
          to="/home"
        />
      </div>
    </nav>
  );
};

export default SideBarNavBox;
