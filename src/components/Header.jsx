"use client";

import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import MobileMenu from "./MobileMenu";
import { useLanguage } from "../contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();
  return (
    <header className="sticky top-0 z-40 bg-teal border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between text-white">
        <Link href="/" className="font-semibold text-lg">Stitch Made</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:opacity-90">{t("home")}</Link>
          <Link href="/about" className="hover:opacity-90">{t("about")}</Link>
          <Link href="/gallery" className="hover:opacity-90">{t("gallery")}</Link>
          <Link href="/products" className="hover:opacity-90">{t("products")}</Link>
          <Link href="/contact" className="hover:opacity-90">{t("contact")}</Link>
        </nav>
        <div className="md:flex items-center gap-3">
          <LanguageSwitcher />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
