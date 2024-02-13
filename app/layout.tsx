import type { Metadata } from "next";
import {
  Inter,
  Work_Sans,
  Playfair_Display,
  Red_Hat_Display,
  Noto_Serif_Display,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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
  title: "ODGG",
  description: "Odvjetnicko društvo Glamuzina & Grošeta",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  return (
    <html lang={locale}>
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
