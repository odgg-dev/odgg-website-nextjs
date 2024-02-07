import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-foreground py-[45px] px-4">
      <div className="flex flex-col justify-center gap-[40px] md:gap-[60px] items-center w-full">
        <Image
          src="/assets/images/logo-nav.png"
          width={365}
          height={50}
          alt="Glamuzina & Groseta logo"
        />
        <p className="text-white text-[12px] opacity-75 text-center ">
          {t("rights")}
        </p>
      </div>
    </footer>
  );
};
