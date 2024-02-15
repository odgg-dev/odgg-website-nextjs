import { cn } from "@/lib/utils";
import { TLocaleLang } from "@/types";
import React from "react";
interface IEmployeeTitle {
  locale: TLocaleLang;
  name: string;
  surname: string;
  occupation: {
    hr_text: string;
    en_text: string;
  };
  size?: "big" | "sm";
}
export const EmployeeTitle = ({
  locale,
  name,
  surname,
  occupation,
  size = "big",
}: IEmployeeTitle) => {
  if (size === "sm") {
    return (
      <div className=" font-display text-center">
        <p
          className={
            "text-headingMMobile md:text-headingM  font-medium mb-[10px]"
          }
        >
          {name} {surname}
        </p>
        <p className="text-headingS font-regular text-primary uppercase">
          {occupation[`${locale}_text`]}
        </p>
      </div>
    );
  }
  return (
    <div className=" font-display">
      <p className="text-[35px] md:text-[40px] leading-[60px]  font-medium ">
        {name} {surname}
      </p>
      <p className="text-headingS font-normal text-primary uppercase">
        {occupation[`${locale}_text`]}
      </p>
    </div>
  );
};
