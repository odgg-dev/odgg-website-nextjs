import Image from "next/image";
import Link from "next/link";
import React from "react";
export const StudioLogoTxt = () => {
  return (
    <div className=" h-full flex justify-center items-center">
      <Link href="/" className="text-[12px]">
        G<span className="text-primary">&</span>G
      </Link>
    </div>
  );
};
