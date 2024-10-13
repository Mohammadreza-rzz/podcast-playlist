import React from "react";
import { LongCards } from "@/ui/view";
interface IProps {}

const TopSectionView: React.FC<IProps> = () => {
  return (
    <section className=" grid grid-cols-2 gap-4 mt-3 ">
      <LongCards containerClass="bg-gradient-to-r from-[#0F3443] to-[#34E89E]" />
      <LongCards containerClass="bg-gradient-to-r from-[#FCCF31] to-[#F55555]" />
      <LongCards containerClass="bg-gradient-to-r from-[#FFD3A5] to-[#FD6585]" />
      <LongCards containerClass="bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4]" />
    </section>
  );
};

export default TopSectionView;
