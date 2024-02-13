import { PageHeader } from "@/components/PageHeader";
import { getEmployees } from "@/sanity/lib/queries";
import { useTranslations } from "next-intl";
import React from "react";
import { getTranslations } from "next-intl/server";
import { EmployeeSectionTitle } from "@/components/OurTeamPage/EmployeeSectionTitle";
import EmployeeCard from "@/components/OurTeamPage/EmployeeCard";
const NasTimPage = async () => {
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
        <div className="container">
          <EmployeeSectionTitle>senior partneri</EmployeeSectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2">
            {seniorPartneri.map((item) => {
              return <EmployeeCard key={item._id} data={item} type="big" />;
            })}
          </div>
        </div>
        <div>Junior Partneri</div>
        <div>Odvjetnici</div>
        <div>Odvjetnicki Vjezbenici</div>
        <div>Administracija</div>
      </main>
    </div>
  );
};

export default NasTimPage;
