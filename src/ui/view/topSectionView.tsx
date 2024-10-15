"use client";
import React from "react";
import { LongCards } from "@/ui/view";
import { motion } from "framer-motion";
import { useSideModal } from "@/hooks";
import { longCartWrapperVariants } from "@/utils/animations";

interface IProps {}

const TopSectionView: React.FC<IProps> = () => {
  const { isActive } = useSideModal();

  return (
    <motion.section
      variants={longCartWrapperVariants}
      animate={!!isActive ? "active" : "initial"}
      initial={"initial"}
      className=" grid grid-cols-2 gap-4 mt-3 w-[1478px] "
    >
      <LongCards containerClass="bg-gradient-to-r from-[#0F3443] to-[#34E89E]" />
      <LongCards containerClass="bg-gradient-to-r from-[#FCCF31] to-[#F55555]" />
      <LongCards containerClass="bg-gradient-to-r from-[#FFD3A5] to-[#FD6585]" />
      <LongCards containerClass="bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4]" />
    </motion.section>
  );
};

export default TopSectionView;
