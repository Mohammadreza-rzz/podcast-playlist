"use client";
import React from "react";
import { LongCards } from "@/ui/view";
import { motion } from "framer-motion";
import { useSideModal } from "@/hooks";
import { longCartWrapperVariants } from "@/utils/animations";
import { playListItemType } from "@/types";

interface IProps {
  items?: playListItemType[];
}

const TopSectionView: React.FC<IProps> = ({ items }) => {
  const { isActive } = useSideModal();

  return (
    <motion.section
      variants={longCartWrapperVariants}
      animate={!!isActive ? "active" : "initial"}
      initial={"initial"}
      className=" grid grid-cols-2 gap-4 mt-3 w-[1478px] "
    >
      <LongCards
        title={!!items?.length ? items[0]?.title : ""}
        isSaved={!!items?.length ? items[0]?.isSaved : false}
        subTitle={!!items?.length ? items[0]?.by : ""}
        srcImage={!!items?.length ? items[0]?.poster : null}
        type={!!items?.length ? items[0]?.type : "book"}
        id={!!items?.length ? items[0]?.id : null}
        containerClass="bg-gradient-to-r from-[#0F3443] to-[#34E89E]"
      />
      <LongCards
        title={!!items?.length ? items[1]?.title : ""}
        isSaved={!!items?.length ? items[1]?.isSaved : false}
        subTitle={!!items?.length ? items[1]?.by : ""}
        srcImage={!!items?.length ? items[1]?.poster : null}
        type={!!items?.length ? items[1]?.type : "book"}
        id={!!items?.length ? items[1]?.id : null}
        containerClass="bg-gradient-to-r from-[#FCCF31] to-[#F55555]"
      />
      <LongCards
        title={!!items?.length ? items[2]?.title : ""}
        isSaved={!!items?.length ? items[2]?.isSaved : false}
        subTitle={!!items?.length ? items[2]?.by : ""}
        srcImage={!!items?.length ? items[2]?.poster : null}
        type={!!items?.length ? items[2]?.type : "book"}
        id={!!items?.length ? items[2]?.id : null}
        containerClass="bg-gradient-to-r from-[#FFD3A5] to-[#FD6585]"
      />
      <LongCards
        title={!!items?.length ? items[3]?.title : ""}
        isSaved={!!items?.length ? items[3]?.isSaved : false}
        subTitle={!!items?.length ? items[3]?.by : ""}
        srcImage={!!items?.length ? items[3]?.poster : null}
        type={!!items?.length ? items[3]?.type : "book"}
        id={!!items?.length ? items[3]?.id : null}
        containerClass="bg-gradient-to-r from-[#7F7FD5] to-[#91EAE4]"
      />
    </motion.section>
  );
};

export default TopSectionView;
