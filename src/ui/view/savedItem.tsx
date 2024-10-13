import React from "react";
import Image from "next/image";
import { ArrowIcon } from "@/ui/components/icons";

interface IProps {}

const SavedItems: React.FC<IProps> = () => {
  return (
    <div className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-700 duration-500  transition-colors ">
      <Image
        src="/static/images/poster.jpg"
        width={75}
        height={75}
        alt="music-poster"
        className="w-[75px] h-[75px] object-cover rounded-xs overflow-hidden"
      />
      <div className="translate-y-1 !mr-auto">
        <h3 className="text-heading_2xs text-gray-100">Past Weekend</h3>
        <h5 className="text-paragraph_lg text-gray-800">Theo Von</h5>
      </div>
      <ArrowIcon classnames="w-7 h-7 fill-gray-800" />
    </div>
  );
};

export default SavedItems;
