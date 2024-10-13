import React from "react";
import { TopSectionView, ScrollableXView } from "@/ui/view";

const Podcastpage: React.FC = () => {
  return (
    <div className="px-8 overflow-y-auto h-[888px]">
      <TopSectionView />
      <ScrollableXView title="For You" />
      <ScrollableXView title="Recently Played" />
    </div>
  );
};

export default Podcastpage;
