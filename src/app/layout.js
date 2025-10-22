import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ContactFab from "../components/ContactFab";
// import { LanguageProvider } from "../contexts/LanguageContext"; // Removed as per user request
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        {/* <LanguageProvider> */} {/* Removed as per user request */}
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ContactFab />
        {/* </LanguageProvider> */} {/* Removed as per user request */}
      </body>
    </html>
  );
}
