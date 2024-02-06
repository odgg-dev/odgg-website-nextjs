import { Navigation } from "@/components/Navigation";

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
