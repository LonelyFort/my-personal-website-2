import WorkBag from "../../../../resources/images/svg/work-bag.svg";
import Project from "../../../../resources/images/svg/project.svg";
import Eject from "../../../../resources/images/svg/eject.svg";
import Image from "next/image";
import { Phone, Info } from "lucide-react";

interface SectionPlayerProps {
  currentSection: string;
}

const SectionPlayer: React.FC<SectionPlayerProps> = ({ currentSection }) => {

  const displaySectionPlayed = (sectionPlaying: string) => {
    const aboutSection = (
      <div className="flex flex-col absolute left-[37px] drop-shadow-md drop-shadow-[#000000] rounded-[20px] border-4 border-black p-3 place-items-center bg-[#967171]">
        <Info className="w-13 h-13 stroke-[2px]" />
      </div>
    );

    const expSection = (
        <div className="flex flex-col absolute left-[37px] drop-shadow-md drop-shadow-[#000000] rounded-[20px] border-4 border-black p-3 place-items-center bg-[#838F6B]">
          <Image src={WorkBag} className="w-13 h-13" alt="" />
        </div>
    )

    const projectsSection = (
        <div className="flex flex-col absolute left-[37px] drop-shadow-md drop-shadow-[#000000] rounded-[20px] border-4 border-black p-3 place-items-center bg-[#7095A2]">
          <Image src={Project} className="w-13 h-13" alt="" />
        </div>
    )

    const contactsSection = (
        <div className="flex flex-col absolute left-[37px] drop-shadow-md drop-shadow-[#000000] rounded-[20px] border-4 border-black p-3 place-items-center bg-[#C27BB0]">
          <Phone className="w-13 h-13 stroke-[2px]" />
        </div>
    )

    const defaultSection = (
        <div></div>
    )

    return sectionPlaying === "about"
        ? aboutSection
        : sectionPlaying === "experience"
        ? expSection
        : sectionPlaying === "projects"
        ? projectsSection
        : sectionPlaying === "contactsSection"
        ? contactsSection
        : defaultSection;
  };

  return (
    <div className="relative flex justify-around place-items-center border border-white rounded-[20px] w-[320px] h-[140px]">
      <div className="border border-white rounded-[20px] w-[90px] h-[90px]" />
      {displaySectionPlayed(currentSection)}
      <div className="border border-white rounded-[20px] w-[90px] h-[90px]" />
      <Image src={Eject} className="absolute right-[39px] h-20 w-20" alt=""/>
    </div>
  );
};

export default SectionPlayer;
