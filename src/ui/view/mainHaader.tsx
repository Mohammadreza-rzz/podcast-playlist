"use client";
import React, { useEffect, useState, useTransition } from "react";
import { ThreeDotsIcon, SearchIcon } from "@/ui/components/icons";
import { usePathname } from "next/navigation";
import { Badge, TextInput } from "@/ui/components";
import { useForm } from "react-hook-form";
import { useSideModal, useDebounce } from "@/hooks";
import { motion } from "framer-motion";
import { longCartWrapperVariants } from "@/utils/animations";
import SearchResultModal from "./searchResultModal";
import { playListItemType } from "@/types";
import Lottie from "react-lottie";
import * as animationData from "@/assets/lottie/loading.json";

export async function getSearchData(searchValue: string) {
  try {
    const response = await fetch(`/api/playList/?searchValue=${searchValue}`, {
      cache: "no-cache",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${searchValue}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

interface IProps {}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const MainHeader: React.FC<IProps> = () => {
  const [searchBoxValue, SetSerachBoxValue] = useState<string>("");
  const [isPending, startTransition] = useTransition();
  const [searchData, setSearchData] = useState<playListItemType[]>();
  const [searchBoxIsActive, SetsearchBoxIsActive] = useState(false);
  const { isActive } = useSideModal();
  const { control, watch } = useForm({
    defaultValues: {
      searchBox: "",
    },
  });
  const pathName = usePathname();
  const debounced = useDebounce(SetSerachBoxValue, 1000);

  useEffect(() => {
    !!watch().searchBox
      ? SetsearchBoxIsActive(false)
      : SetsearchBoxIsActive(true);
    debounced(watch().searchBox);
  }, [watch().searchBox]);

  useEffect(() => {
    startTransition(async () => {
      const { data } = await getSearchData(searchBoxValue);
      if (!!data && !!data.length) setSearchData(data);
    });
  }, [searchBoxValue]);

  return (
    <motion.header
      variants={longCartWrapperVariants}
      animate={!!isActive ? "active" : "initial"}
      className="flex justify-between py-8 mx-8 "
    >
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
        <div className="flex space-x-2 mt-5">
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
        <div className="relative">
          <TextInput
            containerStyle="min-w-[350px] mt-4"
            InputContainerStyle="border-none bg-gray-600 hover:bg-gray-600/70 rounded-xs"
            RIcon={
              isPending ? (
                <Lottie options={defaultOptions} height={26} width={26} />
              ) : (
                <SearchIcon classnames="w-6 h-6 fill-gray-100 mr-2" />
              )
            }
            placeholder="What do you  want to learn today?"
            inputProps={{
              control: control,
              name: "searchBox",
              disabled: false,
            }}
          />
          {!searchBoxIsActive && <SearchResultModal item={searchData!} />}
        </div>
      </div>
    </motion.header>
  );
};
export default MainHeader;
