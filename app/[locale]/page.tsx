import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("Index");
  return (
    <div className="min-h-screen w-screen bg-slate-600 ">
      <h1>{t("title")}</h1>;
    </div>
  );
}
