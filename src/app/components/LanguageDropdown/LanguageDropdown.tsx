import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageDropdown() {
  return (
    <Select>
      <SelectTrigger className="w-[120px] !h-15 border-2 border-white rounded-[122px] bg-[#2B2B2B] !text-[30px] pl-5 hover:cursor-pointer">
        <SelectValue placeholder="EN" className="font-ibm" />
      </SelectTrigger>
      <SelectContent className="bg-[#2B2B2B] text-white">
        <SelectGroup>
          <SelectItem value="EN" className="!text-[30px]">EN</SelectItem>
          {/* <SelectItem value="CN" className="!text-[30px]">CN</SelectItem>
          <SelectItem value="JP" className="!text-[30px]">JP</SelectItem> */}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
