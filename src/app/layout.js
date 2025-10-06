import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import ContactFab from "../components/ContactFab";
import LanguageSwitcher from "../components/LanguageSwitcher";
import MobileMenu from "../components/MobileMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Stitch Made BD",
  description: "Garment manufacturing excellence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ContactFab />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-teal border-b border-black/5">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between text-white">
        <Link href="/" className="font-semibold text-lg">Stitch Made</Link>
        <nav className="hidden md:flex gap-6 text-sm">
          <Link href="/" className="hover:opacity-90">Home</Link>
          <Link href="/about" className="hover:opacity-90">About</Link>
          <Link href="/gallery" className="hover:opacity-90">Gallery</Link>
          <Link href="/products" className="hover:opacity-90">Products</Link>
          <Link href="/contact" className="hover:opacity-90">Contact</Link>
        </nav>
        <div className="md:flex items-center gap-3 hidden">
          <LanguageSwitcher />
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="mt-20 bg-deep-navy text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 flex items-center justify-between text-sm">
        <div>
          <div className="font-semibold">Stitch Made Factory</div>
          <div className="opacity-80">Holding # 72/3, Block #3, Bahadurpur, Bhawal Mirzapur, Gazipur City, Gazipur - 1703</div>
        </div>
        <div className="opacity-80">© {new Date().getFullYear()} Stitch Made BD</div>
      </div>
    </footer>
  );
}
