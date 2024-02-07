import React from "react";
import Image from "next/image";
export const PageHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="relative h-[260px] md:h-[440px] w-full">
      <Image
        src="/assets/images/header-bg.png"
        loading="eager"
        alt="page header decorative image"
        height={440}
        width={1920}
        className="object-fit filter brightness-[.3] h-full"
      />
      <div className="absolute bottom-[-4%] max-sm:w-full max-sm:pl-8  left-[50%] -translate-x-1/2 text-white">
        <p className=" text-headingXLMobile md:text-headingXL h-full capitalize font-display">
          {children}
        </p>
      </div>
    </header>
  );
};
