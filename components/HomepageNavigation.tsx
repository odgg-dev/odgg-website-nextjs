"use client";
import { navigationPaths } from "@/constants/navigationPaths";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const HomepageNavigation = ({ lang }: { lang: string }) => {
  return (
    <nav className="w-full flex justify-center text-white z-[20]">
      <div className="grid max-md:gap-[26px] grid-cols-2 md:flex w-full justify-around flex-wrap ">
        {navigationPaths[lang === "hr" ? "hr" : "en"].map((navItem, i) => {
          if (navItem.path === "/") return null;
          return (
            <div
              key={navItem.path + Math.random()}
              className={cn(
                "flex-1 flex items-center justify-center md:px-[60px] py-[5px] text-nav text-[20px]  uppercase text-center border-primary  border-l-2  md:first-of-type:border-transparent ",
                i % 2 !== 0 && "max-md:border-transparent"
              )}
            >
              <Link
                href={`${lang}/${navItem.path}`}
                className="w-full cursor-pointer py-2 link-hover"
              >
                {navItem.label}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default HomepageNavigation;
