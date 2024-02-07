import { PageHeader } from "@/components/PageHeader";
import { useTranslations } from "next-intl";
import React from "react";

const PravneUslugePage = () => {
  const t = useTranslations("LegalServices");
  return (
    <div>
      <PageHeader>{t("pageTitle")}</PageHeader>
    </div>
  );
};

export default PravneUslugePage;
