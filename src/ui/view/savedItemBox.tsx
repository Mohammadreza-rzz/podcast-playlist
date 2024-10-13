"use client";

import React from "react";
import { SavedIcon } from "../components/icons";
import { Badge } from "@/ui/components";
import { SavedItem } from "@/ui/view";

interface IProps {}

const SavedItemBox: React.FC<IProps> = () => {
  return (
    <div className="py-5 bg-gray-900 mt-2 ">
      <span className="inline-flex space-x-3  ml-3 px-4">
        <SavedIcon classnames="w-7 h-7 " />
        <h2 className="text-heading_xs font-bold text-gray-100">Saved Items</h2>
      </span>
      <div className="flex space-x-4 mt-5 pl-3 px-4">
        <Badge title="All" classname="bg-blue-300" />
        <Badge title="Books" />
        <Badge title="Podcast" />
      </div>
      <div className="flex flex-col space-y-2 mt-6 h-[520px] overflow-auto">
        <SavedItem />
        <SavedItem />
        <SavedItem />
        <SavedItem />
        <SavedItem />
        <SavedItem />
      </div>
    </div>
  );
};

export default SavedItemBox;
