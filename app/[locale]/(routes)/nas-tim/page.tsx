import { PageHeader } from "@/components/PageHeader";
import { getEmployees } from "@/sanity/lib/queries";
import { useTranslations } from "next-intl";
import React from "react";
import { getTranslations } from "next-intl/server";
import { EmployeeSectionTitle } from "@/components/OurTeamPage/EmployeeSectionTitle";
import EmployeeCard from "@/components/OurTeamPage/EmployeeCard";
import { Metadata } from "next/types";
export const metadata: Metadata = {
  title: "Tim",
  description:
    "Odvjetničko društvo Glamuzina i Grošta čine vrhunski odvjetnici puni iskustva.",
};
const NasTimPage = async ({ params }: { params: { locale: "hr" | "en" } }) => {
  const t = await getTranslations("OurTeam");

  const employees = await getEmployees();

  const seniorPartneri =
    employees &&
    employees.filter((em) => em.companyPosition.hr_text === "Senior Partner");
  const juniorPartneri =
    employees &&
    employees.filter((em) => em.companyPosition.hr_text === "Junior Partner");
  const odvjetnici =
    employees &&
    employees.filter((em) => em.companyPosition.hr_text === "Odvjetnik");
  const vjezbenici =
    employees &&
    employees.filter(
      (em) => em.companyPosition.hr_text === "Odvjetnicki Vjezbenik"
    );
  const administracija =
    employees &&
    employees.filter((em) => em.companyPosition.hr_text === "Administracija");

  return (
    <div>
      <PageHeader>{t("pageTitle")}</PageHeader>

      <main className="py-[80px]">
        {employees && (
          <div className="container flex flex-col gap-[80px]">
            {seniorPartneri.length > 0 && (
              <div>
                <EmployeeSectionTitle>senior partneri</EmployeeSectionTitle>
                <div className="employee-showcase-big-grid">
                  {seniorPartneri.map((item) => {
                    return (
                      <EmployeeCard
                        key={item._id}
                        data={item}
                        type="big"
                        locale={params.locale}
                      />
                    );
                  })}
                </div>
              </div>
            )}
            <div>
              {juniorPartneri.length > 0 && (
                <div>
                  <EmployeeSectionTitle>{t("jp_title")}</EmployeeSectionTitle>
                  <div className="employee-showcase-big-grid">
                    {juniorPartneri.map((item) => {
                      return (
                        <EmployeeCard
                          key={item._id}
                          data={item}
                          type="big"
                          locale={params.locale}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div>
              {odvjetnici.length > 0 && (
                <div>
                  <EmployeeSectionTitle>{t("odv_title")}</EmployeeSectionTitle>
                  <div className="employee-showcase-big-grid">
                    {odvjetnici.map((item) => {
                      return (
                        <EmployeeCard
                          key={item._id}
                          data={item}
                          type="big"
                          locale={params.locale}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div>
              {" "}
              {vjezbenici && (
                <div>
                  <EmployeeSectionTitle>{t("vjez_title")}</EmployeeSectionTitle>
                  <div className="employee-showcase-small-grid">
                    {vjezbenici.map((item) => {
                      return (
                        <EmployeeCard
                          key={item._id}
                          data={item}
                          type="basic"
                          locale={params.locale}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div>
              {administracija && (
                <div>
                  <EmployeeSectionTitle>{t("adm_title")}</EmployeeSectionTitle>
                  <div className="employee-showcase-big-grid">
                    {administracija.map((item) => {
                      return (
                        <EmployeeCard
                          key={item._id}
                          data={item}
                          type="small"
                          locale={params.locale}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default NasTimPage;
