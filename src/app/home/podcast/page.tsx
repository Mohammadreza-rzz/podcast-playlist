import React from "react";
import { TopSectionView, ScrollableXView } from "@/ui/view";
import { getPlayList } from "@/utils/apiFunc";
import { playListItemType } from "@/types";

const Podcastpage: React.FC = async () => {
  const podcastData = await getPlayList("podcast");
  return (
    <div className="px-8 overflow-y-auto h-[888px]">
      <TopSectionView
        items={Array.from(
          { length: 4 },
          (_, index: number) => podcastData.data[index]
        )}
      />
      <ScrollableXView items={podcastData?.data} title="For You" />
      <ScrollableXView items={podcastData?.data} title="Recently Played" />
    </div>
  );
};

export default Podcastpage;
