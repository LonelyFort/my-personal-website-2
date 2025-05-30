import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

interface MobileSideMenuProps {
  currentSection: string;
  handleSectionChange: (section: string) => void;
}

const MobileSideMenu: React.FC<MobileSideMenuProps> = ({
  currentSection,
  handleSectionChange,
}) => {
  function handleButtonClick(section: string) {
    if (currentSection === section) {
      return;
    }
    handleSectionChange(section);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu height={47} width={47} strokeWidth={1} />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle />
          <SheetDescription />
        </SheetHeader>
        <div className="grid gap-8 px-8">
          <button
            className="hover:bg-[#474747] rounded-[40px] focus:outline-none py-2"
            onClick={() => handleButtonClick("about")}
          >
            <h1 className="text-[30px]">About</h1>
          </button>
          <button
            className="hover:bg-[#474747] rounded-[40px] focus:outline-none py-2"
            onClick={() => handleButtonClick("experience")}
          >
            <h1 className="text-[30px]">Experience</h1>
          </button>
          <button
            className="hover:bg-[#474747] rounded-[40px] focus:outline-none py-2"
            onClick={() => handleButtonClick("projects")}
          >
            <h1 className="text-[30px]">Projects</h1>
          </button>
          <button
            className="hover:bg-[#474747] rounded-[40px] focus:outline-none py-2"
            onClick={() => handleButtonClick("contacts")}
          >
            <h1 className="text-[30px]">Contacts</h1>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideMenu;
