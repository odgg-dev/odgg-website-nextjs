import { PageHeader } from "@/components/PageHeader";
import { useTranslations } from "next-intl";
import React from "react";

const KontaktPage = () => {
  const t = useTranslations("Contact");
  return (
    <div>
      <PageHeader>{t("pageTitle")}</PageHeader>
    </div>
  );
};

export default KontaktPage;
