"use client";
import React from "react";
import Image from "next/image";
import { ArrowIcon } from "@/ui/components/icons";
import { useRouter } from "next/navigation";
import { useSideModal } from "@/hooks";

interface IProps {
  imageSrc?: string;
  title?: string;
  by: string;
  type: string | null;
  id: number;
  isSaved?: boolean;
}

const SavedItems: React.FC<IProps> = ({
  title = "",
  imageSrc,
  by,
  id,
  type,
  isSaved,
}) => {
  const { isActive, setdata, openModal } = useSideModal();
  const router = useRouter();
  const clickOnCardsHandler = (type: string, cardId: number | null) => {
    setdata({
      title: title,
      by: by,
      srcImage: !!imageSrc ? imageSrc : "/static/images/poster.jpg",
      isSaved: isSaved!,
    });
    if (type === "book" && !!cardId) {
      router.push(`/home/books/${id}`);
    } else if (type === "podcast") {
      openModal();
    }
  };
  return (
    <div
      onClick={clickOnCardsHandler.bind(this, type!, !!id ? id : null)}
      className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-gray-700 duration-500  transition-colors "
    >
      <Image
        src={!!imageSrc ? imageSrc : "/static/images/poster.jpg"}
        width={75}
        height={75}
        alt="music-poster"
        className="w-[75px] h-[75px] object-cover rounded-xs overflow-hidden"
      />
      <div className="translate-y-1 !mr-auto">
        <h3 className="text-heading_2xs text-gray-100">{title}</h3>
        <h5 className="text-paragraph_lg text-gray-800">{by}</h5>
      </div>
      <ArrowIcon classnames="w-7 h-7 fill-gray-800" />
    </div>
  );
};

export default SavedItems;
