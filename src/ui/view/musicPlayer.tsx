"use client";
import React, { useState } from "react";
import { IconButton, Progressbar } from "@/ui/components";
import { PlayListItem } from "@/ui/view";
import { ArrowIcon, SavedIcon, Xicon } from "@/ui/components/icons";
import { cn } from "@/utils/functions";
import Image from "next/image";
import { useToast, useSideModal } from "@/hooks";

interface IProps {
  isSaved?: boolean;
  title?: string;
  subTitle?: string;
  srcImage?: string | null;
}

const MusicPlayer: React.FC<IProps> = ({
  isSaved = false,
  title = "",
  srcImage = "/static/images/poster.jpg",
  subTitle = "",
}) => {
  const { openToast } = useToast();
  const { closeModal } = useSideModal();
  const [saved, setSaved] = useState(!!isSaved ? isSaved : false);

  const changeSaveStatus = () => {
    if (saved) {
      setSaved(false);
    } else {
      setSaved(true);
    }
  };

  return (
    <div className="z-20 relative">
      <header className={cn("bg-gray-950 p-5 flex justify-between ")}>
        <div className="flex items-center space-x-3">
          <IconButton
            clickHandler={() => {
              openToast();
              closeModal();
            }}
            containerClass="p-1.5 bg-gray-700 rounded-full"
          >
            <ArrowIcon classnames="w-6 h-6 fill-gray-200 rotate-90" />
          </IconButton>

          <h3 className="text-paragraph_xl text-gray-100 translate-y-0.5">
            {title}
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <IconButton
            clickHandler={changeSaveStatus}
            containerClass={cn(
              "p-1.5 bg-gray-700 rounded-full",
              saved && "bg-gray-100"
            )}
          >
            <SavedIcon
              classnames="w-6 h-6 fill-gray-900 -rotate-270"
              stroke={saved ? "#111" : "#eee"}
            />
          </IconButton>
          <IconButton
            clickHandler={closeModal}
            containerClass="p-1.5 bg-gray-700 rounded-full"
          >
            <Xicon classnames="w-6 h-6 fill-gray-200 -rotate-270" />
          </IconButton>
        </div>
      </header>
      <section className="px-6">
        <div className="w-full flex justify-center py-[68px]">
          <Image
            src={!!srcImage ? srcImage : "/static/images/poster2.jpg"}
            width={180}
            height={180}
            alt="music-poster"
            className="w-[180px] h-[180px] object-cover rounded-xs overflow-hidden"
            priority={false}
          />
        </div>
        <div id="info">
          <h4 className="text-gray-500 text-paragraph_lg mb-1">chapter 7</h4>
          <h2 className="text-gray-200 text-heading_xs mb-2">{title}</h2>
          <h3 className="text-gray-200 text-paragraph_xl">{subTitle}</h3>
        </div>
        <Progressbar />
        <h2 className="text-gray-100 text-heading_xs mt-6">List Of Chapters</h2>
        <div className="h-[330px] overflow-y-auto">
          {Array.from({ length: 7 }, () => (
            <PlayListItem key={Math.random()} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MusicPlayer;
