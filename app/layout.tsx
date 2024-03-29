import type { Metadata } from "next";
import { Work_Sans, Noto_Serif_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TLocaleLang } from "@/types";

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-sans",
});
const displayFont = Noto_Serif_Display({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "odgg",
    template: "%s | odgg",
  },
  description:
    "Odvjetničko društvo Glamuzina & Grošeta d.o.o. pruža svojim klijentima šritoki raspon usluga iz razičitih grana prava. a interese svojih klijenata promiče pred domaćim sudovima i javnim tijelima, ali i domaćim i međunarodnim arbitražama.",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: TLocaleLang };
}>) {
  return (
    <html lang={locale || "hr"}>
      <body
        className={cn(
          "bg-secondary font-sans text-bodyMMobile md:text-bodyM text-foreground",
          workSans.variable,
          displayFont.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
