"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-deep-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between text-sm">
        <div>
          <div className="font-semibold">{t("factoryName")}</div>
          <div className="opacity-80">{t("factoryAddress")}</div>
        </div>
        <div className="opacity-80">{t("copyright", { year: currentYear })}</div>
      </div>
    </footer>
  );
}
