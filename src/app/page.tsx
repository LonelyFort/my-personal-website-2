import SemiCircleDisplay from "./SemiCircleDisplay";

import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
// import { Info, Phone } from "lucide-react";
// import WorkBag from "../../resources/images/svg/work-bag.svg";
// import Project from "../../resources/images/svg/project.svg";
// import Image from "next/image";

export default function App() {
  return (
    <div>
      {/*Desktop*/}
      <div className="xl:flex flex-col hidden h-full w-full">
        <div className="flex justify-end px-6 py-4 w-full gap-8">
          <LinkedInLogoIcon className="fill-white w-15 h-15" />
          <GitHubLogoIcon className="fill-white w-15 h-15" />
          Dropdown
        </div>

        <SemiCircleDisplay />

        {/* <div className="flex flex-col gap-2 absolute bottom-40 left-20 drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#967171] font-ibm">
          About
          <Info className="w-20 h-20 stroke-[1.5px]"/>
        </div>

        <div className="flex flex-col gap-2 absolute left-50 bottom-130 drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#838F6B] font-ibm">
          Experience
          <Image src={WorkBag} className="w-25 h-25" alt=""/>
        </div>

        <div className="flex flex-col gap-2 absolute right-50 bottom-130 drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#7095A2] font-ibm">
          Projects
          <Image src={Project} className="w-25 h-25" alt=""/>
        </div>

        <div className="flex flex-col gap-2 absolute bottom-40 right-20 drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#C27BB0] font-ibm">
          Contacts
          <Phone className="w-20 h-20 stroke-[1.5px]"/>
        </div>

        <div className="flex flex-col gap-2 absolute bottom-40 left-20 drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#967171] font-ibm">
          About
          <Info className="w-20 h-20 stroke-[1.5px]"/>
        </div>

        <div className="flex flex-col gap-2 absolute left-50 bottom-130 drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#838F6B] font-ibm">
          Experience
          <Image src={WorkBag} className="w-25 h-25" alt=""/>
        </div>

        <div className="flex flex-col gap-2 absolute right-50 bottom-130 drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#7095A2] font-ibm">
          Projects
          <Image src={Project} className="w-25 h-25" alt=""/>
        </div>

        <div className="flex flex-col gap-2 absolute bottom-40 right-20 drop-shadow-xl drop-shadow-[#000000] rounded-[45px] border-4 border-black px-10 py-6 text-[45px] place-items-center bg-[#C27BB0] font-ibm">
          Contacts
          <Phone className="w-20 h-20 stroke-[1.5px]"/>
        </div> */}
      </div>

      {/*Mobile */}
      <div className="xl:hidden">test3</div>
    </div>
  );
}
