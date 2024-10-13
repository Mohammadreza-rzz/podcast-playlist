import { cn } from "@/utils/functions";
import React from "react";

interface IProps {
  title?: string;
  classname?: string;
  sticker?: string;
}

const Badge: React.FC<IProps> = ({ title = "", classname, sticker }) => {
  return (
    <div
      className={cn(
        "cursor-pointer transition-colors bg-gray-700 shadow-md inline-flex px-3 py-2 rounded-full justify-center hover:opacity-70 min-w-[55px]",
        classname
      )}
    >
      {!!sticker && sticker}
      <p className="text-paragraph_xl text-gray-100 translate-y-0.5">{title}</p>
    </div>
  );
};

export default Badge;
