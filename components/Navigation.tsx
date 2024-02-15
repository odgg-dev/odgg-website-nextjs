"use client";
import { navigationPaths } from "@/constants/navigationPaths";
import { Menu } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChangeLangButton } from "./ChangeLangButton";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { MobileNavigation } from "./MobileNavigation";

export const Navigation = ({ localLang }: { localLang: "en" | "hr" }) => {
  const router = useRouter();
  const pathName = usePathname();
  
  const handleLinkClick = (path: string) => {
    router.push(`${localLang}path`);
  };
  return (
    <div className="absolute left-0 top-[50px] md:top-[75px] z-[20] w-full h-[30px]">
      <div className="container flex items-center gap-4 justify-between px-4 lg:px-6 ">
        <div className="max-w-[243px] md:max-w-[489px] max-xl:flex-1">
          <Link href="/">
            <Image
              src="/assets/images/logo-nav.png"
              width={489}
              height={62}
              alt="Glamuzina & groseta odvjetnicko drustvo logo"
            />
          </Link>
        </div>
        <nav>
          <div className="md:hidden">
            <MobileNavigation lang={localLang} />
          </div>
          <div className="hidden md:flex items-center justify-center gap-4">
            <ul className=" flex items-center  text-white  ">
              {navigationPaths[localLang].map((navItem) => {
                return (
                  <li
                    key={navItem.path + navItem.label}
                    className={cn("navLink link-hover text-nav")}
                  >
                    <Link
                      href={`${navItem.path}`}
                      className={cn(
                        "opacity-70 uppercase  px-2  xl:px-[16px]  ",
                        pathName === `/${localLang}/${navItem.path}` &&
                          " text-primary-100  opacity-100"
                      )}
                    >
                      {navItem.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ChangeLangButton type="small" />
          </div>
        </nav>
      </div>
    </div>
  );
};
