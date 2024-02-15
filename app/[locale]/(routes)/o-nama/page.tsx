import { ChangeLangButton } from "@/components/ChangeLangButton";
import { PageHeader } from "@/components/PageHeader";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: "O Nama",
  description:
    "Odvjetničko društvo Glamuzina & Grošeta d.o.o. pruža svojim klijentima šritoki raspon usluga iz razičitih grana prava. a interese svojih klijenata promiče pred domaćim sudovima i javnim tijelima, ali i domaćim i međunarodnim arbitražama.",
};
const ONamaPage = () => {
  const t = useTranslations("About");
  return (
    <div>
      <PageHeader>{t("pageTitle")}</PageHeader>

      <div className="container text-center  pt-[70px] md:pt-[90px] flex flex-col gap-[65px] md:gap-[90px] mb-[90px] md:mb-[185px] ">
        <p className="text-headingMMobile uppercase md:text-headingM text-primary-100 ">
          {t("t1")}
        </p>
        <div>
          <div className="max-w-[1093px] mx-auto mb-[45px] md:mb-[60px]">
            <h1 className=" text-headingLMobile md:text-headingL font-display">
              {t("n2-1")} <br />
              {t("n2-2")}
            </h1>
          </div>
          <div className=" mx-auto max-w-[1100px] text-center flex flex-col gap-[30px] leading-[30px] text-bodyM">
            <div>
              <p>{t("t3-1")}</p>
              <p>{t("t3-2")}</p>
              <p>{t("t3-3")}</p>
              <p>{t("t3-4")}</p>
              <p>{t("t3-5")}</p>
            </div>
            <div>
              <p>{t("t4-1")}</p>
              <p>{t("t4-2")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative md:pb-[50px] mb-[90px] md:mb-[115px]">
        <div className="relative container w-full md:px-0">
          <div className="md:absolute top-[-80px] md:h-[700px] w-full  md:max-w-[600px]  bg-primary/95 z-[10] p-[16px] md:p-[26px] text-headingMMobile md:text-headingM font-display text-white">
            <h4 className="uppercase mb-[8px] font-bold text-center md:text-start">
              {t("n5")}
            </h4>
            <p>{t("t5")}</p>
          </div>
        </div>
        <div className=" hidden md:block relative w-full h-[540px]">
          <Image
            src="/assets/images/about-mid-banner.png"
            width={1900}
            height={540}
            loading="lazy"
            alt="decorative banner "
            className="img-darken-filter h-full object-fit"
          />
        </div>
      </div>
      <div className="container text-center pb-[150px] md:pb-[250px] ">
        <h4 className="uppercase text-headingMMobile md:text-headingM font-display font-bold mb-[20px] md:mb-[30px]">
          {t("n6")}
        </h4>
        <p className="font-light text-bodyM">{t("t6")}</p>
      </div>
    </div>
  );
};

export default ONamaPage;
