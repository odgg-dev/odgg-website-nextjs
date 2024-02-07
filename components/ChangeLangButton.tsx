"use client";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";

export const ChangeLangButton = ({
  type = "big",
  className = "",
}: {
  type?: "big" | "small";
  className?: string;
}) => {
  const locale = useLocale();
  const router = useRouter();
  const pathName = usePathname();
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
  if (type === "big") {
    return (
      <Button
        onClick={handleOnClick}
        className={cn(className)}
        variant="langMd"
        size="lg"
      >
        {locale === "hr" ? "english" : "hrvatski"}
      </Button>
    );
  }
  if (type === "small") {
    return (
      <Button size="sm" variant="langSm" onClick={handleOnClick}>
        {locale === "hr" ? "en" : "hr"}
      </Button>
    );
  }
};
