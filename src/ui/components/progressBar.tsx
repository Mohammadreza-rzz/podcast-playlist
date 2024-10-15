"use client";
import React, { useState } from "react";
import {
  NextIcon,
  ForwardIcon,
  BackwardIcon,
  PlayIcon,
  PuasIcon,
  JumpToStart,
} from "@/ui/components/icons";
import IconButton from "./iconButton";

interface IProps {}

const MusicProgressBar = () => {
  const [play, setPlay] = useState<boolean>(false);
  const playClickhandler = () => {
    setPlay((preState) => !preState);
  };
  return (
    <div className="mt-8">
      <span className="inline-block w-full bg-gray-700/90 h-2.5 rounded-full relative">
        <span className="inline-block w-3/5 bg-white h-2.5 rounded-full absolute top-0 left-0">
          <span className="inline-block w-5 h-5 rounded-full absolute top-2/4 -translate-y-2/4 -translate-x-2 left-full bg-white z-30"></span>
        </span>
      </span>
      <div className="flex justify-between mt-1.5">
        <p className="text-paragraph_md text-white">04:24</p>
        <p className="text-paragraph_md text-white">17:39</p>
      </div>
      <div className="flex justify-between mt-5">
        <IconButton>
          <JumpToStart classnames="h-7 w-7 fill-white" />
        </IconButton>
        <IconButton>
          <BackwardIcon classnames="h-7 w-7 fill-white" />
        </IconButton>
        <IconButton
          containerClass="bg-white p-4 rounded-full"
          clickHandler={playClickhandler}
        >
          {play ? (
            <PlayIcon classnames="h-7 w-7 " />
          ) : (
            <PuasIcon classnames="h-7 w-7" />
          )}
        </IconButton>
        <IconButton>
          <ForwardIcon classnames="h-7 w-7 fill-white" />
        </IconButton>
        <IconButton>
          <NextIcon classnames="h-7 w-7 fill-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default MusicProgressBar;
