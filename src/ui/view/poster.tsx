"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSideModal } from "@/hooks";

interface IProps {
  title?: string;
  subTitle?: string;
  info?: string;
  srcImage?: string | null;
  type?: "book" | "podcast";
  id?: number | null;
  isSaved?: boolean;
}

const Poster: React.FC<IProps> = ({
  title,
  subTitle,
  srcImage,
  type,
  id,
  isSaved = false,
}) => {
  const router = useRouter();
  const { isActive, setdata, openModal } = useSideModal();
  const clickOnCardsHandler = (type: string, cardId: number | null) => {
    setdata({
      title: title!,
      by: subTitle!,
      srcImage: !!srcImage ? srcImage : "/static/images/poster.jpg",
      isSaved: isSaved,
    });
    if (type === "book" && !!cardId) {
      router.push(`books/${id}`);
    } else if (type === "podcast") {
      openModal();
    }
  };
  return (
    <div
      onClick={clickOnCardsHandler.bind(this, type!, !!id ? id : null)}
      className="hover:opacity-60 transition-opacity duration-500 cursor-pointer min-w-[150px]"
    >
      <Image
        src={!!srcImage ? srcImage : "/static/images/poster.jpg"}
        width={150}
        height={150}
        alt="music-poster"
        className="w-[150px] h-[150px] object-cover rounded-xs overflow-hidden"
        priority={false}
      />
      <div className="translate-y-1 !mr-auto">
        <h3 className="text-paragraph_xl text-[18px] mt-2 text-gray-100 max-w-fit overflow-hidden">
          {title}
        </h3>
        <h5 className="text-paragraph_md text-gray-600">{subTitle}</h5>
      </div>
    </div>
  );
};

export default Poster;
