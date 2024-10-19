"use client";
import React from "react";
import { cn } from "@/utils/functions";
import Image from "next/image";
import { ArrowIcon } from "@/ui/components/icons";
import { useSideModal } from "@/hooks";
import { motion } from "framer-motion";
import { cartlVarient } from "@/utils/animations";
import { useRouter } from "next/navigation";

interface IProps {
  containerClass?: string;
  title?: string;
  subTitle?: string;
  info?: string;
  srcImage?: string | null;
  type?: "book" | "podcast";
  id?: number | null;
  isSaved?: boolean;
}

const LongCards: React.FC<IProps> = ({
  containerClass,
  title = "",
  srcImage = "/static/images/poster.jpg",
  subTitle = "",
  type = "",
  id,
  isSaved = false,
}) => {
  const { isActive, setdata, openModal } = useSideModal();
  const router = useRouter();
  const clickOnCardsHandler = (type: string, cardId: number | null) => {
    setdata({
      title: title,
      by: subTitle,
      srcImage: !!srcImage ? srcImage : "/static/images/poster.jpg",
      isSaved: isSaved,
    });
    if (type === "book" && !!cardId) {
      router.push(`/home/books/${id}`);
    } else if (type === "podcast") {
      openModal();
    }
  };
  return (
    <motion.div
      onClick={clickOnCardsHandler.bind(this, type, !!id ? id : null)}
      variants={cartlVarient}
      initial={"initial"}
      animate={!!isActive ? "active" : "initial"}
      className={cn(
        "flex items-center space-x-3 p-4 rounded-sm hover:opacity-90 hover:scale-[1.01] transition-all duration-500 cursor-pointer",
        containerClass
      )}
    >
      <Image
        src={!!srcImage ? srcImage : "/static/images/poster.jpg"}
        width={100}
        height={100}
        alt="music-poster"
        className="w-[100px] h-[100px] object-cover rounded-xs overflow-hidden"
        priority={false}
      />
      <div className="translate-y-1 !mr-auto flex-1">
        <h3 className="text-heading_2xs text-gray-100">{title}</h3>
        <h5 className="text-paragraph_md mb-1 text-gray-500">{subTitle}</h5>
        <p className="text-gray-500 text-paragraph_md w-4/5 line-clamp-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          molestias tempore nemo, maxime neque id, corrupti
        </p>
      </div>
      <ArrowIcon classnames="w-7 h-7 fill-gray-800" />
    </motion.div>
  );
};

export default LongCards;
