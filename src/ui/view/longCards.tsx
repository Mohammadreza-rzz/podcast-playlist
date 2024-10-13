import React from "react";
import { cn } from "@/utils/functions";
import Image from "next/image";
import { ArrowIcon } from "@/ui/components/icons";

interface IProps {
  containerClass?: string;
  title?: string;
  subTitle?: string;
  info?: string;
}

const LongCards: React.FC<IProps> = ({ containerClass }) => {
  return (
    <div
      className={cn(
        "flex items-center space-x-3 p-4 rounded-sm hover:opacity-90 hover:scale-[1.01] transition-all duration-500 cursor-pointer",
        containerClass
      )}
    >
      <Image
        src="/static/images/poster.jpg"
        width={100}
        height={100}
        alt="music-poster"
        className="w-[100px] h-[100px] object-cover rounded-xs overflow-hidden"
      />
      <div className="translate-y-1 !mr-auto flex-1">
        <h3 className="text-heading_2xs text-gray-100">Past Weekend</h3>
        <h5 className="text-paragraph_md mb-1 text-gray-500">Theo Von</h5>
        <p className="text-gray-500 text-paragraph_md w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          molestias tempore nemo, maxime neque id, corrupti
        </p>
      </div>
      <ArrowIcon classnames="w-7 h-7 fill-gray-800" />
    </div>
  );
};

export default LongCards;
