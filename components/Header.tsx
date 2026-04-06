"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/pressing", label: "Pressing" },
    { href: "/quality", label: "The Quality" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="flex items-center justify-between py-4 relative z-50">
      <Link href="/" className="inline-flex items-center h-[60px]">
        <Image
          src="/champion-logo.svg"
          alt="Champion Pressing"
          width={220}
          height={60}
          priority
          className="h-auto w-[180px] md:w-[220px]"
        />
      </Link>

      <div className="hidden lg:flex items-center h-[48px] gap-10 lg:gap-14 text-sm uppercase tracking-[0.12em]">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:opacity-55 transition">
            {link.label}
          </Link>
        ))}
        <Link
          href="/quote"
          className="inline-flex items-center h-full px-7 border border-black/35 hover:bg-black/20 transition whitespace-nowrap"
        >
          Make a Quote
        </Link>
        <button
          onClick={toggleLanguage}
          className="ml-2 text-[11px] uppercase tracking-[0.15em] font-semibold flex items-center gap-1.5 hover:opacity-50 transition"
        >
          <span className={language === 'ko' ? '' : 'text-black/30'}>KR</span>
          <span className="text-black/30">|</span>
          <span className={language === 'en' ? '' : 'text-black/30'}>EN</span>
        </button>
      </div>

      <button 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold z-50 px-2 py-1"
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      <div 
        className={`fixed inset-0 bg-[#f5f3ee] z-40 flex flex-col justify-center items-center gap-8 transition-all duration-500 ease-in-out ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible -translate-y-5"
        }`}
      >
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            onClick={() => setIsMenuOpen(false)}
            className="text-2xl md:text-3xl uppercase tracking-[0.15em] hover:opacity-50 transition"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/quote"
          onClick={() => setIsMenuOpen(false)}
          className="mt-6 px-10 py-4 border border-black uppercase text-xs md:text-sm tracking-[0.25em] hover:bg-black/20 transition"
        >
          Make a Quote
        </Link>
        <button
          onClick={() => { toggleLanguage(); setIsMenuOpen(false); }}
          className="mt-4 text-xs tracking-[0.2em] font-semibold flex items-center gap-2 uppercase"
        >
          <span className={language === 'ko' ? '' : 'text-black/30'}>KR</span>
          <span className="text-black/30">|</span>
          <span className={language === 'en' ? '' : 'text-black/30'}>EN</span>
        </button>
      </div>
    </nav>
  );
}
