import { cn } from "@/lib/utils";
import React from "react";

export const ThinArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      width="38"
      height="20"
      viewBox="0 0 38 20"
      className={cn(className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.15161 0.855713L19.151 18.7434"
        stroke="#A76E21"
        stroke-linecap="round"
      />
      <path
        d="M37.0952 0.688437L19.0958 18.5761"
        stroke="#A76E21"
        stroke-linecap="round"
      />
    </svg>
  );
};
