"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
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

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen px-7 md:px-10 py-8 flex flex-col justify-between">
        {/* NAVIGATION */}
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
              className="inline-flex items-center h-full px-7 border border-black/35 hover:bg-black hover:text-[#f5f3ee] transition whitespace-nowrap"
            >
              Make a Quote
            </Link>
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
              className="mt-6 px-10 py-4 border border-black uppercase text-xs md:text-sm tracking-[0.25em] hover:bg-black hover:text-[#f5f3ee] transition"
            >
              Make a Quote
            </Link>
          </div>
        </nav>

        {/* HERO CONTENT */}
        <div className="relative flex-1 flex items-center z-10">
          <div className="max-w-7xl w-full">
            <p className="mb-6 md:mb-8 text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/38">
              Precision Pressing with Sonic Sensitivity
            </p>

            <h1 className="text-[14vw] md:text-[9vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase">
              Pressed
              <br />
              for Sound
            </h1>

            <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-7">
                <p className="max-w-2xl text-sm md:text-lg leading-relaxed text-black/70">
                  Champion Pressing is a cutting-edge vinyl manufacturing
                  partner for labels, artists, and projects that demand more
                  than volume — with a workflow shaped by listening, precision,
                  and deep respect for sonic detail.
                </p>
              </div>

              <div className="md:col-span-5 md:pl-10">
                <div className="grid grid-cols-2 gap-y-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-black/38">
                  <span>Based in</span>
                  <span className="text-black/72">Namyangju, Korea</span>
                  <span>Focus</span>
                  <span className="text-black/72">Sonic Precision</span>
                  <span>Format</span>
                  <span className="text-black/72">12&quot; / 10&quot; / 7&quot;</span>
                  <span>Approach</span>
                  <span className="text-black/72">Precision + Listening</span>
                </div>
              </div>
            </div>
          </div>

          {/* VINYL GRAPHIC: 모바일에서도 보이도록 hidden 제거 및 위치 최적화 */}
          <div className="pointer-events-none absolute right-[-150px] md:right-[-430px] bottom-[-20px] md:bottom-[-40px] z-0 opacity-60 md:opacity-75">
            <div className="origin-bottom-right scale-[0.5] md:scale-[0.8] h-[800px] w-[800px] md:h-[1400px] md:w-[1400px]">
              <svg viewBox="0 0 1400 1400" className="h-full w-full" fill="none">
                <circle cx="700" cy="700" r="650" stroke="black" strokeWidth="2.6" strokeOpacity="0.28" />
                <circle cx="700" cy="700" r="570" stroke="black" strokeWidth="2.3" strokeOpacity="0.24" />
                <circle cx="700" cy="700" r="490" stroke="black" strokeWidth="2.1" strokeOpacity="0.2" />
                <circle cx="700" cy="700" r="410" stroke="black" strokeWidth="1.9" strokeOpacity="0.18" />
                <circle cx="700" cy="700" r="330" stroke="black" strokeWidth="1.8" strokeOpacity="0.16" />
                <circle cx="700" cy="700" r="250" stroke="black" strokeWidth="1.7" strokeOpacity="0.14" />
                <circle cx="700" cy="700" r="170" stroke="black" strokeWidth="1.9" strokeOpacity="0.18" />
                <circle cx="700" cy="700" r="22" fill="black" fillOpacity="0.36" />
                <g style={{ transformOrigin: "700px 700px", animation: "vinyl-marker-spin 26s linear infinite" }}>
                  <line x1="700" y1="58" x2="700" y2="150" stroke="black" strokeWidth="2.2" strokeOpacity="0.22" strokeLinecap="round" />
                  <rect x="696" y="54" width="8" height="8" fill="#e11d48" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/28 relative z-20">
          <span>Scroll</span>
          <span>CHAMPION PRESSING 2026. ALL RIGHTS RESERVED.</span>
        </div>
      </section>

      {/* BIG IMAGE & REMAINING SECTIONS */}
      <section className="px-7 md:px-10 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10 md:mb-14 overflow-hidden bg-black/5">
            <Image
              src="/images/impression-07.jpeg"
              alt="Champion Pressing production"
              width={2400}
              height={1400}
              className="w-full h-[320px] md:h-[680px] object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start mb-20 md:mb-28">
            <div className="md:col-span-3">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35">Philosophy</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-2xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-6">
                Every pressing, regardless of scale, is handled with technical precision and careful listening.
              </h2>
              <p className="max-w-2xl text-base md:text-lg leading-relaxed text-black/65">
                From limited runs to larger production volumes, Champion Pressing
                approaches each record with the same discipline, sensitivity,
                and attention to sonic detail.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20 md:mb-28">
            <div className="overflow-hidden bg-black/5">
              <Image src="/images/impression-01.jpeg" alt="1" width={1600} height={2000} className="w-full h-[320px] md:h-[420px] object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
            <div className="overflow-hidden bg-black/5">
              <Image src="/images/impression-02.jpeg" alt="2" width={1600} height={2000} className="w-full h-[320px] md:h-[420px] object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
            <div className="overflow-hidden bg-black/5">
              <Image src="/images/impression-03.jpeg" alt="3" width={1600} height={2000} className="w-full h-[320px] md:h-[420px] object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
          </div>

          <div className="my-20 md:my-32">
            <div className="max-w-4xl">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 mb-6">Craftsmanship</p>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight">
                Precision is not scale.<br />It is attitude.
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-28">
            <div className="overflow-hidden bg-black/5">
              <Image src="/images/impression-04.jpeg" alt="4" width={1600} height={1200} className="w-full h-[320px] md:h-[560px] object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
            <div className="overflow-hidden bg-black/5 md:translate-y-12">
              <Image src="/images/impression-05.jpeg" alt="5" width={1600} height={1200} className="w-full h-[320px] md:h-[560px] object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
          </div>

          <div className="border-t border-black/8 pt-8 md:pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 mb-4">WE ARE CHAMPION PRESSING</p>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight">
                Made with discipline.<br />Heard with clarity.
              </h3>
              <p className="max-w-xl mt-4 text-sm md:text-base leading-relaxed text-black/60">
                Pressing is not only production. It is the final stage of how a record is understood.
              </p>
            </div>
            {/* 하단 버튼 div로 통일하여 대칭 확보 */}
            <div
              onClick={scrollToTop}
              className="cursor-pointer inline-flex items-center justify-center border border-black/20 px-8 py-4 text-[11px] md:text-xs uppercase tracking-[0.22em] hover:bg-black hover:text-[#f5f3ee] transition whitespace-nowrap"
            >
              Back to Top
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}