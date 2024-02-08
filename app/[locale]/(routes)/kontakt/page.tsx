import { PageHeader } from "@/components/PageHeader";
import { useTranslations } from "next-intl";
import React from "react";

const KontaktPage = ({ params }: { params: { locale: "hr" | "en" } }) => {
  const t = useTranslations("Contact");
  const locale = params.locale;
  return (
    <div>
      <PageHeader>{t("pageTitle")}</PageHeader>
      <div className="container flex flex-col gap-[40px] md:gap-[60px] justify-center items-center py-[50px]">
        <h1 className="text-center text-headingMMobile md:text-headingM font-bold">
          {t("t1-1")} <br /> {t("t1-2")}
        </h1>

        <div className="flex flex-col gap-[30px] md:gap-[40px]">
          <div className="text-center">
            <p className="uppercase text-primary-100 text-headingS mb-[10px]">
              tel
            </p>
            <a href="tel:+38513909530" className="text-headingS link-hover">
              +385 1 3909 530
            </a>
          </div>
          <div className="text-center">
            <p className="uppercase text-primary-100 text-headingS mb-[10px]">
              fax
            </p>
            <a href="tel:+38513909530" className="text-headingS link-hover">
              +385 1 3909 530
            </a>
          </div>
          <div className="text-center">
            <p className="uppercase text-primary-100 text-headingS mb-[10px]">
              e-mail
            </p>
            <a href="mailto:info@odgg.hr" className="text-headingS link-hover">
              info@odgg.hr
            </a>
          </div>
          <div className="text-center">
            <p className="uppercase text-primary-100 text-headingS mb-[10px]">
              {locale === "hr" ? "adresa" : "adress"}
            </p>
            <p className="text-headingS ">Trg žrtava fašizma 5, Zagreb</p>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.031665735272!2d15.985389476644627!3d45.810624210257565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e70a74dd73%3A0x6eb910088351b74f!2sODVJETNI%C4%8CKO%20DRU%C5%A0TVO%20GLAMUZINA%20%26%20GRO%C5%A0ETA!5e0!3m2!1sen!2shr!4v1707381019704!5m2!1sen!2shr"
          width="800"
          height="600"
          className=" w-full h-[500px] md:h-[700px]"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default KontaktPage;
