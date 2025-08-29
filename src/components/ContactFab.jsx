"use client";
import { useState } from "react";

export default function ContactFab() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3">
      <div className={`transition-all duration-300 ease-out flex flex-col items-end gap-3 ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}>
        <ContactLink href="https://wa.me/15551234567" label="WhatsApp" bg="#25D366" icon="💬" />
        <ContactLink href="tel:+15551234567" label="Call" bg="#00C853" icon="📞" />
        <ContactLink href="https://m.me/yourpage" label="Messenger" bg="#1877F2" icon="✉️" />
      </div>
      <button
        aria-label={open ? "Close contact options" : "Open contact options"}
        onClick={() => setOpen(!open)}
        className={`h-14 w-14 rounded-full shadow-lg grid place-items-center text-white transition-transform duration-200 ${open ? "bg-[#FF6B6B] rotate-90" : "bg-[#FF6B6B]"}`}
      >
        {open ? "✕" : "…"}
      </button>
    </div>
  );
}

function ContactLink({ href, label, bg, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 w-12 rounded-full grid place-items-center shadow-lg text-white"
      style={{ backgroundColor: bg }}
      aria-label={label}
    >
      <span className="text-lg" aria-hidden>
        {icon}
      </span>
    </a>
  );
}


