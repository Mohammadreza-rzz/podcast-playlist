"use client";
import React, { useState, useRef } from "react";
import { Poster } from "@/ui/view";
import { playListItemType } from "@/types";
interface IProps {
  title: string;
  items?: playListItemType[];
}

const ScrollableXView: React.FC<IProps> = ({ title = "", items }) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const [velocity, setVelocity] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inertiaRef = useRef<number | null>(null);

  const handleMouseDown = (e: any) => {
    setIsDown(true);
    const container = containerRef.current;
    if (container) {
      if (inertiaRef.current) {
        cancelAnimationFrame(inertiaRef.current);
      }
      setStartX(e.pageX - container.offsetLeft);
      setScrollLeft(container.scrollLeft);
    }
  };

  const stopDragging = () => {
    setIsDown(false);
    applyInertia();
  };

  const handleMouseMove = (e: any) => {
    if (!isDown) return;
    e.preventDefault();
    const container = containerRef.current;
    if (container) {
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 1.5;
      setVelocity(walk);
      container.scrollLeft = scrollLeft - walk;
    }
  };

  const applyInertia = () => {
    const container = containerRef.current;
    if (container) {
      const friction = 0.95;
      let currentVelocity = velocity;

      const animate = () => {
        currentVelocity *= friction;
        if (Math.abs(currentVelocity) < 0.5) return;

        container.scrollLeft -= currentVelocity;
        inertiaRef.current = requestAnimationFrame(animate);
      };

      inertiaRef.current = requestAnimationFrame(animate);
    }
  };

  return (
    <div className="text-heading_sm text-gray-100 mt-10 pb-10 ">
      <h2>{title}</h2>
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={stopDragging}
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
        className="w-[1478px] flex space-x-3 overflow-x-scroll swipeable-x  whitespace-nowrap mt-5"
      >
        {!!items?.length &&
          items?.map((item) => (
            <Poster
              isSaved={item?.isSaved}
              title={item?.title}
              id={item?.id}
              srcImage={item?.poster}
              key={item?.id}
              subTitle={item?.by}
              type={item?.type}
            />
          ))}
      </div>
    </div>
  );
};

export default ScrollableXView;
