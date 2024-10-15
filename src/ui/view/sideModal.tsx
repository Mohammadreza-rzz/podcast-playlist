"use client";
import React from "react";
import { cn } from "@/utils/functions";
import { MusicPlayer } from "@/ui/view";
import { useSideModal } from "@/hooks";
import { motion } from "framer-motion";
import { sideModalVarient } from "@/utils/animations";

interface IProps {}

const SideModal: React.FC<IProps> = () => {
  const { isActive, data } = useSideModal();

  return (
    <motion.div
      variants={sideModalVarient}
      initial={"initial"}
      animate={!!isActive ? "active" : "initial"}
      className={cn(
        "bg-[url('/static/images/poster.jpg')] bg-no-repeat bg-cover bg-center  absolute top-0 right-0 h-full"
      )}
    >
      <span className="absolute h-full w-full bg-gray-950/90 left-0 top-0 z-10  "></span>
      <MusicPlayer
        isSaved={data.isSaved}
        title={data?.title}
        srcImage={data.srcImage}
        subTitle={data.by}
      />
    </motion.div>
  );
};

export default SideModal;
