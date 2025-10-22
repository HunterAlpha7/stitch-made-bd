"use client";

// import { useLanguage } from "../contexts/LanguageContext"; // Removed as per user request

export default function Footer() {
  // const { t } = useLanguage(); // Commented out to remove language functionality
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-20 bg-deep-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between text-sm">
        <div>
          <div className="font-semibold">Stitch Made Factory</div>
          <div className="opacity-80">Holding # 72/3, Block #3, Bahadurpur, Bhawal Mirzapur, Gazipur City, Gazipur - 1703</div>
        </div>
        <div className="opacity-80">© {currentYear} Stitch Made BD</div>
      </div>
    </footer>
  );
}
