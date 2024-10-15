"use client";
import React from "react";
import { ThreeDotsIcon, SearchIcon } from "@/ui/components/icons";
import { usePathname } from "next/navigation";
import { Badge, TextInput } from "@/ui/components";
import { useForm } from "react-hook-form";
import { useSideModal } from "@/hooks";
import { motion } from "framer-motion";
import { longCartWrapperVariants } from "@/utils/animations";

interface IProps {}

const MainHeader: React.FC<IProps> = () => {
  const { isActive } = useSideModal();
  const { control } = useForm({
    defaultValues: {
      searchBox: "",
    },
  });
  const pathName = usePathname();
  const { closeModal, openModal } = useSideModal();
  return (
    <motion.header
      variants={longCartWrapperVariants}
      animate={!!isActive ? "active" : "initial"}
      className="flex justify-between py-8 mx-8 "
    >
      <div className="absolute">
        <div className="bg-red-500 p-3 " onClick={closeModal}>
          close
        </div>
        <div className="bg-green-400 p-3 " onClick={openModal}>
          open
        </div>
      </div>
      <div>
        <span className="inline-flex items-center">
          <ThreeDotsIcon classnames="h-8 w-8 fill-blue-300" />
          <h1 className="text-heading_sm translate-y-0.5 text-gray-100">
            {pathName.includes("/books")
              ? "Books"
              : pathName.includes("/podcast")
              ? "Podcasts"
              : "Listlearner"}
          </h1>
        </span>
        <div className="flex space-x-2 mt-4">
          <Badge title="All" classname="bg-blue-300" />
          <Badge title="Productivity" sticker="💡" />
          <Badge title="Creative" sticker="🎨" />
          <Badge title="Trend" sticker="🔥" />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="inline-flex space-x-2 justify-end">
          <Badge title="90" sticker="⚡️" />
          <Badge title="100" sticker="❤️" />
        </span>
        <TextInput
          containerStyle="min-w-[350px] mt-3"
          InputContainerStyle="border-none bg-gray-600 hover:bg-gray-600/70 rounded-xs"
          RIcon={<SearchIcon classnames="w-6 h-6 fill-gray-100 mr-2" />}
          placeholder="What do you  want to learn today?"
          inputProps={{
            control: control,
            name: "searchBox",
            disabled: false,
          }}
        />
      </div>
    </motion.header>
  );
};
export default MainHeader;
