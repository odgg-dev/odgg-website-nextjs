"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

export const ChangeLangButton = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();
  console.log(router, pathName);
  const handleOnClick = () => {
    if (locale === "hr") {
      const newPathname = pathName.replace("hr", "en");
      router.push(newPathname);
    }
    if (locale === "en") {
      const newPathname = pathName.replace("en", "hr");
      router.push(newPathname);
    }
  };
  return (
    <Button
      onClick={handleOnClick}
      className="bg-transparent text-white border-2 border-primary rounded-full px-[40px] uppercase hover:text-primary-100 transition hover:bg-transparent shadow-md"
    >
      {locale === "hr" ? "english" : "hrvatski"}
    </Button>
  );
};
