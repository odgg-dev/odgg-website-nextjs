import { ChangeLangButton } from "@/components/ChangeLangButton";
import HomepageNavigation from "@/components/HomepageNavigation";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

export default function HomePage() {
  const t = useTranslations("Index");
  const fText = useTranslations("Footer");
  const locale = useLocale();
  return (
    <div className="min-h-screen h-full w-screen ">
      <div className="fixed w-full min-h-screen h-full left-0 top-0 bottom-0 z-[-10] bg-black ">
        <Image
          fill
          src="/assets/images/homepage-hero-bg.png"
          loading="eager"
          alt="background image"
          className="object-cover relative filter brightness-[.3] h-full w-full "
        />
      </div>
      <div className="flex flex-col gap-[40px] md:gap-[80px]  pt-[60px] md:pt-[80px] lg:pt-[140px] items-center text-white container opacity-80 mb-[60px]">
        <Image
          src="/assets/images/logo-big.png"
          loading="eager"
          alt="Glamuzina & Groseta logo"
          height={104}
          width={760}
        />
        <div className="text-center text-heroIntroMobile lg:text-heroIntro font-display flex flex-col gap-[20px]">
          <p>{t("introText1")}</p>
          <p>{t("introText2")}</p>
        </div>
      </div>
      <div className="mx-auto max-w-[1200px] flex justify-center items-center">
        <HomepageNavigation lang={locale} />
      </div>
      <div className="text-center py-[50px] md:pt-[100px] ">
        <ChangeLangButton />
      </div>
      <div className=" justify-center absolute hidden md:flex md:bottom-[30px] left-[50%] -translate-x-1/2 text-white text-muted-foreground">
        <p>{fText("rights")}</p>
      </div>
    </div>
  );
}
