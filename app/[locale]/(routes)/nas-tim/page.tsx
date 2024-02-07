import { PageHeader } from "@/components/PageHeader";
import { useTranslations } from "next-intl";
import React from "react";

const NasTimPage = () => {
  const t = useTranslations("OurTeam");
  return (
    <div>
      <PageHeader>{t("pageTitle")}</PageHeader>
    </div>
  );
};

export default NasTimPage;
