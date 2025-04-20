import Project from "../../../resources/images/png/Project1.png";
import Donut from "../../../resources/images/png/donut.png";
import Image from "next/image";

import React from "../../../resources/images/svg/react-icon.svg";
import TypeScript from "../../../resources/images/svg/typescript-icon.svg";
import Python from "../../../resources/images/svg/python-icon.svg";

import Blender from "../../../resources/images/svg/blender-icon.svg";

export default function Projects() {
  const techStack = [React, TypeScript, Python];

  return (
    <div className="w-full flex flex-grow gap-20 h-fit mt-10 ml-10 mr-10 place-content-center">
      <div className="flex flex-col border border-white p-6 rounded-xl min-w-[500px] max-w-[650px] flex-grow">
        <div className="w-full p-4 text-[40px] font-bold text-center">
          Tech Projects
        </div>
        <div className="w-full h-[400px] bg-gray-400 relative rounded-xl">
          <Image
            src={Project}
            alt=""
            fill={true}
            className="rounded-xl border-3 border-white"
          />
        </div>
        <div className="py-4 flex-1 overflow-y-auto">
          <h2 className="text-[30px] font-bold">
            Email Confirmation Telegram Bot
          </h2>
          <br />
          <p className="text-[25px]">
            This application intends to mimic the behaviour of sending
            confirmation email to students after they have entered their school
            email address into the input bar, but deployed onto Telegram Mini
            App via a Telegram Bot.
          </p>
          <br />
          <div className="flex gap-8 py-2">
            {techStack.map((item, index) => (
              <div key={index} className="bg-[#6e6e6e] rounded-[22px] p-2">
                <Image src={item} className="size-15" alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 border border-white rounded-xl min-w-[500px] max-w-[650px] flex-grow">
        <div className="w-full p-4 text-[40px] font-bold text-center">
          Graphic Design Projects
        </div>
        <div className="w-full h-[400px] bg-gray-400 relative rounded-xl">
          <Image
            src={Donut}
            alt=""
            fill={true}
            className="rounded-xl border-1 border-white"
          />
        </div>
        <div className="py-4 flex-1 overflow-y-auto">
          <h2 className="text-[30px] font-bold">Donut Project (In Progress)</h2>
          <br />
          <p className="text-[25px]">
            Part of Blender tutorial by Blender Guru. Model mostly finished.
            Project at pause until I get a better GPU for rendering.
          </p>
          <br />
          <div className="bg-[#6e6e6e] rounded-[22px] p-2 w-fit">
            <Image src={Blender} className="size-15" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
