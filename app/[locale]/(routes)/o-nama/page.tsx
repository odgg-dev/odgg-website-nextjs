import { ChangeLangButton } from "@/components/ChangeLangButton";
import { PageHeader } from "@/components/PageHeader";
import { useTranslations } from "next-intl";
import React from "react";

const ONamaPage = () => {
  const t = useTranslations("About");
  return (
    <div>
      <PageHeader>{t("pageTitle")}</PageHeader>

      <div>
        <ChangeLangButton />
      </div>
    </div>
  );
};

export default ONamaPage;
