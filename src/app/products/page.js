"use client";

import ProductSection from "@/components/ProductSection";
import { useLanguage } from '../../contexts/LanguageContext';

export default function Products() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-20 pb-16">
      <h1 className="text-4xl font-bold text-center my-8">{t("ourProducts")}</h1>
      
      <ProductSection title={t("workwear")} category="workwear" />
      <ProductSection title={t("kids")} category="kids" />
      <ProductSection title={t("mensBottom")} category="mens_bottom" />
      <ProductSection title={t("ladiesTop")} category="ladies_top" />
      <ProductSection title={t("ladiesBottom")} category="ladies_bottom" />
    </div>
  );
}