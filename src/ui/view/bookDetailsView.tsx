"use client";
import React from "react";
import Image from "next/image";
import { HeadphoneIcon, ThreeDotsIcon } from "@/ui/components/icons";
import { motion } from "framer-motion";
import { useSideModal } from "@/hooks";
import { longCartWrapperVariants } from "@/utils/animations";

interface IProps {
  index?: string;
  title?: string;
  subTitle?: string;
  srcImage?: string | null;
}

const BookDetailsView: React.FC<IProps> = ({
  index,
  title = "",
  srcImage = "/static/images/poster.jpg",
  subTitle = "",
}) => {
  const { openModal, isActive } = useSideModal();
  return (
    <div className="mt-14  px-8">
      <motion.div
        variants={longCartWrapperVariants}
        animate={isActive ? "active" : "initial"}
        initial={"initial"}
        className="flex items-center space-x-6"
      >
        <Image
          src={!!srcImage ? srcImage : "/static/images/poster.jpg"}
          width={200}
          height={200}
          alt="music-poster"
          className="w-[200px] h-[200px] object-cover rounded-xs overflow-hidden"
        />
        <div className="!mr-auto">
          <h1 className="text-heading_sm font-semibold text-gray-100">
            {title}
          </h1>
          <h3 className="text-heading_xs text-gray-700">{subTitle}</h3>
        </div>
        <div
          onClick={openModal}
          className="px-5 py-2 rounded-full bg-gray-500 inline-flex items-center space-x-3 click_Effect"
        >
          <HeadphoneIcon classnames="w-5 h-5 fill-gray-100" />
          <span className="text-[25px] text-gray-100 font-semibold inline-flex  translate-y-0.5">
            L
            <ThreeDotsIcon classnames="fill-blue-500 w-[26px] h-[24px] -mx-0.5 translate-y-1" />
            sten
          </span>
        </div>
      </motion.div>
      <motion.div
        variants={longCartWrapperVariants}
        animate={isActive ? "active" : "initial"}
        initial={"initial"}
      >
        <h1 className="text-heading_sm font-semibold text-gray-100 mt-14">
          Discovery
        </h1>
        <h2 className="text-heading_xs text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio, quasi natus maiores eligendi commodi ipsam laboriosam
          impedit beatae, repellat, tempore voluptas. Et optio qui ullam
          voluptatem soluta, eaque excepturi.
        </h2>
      </motion.div>
      <motion.div
        variants={longCartWrapperVariants}
        animate={isActive ? "active" : "initial"}
        initial={"initial"}
      >
        <h1 className="text-heading_sm font-semibold text-gray-100 mt-14">
          What will you learn
        </h1>
        <h2 className="text-heading_xs text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          distinctio, quasi natus maiores eligendi commodi ipsam laboriosam
          impedit beatae, repellat, tempore voluptas. Et optio qui ullam
          voluptatem soluta, eaque excepturi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste distinctio, quasi natus maiores
          eligendi commodi ipsam laboriosam impedit beatae, repellat, tempore
          voluptas. Et optio qui ullam voluptatem soluta, eaque excepturi.
        </h2>
      </motion.div>
    </div>
  );
};

export default BookDetailsView;
