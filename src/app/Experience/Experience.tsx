import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ExperienceData } from "./ExperienceData";
import Image, { StaticImageData } from "next/image";

interface ExperienceItem {
  logo: StaticImageData;
  title: string;
  job_title: string;
  description: string;
  duration: string;
  tech_stack: StaticImageData[];
}

export default function Experience() {
  const data = ExperienceData as ExperienceItem[];

  return (
    <Accordion type="single" collapsible className="w-full ml-20 mr-40 mt-10">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          value={"item-" + index + 1}
          className="border rounded-xl border-white p-4"
        >
          <AccordionTrigger className="flex place-items-start">
            <div className="flex gap-8 ml-4">
              <Image src={item.logo} alt="" className="size-25" />
              <div className="flex flex-col">
                <h1 className="font-bold text-[30px]">{item.title}</h1>
                <h4 className="font-light text-[22px]">{item.job_title}</h4>
                <h4 className="font-light text-[22px]">{item.duration}</h4>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="p-4">
            <p className="text-[24px] pb-3">{item.description}</p>
            <div className="flex gap-8">
              {item.tech_stack.map((item, index) => (
                <div key={index} className="bg-[#6e6e6e] rounded-[22px] p-2">
                  <Image src={item} className="size-15" alt="" />
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
