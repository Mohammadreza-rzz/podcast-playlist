import React from "react";
import Image from "next/image";

interface IProps {}

const Poster: React.FC<IProps> = () => {
  return (
    <div className="hover:opacity-60 transition-opacity duration-500 cursor-pointer min-w-[150px]">
      <Image
        src="/static/images/poster.jpg"
        width={150}
        height={150}
        alt="music-poster"
        className="w-[150px] h-[150px] object-cover rounded-xs overflow-hidden"
      />
      <div className="translate-y-1 !mr-auto">
        <h3 className="text-paragraph_xl text-[18px] mt-2 text-gray-100">
          Past Weekend
        </h3>
        <h5 className="text-paragraph_md text-gray-600">Theo Von</h5>
      </div>
    </div>
  );
};

export default Poster;
