import { PageHeader } from "@/components/PageHeader";
import { ServicesAccordion } from "@/components/ServicesAccordion";
import { SERVICES } from "@/constants";
import { useTranslations } from "next-intl";
import { Metadata } from "next/types";
import React from "react";
export const metadata: Metadata = {
  title: "Pravne Usluge",
  description:
    "Nudimo razne pravne usluge, neke od njih: TRGOVAČKO PRAVO I PRAVO DRUŠTAVA , BANKARSTVO, FINANCIJE I TRŽIŠTA KAPITALA , NAPLATA POTRAŽIVANJA , RJEŠAVANJE SPOROVA",
};
const PravneUslugePage = ({ params }: { params: { locale: "en" | "hr" } }) => {
  const t = useTranslations("LegalServices");

  return (
    <div>
      <PageHeader>{t("pageTitle")}</PageHeader>
      <main className="container py-[100px] md:py-[150px]">
        <ServicesAccordion data={SERVICES[params.locale]} />
      </main>
    </div>
  );
};

export default PravneUslugePage;
