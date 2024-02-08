import { IServciesData } from "@/constants";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export const ServicesAccordion = ({ data }: { data: IServciesData[] }) => {
  return (
    <Accordion type="multiple" className="flex flex-col gap-[50px]">
      {data.map((data) => {
        return (
          <AccordionItem
            value={data.id}
            key={data.id}
            className="border-[1px] border-primary py-4 px-[20px] rounded-xl"
          >
            <AccordionTrigger className=" text-headingMMobile md:text-headingM ">
              <div className="mr-[40px]">{data.title}</div>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="flex flex-col gap-[12px] text-bodyM pl-2 pt-[10px] md:pt-[20px]">
                {data.items.map((item, i) => {
                  return (
                    <li key={i + item} className="relative pl-[15px]">
                      <span className="absolute left-0 top-[12px] w-[5px] h-[5px] rounded-full bg-primary"></span>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
