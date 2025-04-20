import WorkBag from "../../../../resources/images/svg/work-bag.svg";
import Project from "../../../../resources/images/svg/project.svg";
import Image from "next/image";
import { Phone, Info } from "lucide-react";

interface SideContainerProps {
  currentSection: string;
  handleSectionChange: (section: string) => void;
}

const SideContainer: React.FC<SideContainerProps> = ({
  currentSection,
  handleSectionChange,
}) => {
  function emptySection() {
    return <div className="w-[84.86px] h-[84px]" />;
  }

  return (
    <div className="flex flex-col gap-2 border border-white w-[110px] h-[385px] rounded-[20px] ml-10 p-3">
      {currentSection === "about" ? (
        emptySection()
      ) : (
        <div
          className="flex flex-col drop-shadow-md drop-shadow-[#000000] rounded-[20px] border-4 border-black p-3 place-items-center bg-[#967171] hover:cursor-pointer"
          onClick={() => handleSectionChange("about")}
        >
          <Info className="w-13 h-13 stroke-[2px]" />
        </div>
      )}
      {currentSection === "experience" ? (
        emptySection()
      ) : (
        <div className="flex flex-col drop-shadow-md drop-shadow-[#000000] rounded-[20px] border-4 border-black p-3 place-items-center bg-[#838F6B] hover:cursor-pointer"
        onClick={() => handleSectionChange("experience")}>
          <Image src={WorkBag} className="w-13 h-13" alt="" />
        </div>
      )}
      {currentSection === "projects" ? (
        emptySection()
      ) : (
        <div className="flex flex-col drop-shadow-md drop-shadow-[#000000] rounded-[20px] border-4 border-black p-3 place-items-center bg-[#7095A2] hover:cursor-pointer"
        onClick={() => handleSectionChange("projects")}>
          <Image src={Project} className="w-13 h-13" alt="" />
        </div>
      )}
      {currentSection === "contacts" ? (
        emptySection()
      ) : (
        <div className="flex flex-col drop-shadow-md drop-shadow-[#000000] rounded-[20px] border-4 border-black p-3 place-items-center bg-[#C27BB0] hover:cursor-pointer"
        onClick={() => handleSectionChange("contacts")}>
          <Phone className="w-13 h-13 stroke-[2px]" />
        </div>
      )}
    </div>
  );
};

export default SideContainer;
