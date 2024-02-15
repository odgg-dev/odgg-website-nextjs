import { imageBuilder } from "@/sanity/lib/imageBuilder";
import { IEmployeeData } from "@/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { EmployeeTitle } from "./EmployeeTitle";

const EmployeeCard = ({
  data,
  type = "basic",
  locale,
}: {
  data: IEmployeeData;
  type: "big" | "small" | "basic";
  locale: "en" | "hr";
}) => {
  const t = useTranslations("OurTeam");
  const {
    mainImage,
    name,
    surname,
    occupation,
    educations,
    areaOfPractices,
    languages,
    memberships,
    articles,
    proffesionalConferences,
    email,
  } = data;

  const imageUrl = mainImage
    ? imageBuilder.image(mainImage.asset).width(410).height(410).url()
    : "";
  if (type === "basic") {
    return (
      <div>
        {" "}
        <EmployeeTitle
          name={name}
          surname={surname}
          occupation={occupation}
          locale={locale}
          size="sm"
        />
      </div>
    );
  }
  if (type === "small") {
    return (
      <div className="w-full flex flex-col items-center gap-[40px] md:gap-[60px]  text-center">
        {" "}
        <div className="p-10 mb-[-50px]">
          {mainImage && (
            <Image
              src={imageUrl}
              width={410}
              height={410}
              alt={name + " " + surname}
              className="w-full h-full object-contain grayscale "
            />
          )}
        </div>
        <EmployeeTitle
          name={name}
          surname={surname}
          occupation={occupation}
          locale={locale}
        />
      </div>
    );
  }
  if (type === "big") {
    return (
      <div className="w-full flex flex-col items-center gap-[40px] md:gap-[50px]  text-center">
        {" "}
        <div className="p-10 mb-[-20px]">
          {mainImage && (
            <Image
              src={imageUrl}
              width={410}
              height={410}
              alt={name + " " + surname}
              className="w-full h-full object-contain grayscale "
            />
          )}
        </div>
        <EmployeeTitle
          name={name}
          surname={surname}
          occupation={occupation}
          locale={locale}
        />
        <div className="max-w-[420px] px-[20px] flex flex-col gap-[20px]">
          {educations && (
            <div>
              <p className="employee-info-item-title">{t("obrazovanje")}</p>
              <ul>
                {educations.map((item, i) => {
                  return <p key={item.en_text + i}>{item[`${locale}_text`]}</p>;
                })}
              </ul>
            </div>
          )}
          {areaOfPractices && (
            <div>
              <p className="employee-info-item-title">{t("podrucjaPrakse")}</p>
              <ul>
                {areaOfPractices.map((item, i) => {
                  return <p key={item.hr_text + i}>{item[`${locale}_text`]}</p>;
                })}
              </ul>
            </div>
          )}
          {languages && (
            <div>
              <p className="employee-info-item-title">{t("jezici")}</p>
              <ul>
                {languages.map((item, i) => {
                  return (
                    <p key={item.hr_title + i}>
                      {item[`${locale}_title`]} {t("jezik")}
                    </p>
                  );
                })}
              </ul>
            </div>
          )}
          {memberships && (
            <div>
              <p className="employee-info-item-title">{t("clanstva")}</p>
              <ul>
                {memberships.map((item, i) => {
                  return <p key={item.hr_text + i}>{item[`${locale}_text`]}</p>;
                })}
              </ul>
            </div>
          )}
          {articles && (
            <div>
              <p className="employee-info-item-title">{t("clanci")}</p>
              <ul>
                {articles.map((item, i) => {
                  return <p key={item.hr_text + i}>{item[`${locale}_text`]}</p>;
                })}
              </ul>
            </div>
          )}
          {proffesionalConferences && (
            <div>
              <p className="employee-info-item-title">{t("strucniSkupovi")}</p>
              <ul>
                {proffesionalConferences.map((item, i) => {
                  return <p key={item.hr_text + i}>{item[`${locale}_text`]}</p>;
                })}
              </ul>
            </div>
          )}
          {email && (
            <div className="">
              <p className="employee-info-item-title">{t("kontakt")}</p>
              <p>{email}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return <></>;
};

export default EmployeeCard;
