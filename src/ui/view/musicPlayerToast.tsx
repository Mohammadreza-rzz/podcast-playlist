"use client";
import React from "react";
import Image from "next/image";
import { IconButton } from "@/ui/components";
import { PlayIcon, Xicon } from "@/ui/components/icons";
import { motion } from "framer-motion";
import { useToast } from "@/hooks";
import { fadeInVariant } from "@/utils/animations";

interface IProps {}

const MusicPlayerToast: React.FC<IProps> = () => {
  const { isActive, closeToast, data } = useToast();
  return (
    <motion.div
      variants={fadeInVariant}
      initial={"initial"}
      animate={isActive ? "active" : "initial"}
      className="absolute bottom-0  !right-10 p-3 bg-gray-800 rounded-md flex space-x-4  w-[460px]"
    >
      <Image
        src={!!data.srcImage ? data?.srcImage : "/static/images/poster2.jpg"}
        alt="userIcon"
        width={100}
        height={100}
        className="w-[100px] h-[100px] rounded-sm"
        priority={false}
      />
      <div className="mt-2 !mr-auto">
        <h3 className="text-heading_2xs text-gray-100">{data?.title}</h3>
        <p className="text-gray-900 text-paragraph_md">{data?.by}</p>
        <p className="text-gray-500 text-paragraph_lg mt-3">03:34 / 34:56</p>
      </div>
      <div className="flex space-x-2 self-center !mr-2">
        <IconButton containerClass="p-1.5 bg-gray-700 rounded-full">
          <PlayIcon classnames="w-6 h-6 fill-gray-100 -rotate-270" />
        </IconButton>
        <IconButton
          clickHandler={closeToast}
          containerClass="p-1.5 bg-gray-700 rounded-full"
        >
          <Xicon classnames="w-6 h-6 fill-white -rotate-270" />
        </IconButton>
      </div>
    </motion.div>
  );
};

export default MusicPlayerToast;
