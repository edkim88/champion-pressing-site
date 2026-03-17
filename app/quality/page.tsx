"use client";

import Link from "next/link";
// NextImage로 이름을 바꿔서 import 하여 브라우저 내장 Image 객체와 충돌을 방지합니다.
import NextImage from "next/image";

export default function QualityPage() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111] overflow-hidden">
      {/* NAVIGATION */}
      <section className="px-7 md:px-10 pt-8 pb-4">
        <nav className="flex items-center justify-between py-4 relative z-20">
          <Link href="/" className="inline-flex items-center h-[60px]">
            <NextImage
              src="/champion-logo.svg"
              alt="Champion Pressing"
              width={220}
              height={60}
              priority
              className="h-auto w-[200px] md:w-[220px]"
            />
          </Link>

          <div className="flex items-center h-[48px] gap-6 md:gap-10 lg:gap-14 text-[11px] md:text-sm uppercase tracking-[0.12em]">
            <Link href="/about" className="inline-flex items-center h-full px-3 hover:opacity-55 transition">
              About
            </Link>
            <Link href="/pressing" className="inline-flex items-center h-full px-3 hover:opacity-55 transition">
              Pressing
            </Link>
            <Link href="/quality" className="inline-flex items-center h-full px-3 text-black font-semibold transition">
              The Quality
            </Link>
            <Link href="/projects" className="inline-flex items-center h-full px-3 hover:opacity-55 transition">
              Projects
            </Link>
            <Link
              href="/quote"
              className="inline-flex items-center h-full px-7 border border-black/35 hover:bg-black hover:text-[#f5f3ee] transition whitespace-nowrap"
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
            Superior Standards
          </p>
          <h1 className="text-[10vw] md:text-[8vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase mb-16 md:mb-24">
            Difference
            <br />
            In Detail.
          </h1>
        </div>
      </section>

      {/* 01. MONITORING ENVIRONMENT */}
      <section className="px-7 md:px-10 mb-24 md:mb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-10 items-stretch mb-12">
            <div className="md:col-span-8 bg-black/5 flex items-center justify-center p-8 md:p-12 rounded-sm">
              <div className="overflow-hidden aspect-[16/9] w-full relative">
                <NextImage
                  src="/images/quality-01.jpeg"
                  alt="Genelec 8381A Monitoring System"
                  width={2400}
                  height={1350}
                  className="w-full h-full object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
            <div className="md:col-span-4 flex flex-col justify-center py-6 md:py-10">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 mb-6">
                01. Precision Listening
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight mb-6 uppercase">
                Finest Monitoring,<br />Where the Master is Made.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-black/65">
                We operate within a world-class monitoring environment anchored by the Genelec 8381A flagship system. This allows us to perform vinyl mastering and test-pressing evaluations with unparalleled resolution, ensuring every sonic nuance is preserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02. PVC COMPOUND SECTION */}
      <section className="px-7 md:px-10 mb-24 md:mb-40">
        <div className="max-w-7xl mx-auto border-t border-black/10 pt-20">
          <div className="grid md:grid-cols-12 gap-10 items-stretch">
            <div className="md:col-span-4 flex flex-col justify-center py-6 md:py-10">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 mb-6">
                02. Proprietary Material
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight mb-6 uppercase">
                Custom Developed<br />High-Fidelity Compound.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-black/65">
                We don&apos;t settle for off-the-shelf solutions. Champion Pressing utilizes a proprietary PVC compound developed in-house to ensure the lowest possible noise floor and maximum signal fidelity.
              </p>
            </div>
            <div className="md:col-span-8 bg-black/5 flex items-center justify-center p-8 md:p-12 rounded-sm">
              <div className="overflow-hidden aspect-[16/9] w-full relative">
                <NextImage
                  src="/images/quality-02.jpeg"
                  alt="Custom PVC Compound Detail"
                  width={2000}
                  height={1125}
                  className="w-full h-full object-cover transition duration-700 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 03. ARTISTIC PERSPECTIVE SECTION */}
      <section className="px-7 md:px-10 mb-24 md:mb-40">
        <div className="max-w-7xl mx-auto border-t border-black/10 pt-20">
          <div className="flex flex-col md:flex-row items-stretch justify-between gap-12">
            <div className="flex-1 flex flex-col justify-center py-6 md:py-10 max-w-xl">
               <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 mb-6">
                03. Artistic Perspective
              </p>
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[0.9] uppercase mb-10">
                Driven by <br />Artist Vision.
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-black/65">
                From the sonic depth of mastering to the tactile precision of pressing and the final aesthetic of design — we see every record through the eyes of the creator. Our crew obsesses over the details that matter most to you, ensuring your artistic intent is never lost in translation.
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-black/5 p-8 flex items-center justify-center rounded-sm">
              <div className="overflow-hidden aspect-square w-full relative">
                <NextImage
                  src="/images/quality-03.jpeg"
                  alt="Driven by Artist Vision"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover grayscale transition duration-700 hover:grayscale-0 hover:scale-[1.05]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="px-7 md:px-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto border-t border-black/8 pt-8 md:pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-black/35 mb-4">
              COMMITMENT TO QUALITY
            </p>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight uppercase">
              Sound is <br className="md:hidden" />non-negotiable.
            </h3>
          </div>

          <div className="flex gap-4 md:gap-6 items-center">
            <Link
              href="/quote"
              className="inline-flex w-[160px] md:w-[180px] h-[48px] md:h-[54px] items-center justify-center border border-black bg-transparent text-black text-[10px] md:text-[14px] font-normal uppercase tracking-[0.22em] leading-none appearance-none hover:bg-black hover:text-[#f5f3ee] transition-all duration-300 whitespace-nowrap"
            >
              Make a Quote
            </Link>

            <button
              onClick={scrollToTop}
              className="inline-flex w-[160px] md:w-[180px] h-[48px] md:h-[54px] items-center justify-center border border-black/20 bg-transparent text-black text-[8px] md:text-[8px] font-normal uppercase tracking-[0.22em] leading-none appearance-none hover:bg-black hover:border-black hover:text-[#f5f3ee] transition-all duration-300 whitespace-nowrap"
            >
              Back to Top
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}