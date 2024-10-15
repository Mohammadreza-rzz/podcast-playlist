"use server";
import React from "react";
import { cn } from "@/utils/functions";
import { playListItemType } from "@/types";
import { SideBarNavbarBox, SavedItemBox } from "@/ui/view";
import { getPlayList } from "@/utils/apiFunc";

interface IProps {
  containerClass?: string;
}

const SideBar: React.FC<IProps> = async ({ containerClass }) => {
  const savedData = await getPlayList("book");

  return (
    <aside className={cn(containerClass)}>
      <SideBarNavbarBox />
      <SavedItemBox item={!!savedData.data.length ? savedData.data : []} />
    </aside>
  );
};

export default SideBar;
