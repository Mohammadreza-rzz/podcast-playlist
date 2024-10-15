"use client";
import React from "react";
import { IconButton } from "@/ui/components";
import { PlayIcon } from "@/ui/components/icons";

interface IProps {
  index?: string;
}

const PlayListItem: React.FC<IProps> = ({ index }) => {
  return (
    <div className="flex items-center space-x-3 hover:opacity-70 hover:scale-[0.99] transition-all mt-4">
      <p className="w-4 text-paragraph_lg text-green-100">1</p>
      <div className="mr-auto flex-1">
        <h4 className="text-gray-100 text-paragraph_xl">
          Rejecting Social Norms For
        </h4>
        <h6 className="text-paragraph_md text-gray-600 mt-1">6 Minutes</h6>
      </div>
      <IconButton containerClass="border-2 border-whit p-2.5 rounded-full">
        <PlayIcon classnames="w-5 h-5 fill-white" />
      </IconButton>
    </div>
  );
};

export default PlayListItem;
