"use client";

import { useState } from 'react';
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-deep-navy focus:outline-none">
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Off-canvas menu */}
      <div
        className={`${isOpen ? 'translate-x-0' : 'translate-x-full'
          } fixed right-0 top-0 z-50 h-full w-64 transform bg-deep-navy transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4 text-white">
          <Link href="/" className="hover:opacity-90" onClick={toggleMenu}>
            {t("home")}
          </Link>
          <Link href="/about" className="hover:opacity-90" onClick={toggleMenu}>
            {t("about")}
          </Link>
          <Link href="/gallery" className="hover:opacity-90" onClick={toggleMenu}>
            {t("gallery")}
          </Link>
          <Link href="/products" className="hover:opacity-90" onClick={toggleMenu}>
            {t("products")}
          </Link>
          <Link href="/contact" className="hover:opacity-90" onClick={toggleMenu}>
            {t("contact")}
          </Link>
        </nav>
        <div className="absolute bottom-4 left-4">
          <LanguageSwitcher />
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-40 h-full w-full bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
}
