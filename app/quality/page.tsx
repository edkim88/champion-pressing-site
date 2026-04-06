"use client";

import Link from "next/link";
import NextImage from "next/image";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

export default function QualityPage() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const dict = {
    en: {
      qual1Desc: "We operate within a world-class monitoring environment anchored by the Genelec 8381A flagship system. This allows us to perform vinyl mastering and test-pressing evaluations with unparalleled resolution.",
      qual2Desc: "We don't settle for off-the-shelf solutions. Champion Pressing utilizes a proprietary PVC compound developed in-house to ensure the lowest possible noise floor and maximum signal fidelity.",
      qual3Desc: "From the sonic depth of mastering to the tactile precision of pressing — we see every record through the eyes of the creator, ensuring your artistic intent is never lost in translation.",
      makeQuoteBtn: "Make a Quote",
      backToTopBtn: "Back to Top"
    },
    ko: {
      qual1Desc: <>우리는 Genelec 8381A 플래그십 시스템을 기반으로 한 세계적인 수준의 모니터링 환경을 운용합니다.<br />이를 통해 바이닐 마스터링 커팅 및 테스트 프레싱(TP)을 전례 없는 압도적인 해상도로 검수할 수 있습니다.</>,
      qual2Desc: <>기존의 기성 솔루션에 타협하지 않습니다. 챔피언 프레싱은 독자적으로 개발한 특수 PVC 컴파운드(Compound) 배합을 사용하여,<br />노이즈 플로어를 극한으로 낮추고 시그널의 원음 보존력(Fidelity)을 극대화합니다.</>,
      qual3Desc: <>마스터링 단계에서 다뤄지는 음향적 깊이부터 프레싱 단계에서 느껴지는 물리적 정밀함까지 —<br />우리는 창작자의 시선으로 레코드를 바라보며, 당신의 예술적 의도가 왜곡 없이 물리적 매체로 실현되도록 보장합니다.</>,
      makeQuoteBtn: "Make a Quote",
      backToTopBtn: "Back to Top"
    }
  };
  const t = dict[language];

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111] overflow-hidden">
      {/* NAVIGATION */}
      <section className="px-7 md:px-10 pt-8 pb-4">
        <Header />
      </section>

      {/* HERO SECTION */}
      <section className="px-7 md:px-10 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6 md:mb-8 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/38">
            Superior Standards
          </p>
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase mb-16 md:mb-24">
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
            <div className="md:col-span-8 bg-black/5 flex items-center justify-center p-6 md:p-12 rounded-sm">
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
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 mb-6">
                01. Precision Listening
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-6 uppercase">
                Finest Monitoring,<br />Where the Master is Made.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-black/65 break-keep">
                {t.qual1Desc}
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
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 mb-6">
                02. Proprietary Material
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-6 uppercase">
                Custom Developed<br />High-Fidelity Compound.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-black/65 break-keep">
                {t.qual2Desc}
              </p>
            </div>
            <div className="md:col-span-8 bg-black/5 flex items-center justify-center p-6 md:p-12 rounded-sm">
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
               <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 mb-6">
                03. Artistic Perspective
              </p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-10 uppercase">
                Driven by <br />Artist Vision.
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-black/65 break-keep">
                {t.qual3Desc}
              </p>
            </div>
            <div className="w-full md:w-1/3 bg-black/5 p-6 flex items-center justify-center rounded-sm">
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
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 mb-4">
              COMMITMENT TO QUALITY
            </p>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight uppercase">
              Sound is <br className="md:hidden" />non-negotiable.
            </h3>
          </div>

          <div className="flex gap-4 md:gap-6 items-center">
            <Link
              href="/quote"
              className="flex w-[140px] md:w-[180px] h-[48px] md:h-[54px] items-center justify-center border border-black bg-transparent text-black text-[10px] md:text-[11px] font-normal uppercase tracking-[0.15em] leading-none transition-all duration-300 hover:bg-black/20 whitespace-nowrap"
            >
              {t.makeQuoteBtn}
            </Link>

            <div
              onClick={scrollToTop}
              className="cursor-pointer flex w-[140px] md:w-[180px] h-[48px] md:h-[54px] items-center justify-center border border-black/20 bg-transparent text-black text-[10px] md:text-[11px] font-normal uppercase tracking-[0.15em] leading-none transition-all duration-300 hover:bg-black/20 hover:border-black/20 whitespace-nowrap"
            >
              {t.backToTopBtn}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}