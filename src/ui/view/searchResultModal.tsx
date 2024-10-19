import React from "react";
import { SavedItem } from "@/ui/view";
import { playListItemType } from "@/types";

interface IProps {
  item: playListItemType[];
}

const SearchResultModal: React.FC<IProps> = ({ item }) => {
  return (
    <div className="absolute top-full w-full max-h-[450px] overflow-auto bg-gray-950 z-50 my-2 rounded-sm">
      {!!item &&
        !!item.length &&
        item?.map((item) => (
          <SavedItem
            isSaved={item?.isSaved}
            imageSrc={item?.poster}
            by={item?.by}
            id={item?.id}
            key={item?.id}
            type={item?.type}
            title={item?.title}
          />
        ))}
    </div>
  );
};

export default SearchResultModal;
