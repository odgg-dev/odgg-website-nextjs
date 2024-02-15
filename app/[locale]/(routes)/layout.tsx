import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { TLocaleLang } from "@/types";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: TLocaleLang };
}) {
  return (
    <div>
      <Navigation localLang={locale} />
      {children}
      <Footer />
    </div>
  );
}
