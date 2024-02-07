"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import { navigationPaths } from "@/constants/navigationPaths";
import Link from "next/link";
import { ChangeLangButton } from "./ChangeLangButton";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export const MobileNavigation = ({ lang }: { lang: "hr" | "en" }) => {
  const pathName = usePathname();
  const langPathname =
    lang === "en" ? pathName.replace("en", "hr") : pathName.replace("hr", "en");
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="max-w-[250px] w-full">
        <div>
          <div className="flex flex-col p-4 pt-[40px] items-center gap-[34px] mb-[60px] text-center text-navMobile">
            {navigationPaths[lang].map((navItem) => {
              return (
                <SheetClose asChild key={navItem.label + navItem.path}>
                  <Link
                    href={navItem.path}
                    className={cn(
                      " uppercase link-hover ",
                      pathName === `/${lang}/${navItem.path}` &&
                        "text-primary-100 font-medium"
                    )}
                  >
                    {navItem.label}
                  </Link>
                </SheetClose>
              );
            })}
          </div>
          <SheetClose asChild>
            <div className="flex justify-center items-center">
              <ChangeLangButton className="text-black" />
            </div>
          </SheetClose>
        </div>
        <div className="absolute left-[-260px] top-[50%] z-50 -rotate-90">
          <Image
            src="/assets/images/logo-nav.png"
            width={450}
            height={100}
            alt="Glamuzina & Groseta logo"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
};
