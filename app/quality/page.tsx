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
      heroDesc: "Quality is not simply a mechanical process of filtering out defects. We approach analog sound with an obsessive dedication to its purest form, starting from the very foundation of our acoustic environment. By combining world-class monitoring transparency with our proprietary material, we overcome the traditional physical limits of vinyl. Driven by a singular goal to deliver the ultimate listening experience, Champion Pressing proves its standard through an uncompromising commitment to fidelity.",
      qual1Desc: "We operate within a world-class monitoring environment anchored by the Genelec 8381A flagship system. This allows us to perform vinyl mastering and test-pressing evaluations with unparalleled resolution.",
      qual2Desc: "We don't settle for off-the-shelf solutions. Champion Pressing utilizes a proprietary PVC compound developed in-house to ensure the lowest possible noise floor and maximum signal fidelity.",
      qual3Desc: "From the sonic depth of mastering to the tactile precision of pressing — we see every record through the eyes of the creator, ensuring your artistic intent is never lost in translation.",
      makeQuoteBtn: "Make a Quote",
      backToTopBtn: "Back to Top"
    },
    ko: {
      heroDesc: <>품질은 단순히 불량품을 걸러내는 수동적인 공정이 아닙니다.<br className="hidden md:block" />우리는 아날로그 사운드의 고유한 질감을 유지하기 위해, 청취 환경을 설계하는 기초 단계부터 치밀하게 다가갑니다.<br className="hidden md:block" />최상의 모니터링 시스템을 통해 소리의 투명함을 보존하고, 오랜 연구 끝에 완성한 자체 배합 소재로 매체의 한계를 극복합니다.<br className="hidden md:block" />청취자에게 가장 깊이 있는 음향적 경험을 전달하기 위해, 우리는 매 순간 챔피언 프레싱만의 기준을 증명해 나가고 있습니다.</>,
      qual1Desc: <>우리는 Genelec 8381A 플래그십 시스템을 주축으로 한 세계 최고 수준의 어쿠스틱 모니터링 환경을 정밀하게 구축하여 운용하고 있습니다.<br className="hidden md:block" />이는 단순한 청취를 넘어, 마스터링 커팅 단계부터 테스트 프레싱(TP)의 극히 미세한 부분까지 예리한 해상도로 점검하게 해줍니다. 가장 투명하게 설계된 사운드 스테이지 위에서 여러분의 음원은 가장 안전하게 변환됩니다.</>,
      qual2Desc: <>기존의 기성 솔루션이나 보편적인 소재에 안주하지 않습니다. 최상의 소리를 구현하기 위해, 챔피언 프레싱은 3년이 넘는 연구 개발(R&D)을 통해 오디오파일 그레이드의 특수 PVC 컴파운드(Compound) 배합을 독자적으로 완성했습니다.<br className="hidden md:block" />이는 일반적인 프레싱 대비 노이즈 플로어(Noise Floor)를 비약적으로 낮추고, 무거운 베이스부터 고음역대의 섬세한 뉘앙스까지 시그널의 원음 보존력(Fidelity)을 극대화합니다. 소재의 미세한 결이 만들어내는 청각적 차이를 직접 경험해 보십시오.</>,
      qual3Desc: <>마스터링 단계에서 다뤄지는 음향적 깊이(Depth)부터 프레싱 이후 느껴지는 물리적인 정밀함까지 — 우리는 단순한 제조자를 넘어선 '창작자'의 시선으로 레코드를 마주합니다.<br className="hidden md:block" />당신의 음악적 철학과 예술적 의도가 왜곡 없이 온전한 형태로 실현될 수 있도록 끝까지 책임집니다.</>,
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
      <section className="px-7 md:px-10 pt-20 md:pt-[15vh] pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6 md:mb-8 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/38">
            Superior Standards
          </p>
          <h1 className="text-[11vw] md:text-[6.5vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase mb-12 md:mb-16">
            Difference
            <br />
            In Detail.
          </h1>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed text-black/70 break-keep">
              {t.heroDesc}
            </p>
          </div>
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