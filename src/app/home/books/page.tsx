import React from "react";
import { TopSectionView, ScrollableXView } from "@/ui/view";
import { getPlayList } from "@/utils/apiFunc";
import { playListItemType } from "@/types";

const BooksPage: React.FC = async () => {
  const bookData = await getPlayList("book");

  return (
    <div className="px-8 overflow-y-auto h-[888px]">
      <TopSectionView
        items={Array.from(
          { length: 4 },
          (_, index: number) => bookData.data[index]
        )}
      />
      <ScrollableXView items={bookData?.data} title="For You" />
      <ScrollableXView items={bookData?.data} title="Recently Played" />
    </div>
  );
};

export default BooksPage;
