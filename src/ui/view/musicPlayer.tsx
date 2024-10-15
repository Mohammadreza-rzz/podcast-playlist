"use client";
import React from "react";
import { IconButton, Progressbar } from "@/ui/components";
import { PlayListItem } from "@/ui/view";
import { ArrowIcon, SavedIcon, Xicon } from "@/ui/components/icons";
import { cn } from "@/utils/functions";
import Image from "next/image";

interface IProps {}

const MusicPlayer: React.FC<IProps> = () => {
  return (
    <div className="z-20 relative">
      <header className={cn("bg-gray-950 p-5 flex justify-between ")}>
        <div className="flex items-center space-x-3">
          <IconButton containerClass="p-1.5 bg-gray-700 rounded-full">
            <ArrowIcon classnames="w-6 h-6 fill-gray-200 rotate-90" />
          </IconButton>

          <h3 className="text-paragraph_xl text-gray-100 translate-y-0.5">
            HumberMan Lab
          </h3>
        </div>
        <div className="flex items-center space-x-2">
          <IconButton containerClass="p-1.5 bg-gray-700 rounded-full">
            <Xicon classnames="w-6 h-6 fill-gray-200 -rotate-270" />
          </IconButton>
        </div>
      </header>
      <section className="px-6">
        <div className="w-full flex justify-center py-[68px]">
          <Image
            src="/static/images/poster2.jpg"
            width={180}
            height={180}
            alt="music-poster"
            className="w-[180px] h-[180px] object-cover rounded-xs overflow-hidden"
          />
        </div>
        <div id="info">
          <h4 className="text-gray-500 text-paragraph_lg mb-1">chapter 7</h4>
          <h2 className="text-gray-200 text-heading_xs mb-2">
            Rejecting Social Norms for Justice
          </h2>
          <h3 className="text-gray-200 text-paragraph_xl">The daily stoice</h3>
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
