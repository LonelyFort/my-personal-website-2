"use client";

import { useState, useEffect } from "react";
import { Info, Phone } from "lucide-react";
import WorkBag from "../../resources/images/svg/work-bag.svg";
import Project from "../../resources/images/svg/project.svg";
import Image from "next/image";

export default function SemiCircleDisplay() {
  const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleWindowResize();

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const maxWidth = Math.min(windowSize.width * 0.8, 1280);
    const maxHeight = Math.min(windowSize.height * 0.5, 1000);

    setContainerSize({
      width: maxWidth,
      height: maxHeight,
    });
  }, [windowSize]);

  const radius = Math.min(containerSize.width / 2, containerSize.height) * 0.9;
  const arcDegrees = 180;
  const arcRadians = (arcDegrees * Math.PI) / 180;
  const itemSize = Math.max(Math.min(radius * 0.2, 60), 36);
  const getX = (index: number) => {
    const angle = Math.PI - ((index - 1) / 3) * arcRadians;

    return radius * Math.cos(angle);
  };
  const getY = (index: number) => {
    const angle = Math.PI - ((index - 1) / 3) * arcRadians;
    return radius - radius * Math.sin(angle);
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="flex-grow w-full flex justify-center items-center p-4">
        <div
          className="relative"
          style={{
            width: `${containerSize.width}px`,
            height: `${containerSize.height}px`,
          }}
        >
          <div
            className="flex flex-col gap-2 absolute drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#967171] font-ibm"
            style={{
            //   width: `${itemSize}px`,
            //   height: `${itemSize}px`,
            //   fontSize: `${itemSize * 0.45}px`,
              left: `calc(50% + ${getX(1)}px)`,
              top: `${getY(1)}px`,
              transform: `translate(-${itemSize * 1.5}px, -${
                itemSize * 1.25
              }px)`,
            }}
          >
            About
            <Info className="w-20 h-20 stroke-[1.5px]" />
          </div>

          <div
            className="flex flex-col gap-2 absolute drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#838F6B] font-ibm"
            style={{
            //   width: `${itemSize}px`,
            //   height: `${itemSize}px`,
            //   fontSize: `${itemSize * 0.45}px`,
              left: `calc(50% + ${getX(2)}px)`,
              top: `${getY(2)}px`,
              transform: `translate(-${itemSize * 1.5}px, -${
                itemSize * 1.25
              }px)`,
            }}
          >
            Experience
            <Image src={WorkBag} className="w-25 h-25" alt="" />
          </div>

          <div
            className="flex flex-col gap-2 absolute drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#7095A2] font-ibm"
            style={{
            //   width: `${itemSize}px`,
            //   height: `${itemSize}px`,
            //   fontSize: `${itemSize * 0.45}px`,
              left: `calc(50% + ${getX(3)}px)`,
              top: `${getY(3)}px`,
              transform: `translate(-${itemSize * 1.5}px, -${
                itemSize * 1.25
              }px)`,
            }}
          >
            Projects
            <Image src={Project} className="w-25 h-25" alt="" />
          </div>

          <div
            className="flex flex-col gap-2 absolute drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#C27BB0] font-ibm"
            style={{
            //   width: `${itemSize}px`,
            //   height: `${itemSize}px`,
            //   fontSize: `${itemSize * 0.45}px`,
              left: `calc(50% + ${getX(4)}px)`,
              top: `${getY(4)}px`,
              transform: `translate(-${itemSize * 1.5}px, -${
                itemSize * 1.25
              }px)`,
            }}
          >
            Contacts
            <Phone className="w-20 h-20 stroke-[1.5px]" />
          </div>

        </div>
      </div>
    </div>
  );
}
