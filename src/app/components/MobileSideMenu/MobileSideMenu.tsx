import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";

interface MobileSideMenuProps {
    currentSection: string;
    handleSectionChange: (section: string) => void;
}

const MobileSideMenu : React.FC<MobileSideMenuProps> = ({

}) => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Menu height={47} width={47} strokeWidth={1} />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle/>
                    <SheetDescription />
                </SheetHeader>
                <div className="grid gap-8">
                    Testing 1 2 3...
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default MobileSideMenu;