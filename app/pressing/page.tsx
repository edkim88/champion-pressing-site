"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Pressing() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { href: "/about", label: "About" },
    { href: "/pressing", label: "Pressing" },
    { href: "/quality", label: "The Quality" },
    { href: "/projects", label: "Projects" },
  ];

  const processes = [
    {
      id: "01",
      title: "Mastering & Cutting",
      description:
        "The crucial first step where your digital or analog masters are translated into physical grooves. Our expert consultants collaborate closely with cutting engineers to ensure loudness, dynamics, and frequency balances are perfectly optimized for the vinyl medium.",
      imgSrc: "/images/process-01 L2.jpeg",
    },
    {
      id: "02",
      title: "Electroforming (Plating)",
      description:
        "The cut lacquer master is electroplated with silver and nickel to create the metal stampers used for production. This requires a strictly controlled, dust-free environment, as even microscopic imperfections directly translate to surface noise.",
      imgSrc: "/images/process-02 L.jpeg",
    },
    {
      id: "03",
      title: "Pressing & QC",
      description:
        "Stampers are loaded into the press, shaping PVC pellets under extreme heat and pressure. Before full production, we extract Test Pressings (TPs). Our consultants and artists listen together to rigorously check for pops, distortion, and dynamic integrity.",
      imgSrc: "/images/process-03 L.jpeg",
    },
    {
      id: "04",
      title: "Packaging & Delivery",
      description:
        "The physical presentation is just as important as the sound. We meticulously inspect the color accuracy, paper stock, and finish of your sleeves. Finally, the records are carefully packaged and safely delivered to your hands.",
      imgSrc: "/images/process-04 L.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111] overflow-hidden">
      {/* NAVIGATION */}
      <section className="px-7 md:px-10 pt-8 pb-4">
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

          {/* DESKTOP MENU (Visible on LG screens and up) */}
          <div className="hidden lg:flex items-center h-[48px] gap-10 lg:gap-14 text-sm uppercase tracking-[0.12em]">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`hover:opacity-55 transition ${link.href === '/pressing' ? 'text-black font-semibold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              className="inline-flex items-center h-full px-7 border border-black/35 hover:bg-black hover:text-[#f5f3ee] transition whitespace-nowrap"
            >
              Make a Quote
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold z-50 px-2 py-1"
          >
            {isMenuOpen ? "Close" : "Menu"}
          </button>

          {/* MOBILE OVERLAY MENU */}
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
                className={`text-2xl md:text-3xl uppercase tracking-[0.15em] hover:opacity-50 transition ${link.href === '/pressing' ? 'border-b border-black' : ''}`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/quote"
              onClick={() => setIsMenuOpen(false)}
              className="mt-6 px-10 py-4 border border-black uppercase text-xs md:text-sm tracking-[0.25em] hover:bg-black hover:text-[#f5f3ee] transition"
            >
              Make a Quote
            </Link>
          </div>
        </nav>
      </section>

      {/* HERO SECTION */}
      <section className="px-7 md:px-10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6 md:mb-8 text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/38">
            The Process
          </p>
          <h1 className="text-[12vw] md:text-[7.5vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase mb-12 md:mb-16">
            From Master.
            <br />
            To Groove.
            <br />
            To Reality.
          </h1>
          <div className="max-w-3xl">
            <p className="text-base md:text-xl leading-relaxed text-black/70">
              Vinyl production is not just a replication; it is a highly sensitive physical translation of sound.
              Champion Pressing’s expert consultants work closely with you from the mastering studio to final delivery,
              ensuring your sonic vision is pressed into the groove without compromise.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS INFOGRAPHIC SECTION */}
      <section className="px-7 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-24 md:gap-32">
          {processes.map((process, index) => (
            <div
              key={process.id}
              className={`flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Area */}
              <div className="w-full md:w-[55%] bg-black/5 p-8 md:p-12 rounded-sm flex items-center justify-center">
                <Image
                  src={process.imgSrc}
                  alt={process.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-contain mix-blend-multiply transition duration-700 hover:scale-[1.03]"
                />
              </div>

              {/* Text Area */}
              <div className="w-full md:w-[40%]">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/38 mb-4 border-b border-black/10 pb-4 inline-block">
                  Phase {process.id}
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] mb-6">
                  {process.title}
                </h3>
                <p className="text-base md:text-lg leading-relaxed text-black/65">
                  {process.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-7 md:px-10 pb-24 md:pb-32 mt-12 md:mt-24">
        <div className="max-w-7xl mx-auto border-t border-black/8 pt-8 md:pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 mb-4">
              CONSULTATION
            </p>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight">
              Unsure about the specs?
            </h3>
            <p className="max-w-xl mt-4 text-sm md:text-base leading-relaxed text-black/60">
              12-inch or 7-inch? 33 RPM or 45 RPM? Let us guide you to the format that best serves your music.
            </p>
          </div>

         <div className="flex gap-4 md:gap-6 items-center">
            <Link
              href="/quote"
              className="inline-flex w-[140px] md:w-[180px] h-[48px] md:h-[54px] items-center justify-center border border-black bg-transparent text-black text-[10px] md:text-[14px] font-normal uppercase tracking-[0.22em] leading-none appearance-none hover:bg-black hover:text-[#f5f3ee] transition-all duration-300 whitespace-nowrap"
            >
              Make a Quote
            </Link>

            <button
              onClick={scrollToTop}
              className="inline-flex w-[140px] md:w-[180px] h-[48px] md:h-[54px] items-center justify-center border border-black/20 bg-transparent text-black text-[8px] md:text-[px] font-normal uppercase tracking-[0.22em] leading-none appearance-none hover:bg-black hover:border-black hover:text-[#f5f3ee] transition-all duration-300 whitespace-nowrap"
            >
              Back to Top
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}