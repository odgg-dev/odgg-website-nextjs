import { TLocaleLang } from "@/types";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: TLocaleLang };
}) {
  return <div>{children}</div>;
}
