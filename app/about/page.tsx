"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
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

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center h-[48px] gap-10 lg:gap-14 text-sm uppercase tracking-[0.12em]">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className={`hover:opacity-55 transition ${link.href === '/about' ? 'text-black font-semibold' : ''}`}
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
                className={`text-2xl md:text-3xl uppercase tracking-[0.15em] hover:opacity-50 transition ${link.href === '/about' ? 'border-b border-black' : ''}`}
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

      {/* ABOUT HERO */}
      <section className="px-7 md:px-10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6 md:mb-8 text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/38">
            Who We Are
          </p>
          <h1 className="text-[12vw] md:text-[7.5vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase mb-16 md:mb-24">
            Beyond
            <br />
            Reproduction.
            <br />
            The New Standard.
          </h1>
        </div>
      </section>

      {/* BIG IMAGE */}
      <section className="px-7 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 md:mb-28 overflow-hidden bg-black/5">
            <Image
              src="/images/about-hero.jpeg"
              alt="Champion Pressing Factory"
              width={2400}
              height={1400}
              className="w-full h-[320px] md:h-[680px] object-cover transition duration-700 hover:scale-[1.02]"
            />
          </div>

          {/* STORY SECTION */}
          <div className="grid md:grid-cols-12 gap-8 items-start mb-20 md:mb-32">
            <div className="md:col-span-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 sticky top-10">
                Our Origins
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-8 uppercase">
                Born in Namyangju, built for the global standard of sound.
              </h2>

              <div className="space-y-6 max-w-2xl text-base md:text-lg leading-relaxed text-black/65">
                <p>
                  Champion Pressing was founded out of a profound frustration with the compromises often made in modern vinyl production. We believe that pressing a record is not merely a manufacturing step—it is the final, crucial act of mastering.
                </p>
                <p>
                  Located in Namyangju, South Korea, our facility was engineered from the ground up to prioritize sonic fidelity over sheer volume. We combine decades of analogue tradition with highly maintained, modernized pressing machinery.
                </p>
              </div>
            </div>
          </div>

          {/* IMAGE GRID 2 */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-20 md:mb-32">
            <div className="overflow-hidden bg-black/5">
              <Image
                src="/images/about-01.jpeg"
                alt="Vinyl engineering"
                width={1600}
                height={1200}
                className="w-full h-[320px] md:h-[600px] object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>

            <div className="overflow-hidden bg-black/5 md:translate-y-16">
              <Image
                src="/images/about-02.jpeg"
                alt="Quality control"
                width={1600}
                height={1200}
                className="w-full h-[320px] md:h-[600px] object-cover transition duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* PHILOSOPHY SECTION */}
          <div className="grid md:grid-cols-12 gap-8 items-start mb-20 md:mb-28">
            <div className="md:col-span-4">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 sticky top-10">
                The Standard
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-2xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-8 uppercase">
                No shortcuts. <br />
                Just pure analogue discipline.
              </h2>

              <div className="space-y-6 max-w-2xl text-base md:text-lg leading-relaxed text-black/65">
                <p>
                  We are a small but highly specialized team of engineers and listeners. By keeping our operation focused, we maintain strict quality control at every phase: from test pressings to final packaging. 
                </p>
                <p>
                  Whether you are an independent artist releasing your debut EP or a legacy label reissuing a classic, our approach remains identical: precision, communication, and deep respect for the groove.
                </p>
              </div>
            </div>
          </div>

          {/* CLOSING */}
          <div className="border-t border-black/8 pt-8 md:pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-32">
            <div>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 mb-4 uppercase">
                Work with us
              </p>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight uppercase">
                Ready to press?
              </h3>
              <p className="max-w-xl mt-4 text-sm md:text-base leading-relaxed text-black/60">
                Let's discuss your next project and bring your sound to physical form.
              </p>
            </div>

            <div className="flex gap-4 md:gap-6 items-center">
              <Link
                href="/quote"
                className="inline-flex w-[140px] md:w-[180px] h-[48px] md:h-[54px] items-center justify-center border border-black bg-transparent text-black text-[12px] md:text-[14px] font-normal uppercase tracking-[0.22em] leading-none appearance-none hover:bg-black hover:text-[#f5f3ee] transition-all duration-300 whitespace-nowrap"
              >
                Make a Quote
              </Link>
              
              <button
                onClick={scrollToTop}
                className="inline-flex w-[140px] md:w-[180px] h-[48px] md:h-[54px] items-center justify-center border border-black/20 bg-transparent text-black text-[9px] md:text-[10px] font-normal uppercase tracking-[0.22em] leading-none appearance-none hover:bg-black hover:border-black hover:text-[#f5f3ee] transition-all duration-300 whitespace-nowrap"
              >
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}