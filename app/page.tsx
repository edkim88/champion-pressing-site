"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dict = {
    en: {
      heroSub: "Precision Pressing with Sonic Sensitivity",
      heroDesc: "Champion Pressing is a cutting-edge vinyl manufacturing partner for labels, artists, and projects that demand more than volume — with a workflow shaped by listening, precision, and deep respect for sonic detail.",
      location: "Korea",
      focus: "Sonic Precision",
      materialTitle: "Material",
      materialDesc: "Audiophile PVC",
      approach: "Precision + Listening",
      philDesc: "From limited runs to larger production volumes, Champion Pressing approaches each record with the same discipline, sensitivity, and attention to sonic detail.",
      footerDesc: "Pressing is not only production. It is the final stage of how a record is understood.",
      makeQuoteBtn: "Make a Quote",
      backToTopBtn: "Back to Top"
    },
    ko: {
      heroSub: "사운드에 대한 높은 이해도를 바탕으로 한 정밀 프레싱",
      heroDesc: <>챔피언 프레싱은 단순한 복제 그 이상의 가치를 추구하는<br className="hidden md:block" />레이블, 아티스트, 그리고 특별한 프로젝트를 위한 최첨단 바이닐(LP) 제조 파트너입니다.<br className="hidden md:block" />깊이 있는 리스닝 경험과 사운드 디테일에 대한 확고한 장인 정신을 바탕으로 최상의 프레싱을 선사합니다.</>,
      location: "대한민국 남양주",
      focus: "사운드 정밀도 및 해상력",
      materialTitle: "핵심 소재",
      materialDesc: "자체 배합 프리미엄 PVC",
      approach: "정밀 공정 및 청취 검수",
      philDesc: <>소량 한정판부터 대규모 프로덕션까지, 챔피언 프레싱은 규모와 타협하지 않습니다.<br className="hidden md:block" />모든 레코드를 동일한 규율, 감각, 그리고 사운드 디테일에 대한 집요한 집중력으로 완성합니다.</>,
      footerDesc: <>프레싱은 단순한 제조 공정이 아닙니다.<br className="hidden md:block" />레코드에 담긴 음악이 대중에게 어떻게 이해될지 결정하는 가장 중요한 마지막 무대입니다.</>,
      makeQuoteBtn: "Make a Quote",
      backToTopBtn: "Back to Top"
    }
  };
  const t = dict[language];

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen px-7 md:px-10 py-8 flex flex-col justify-between">
        {/* NAVIGATION */}
        <Header />

        {/* HERO CONTENT */}
        <div className="relative flex-1 flex items-center z-10">
          <div className="max-w-7xl w-full">
            <p className="mb-6 md:mb-8 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/38">
              {t.heroSub}
            </p>

            <h1 className="text-[14vw] md:text-[9vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase">
              Pressed
              <br />
              for Sound
            </h1>

            <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-6">
              <div className="md:col-span-7">
                <p className="max-w-2xl text-lg md:text-xl leading-relaxed text-black/70 break-keep">
                  {t.heroDesc}
                </p>
                <div className="mt-8 md:mt-10">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center border border-black bg-transparent text-black px-8 py-4 text-[10px] md:text-[11px] font-normal uppercase tracking-[0.15em] transition-all duration-300 hover:bg-black/20 whitespace-nowrap"
                  >
                    {t.makeQuoteBtn}
                  </Link>
                </div>
              </div>

              <div className="md:col-span-5 md:pl-10">
                <div className="grid grid-cols-2 gap-y-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-black/38">
                  <span>Based in</span>
                  <span className="text-black/72">{t.location}</span>
                  <span>Focus</span>
                  <span className="text-black/72">{t.focus}</span>
                  <span>{t.materialTitle}</span>
                  <span className="text-black/72">{t.materialDesc}</span>
                  <span>Approach</span>
                  <span className="text-black/72">{t.approach}</span>
                </div>
              </div>
            </div>
          </div>

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
      <section className="px-7 md:px-10 py-12 md:py-20">
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

          <div className="grid md:grid-cols-12 gap-8 items-start mb-12 md:mb-20">
            <div className="md:col-span-3">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35">Philosophy</p>
            </div>
            <div className="md:col-span-9">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-6">
                Every pressing, regardless of scale, is handled with technical precision and careful listening.
              </h2>
              <p className="max-w-2xl text-sm md:text-base leading-relaxed text-black/65 break-keep">
                {t.philDesc}
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12 md:mb-20">
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

          <div className="my-12 md:my-20">
            <div className="max-w-4xl">
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 mb-6">Craftsmanship</p>
              <h3 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight">
                Precision is not scale.<br />It is attitude.
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20">
            <div className="overflow-hidden bg-black/5">
              <Image src="/images/impression-04.jpeg" alt="4" width={1600} height={1200} className="w-full h-[320px] md:h-[560px] object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
            <div className="overflow-hidden bg-black/5 md:translate-y-12">
              <Image src="/images/impression-05.jpeg" alt="5" width={1600} height={1200} className="w-full h-[320px] md:h-[560px] object-cover transition duration-700 hover:scale-[1.03]" />
            </div>
          </div>

          <div className="border-t border-black/8 pt-8 md:pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 mb-4">WE ARE CHAMPION PRESSING</p>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight">
                Made with discipline.<br />Heard with clarity.
              </h3>
              <p className="max-w-xl mt-4 text-sm md:text-base leading-relaxed text-black/60 break-keep">
                {t.footerDesc}
              </p>
            </div>
            <div className="flex gap-4 md:gap-6 items-center mt-8 md:mt-0">
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
        </div>
      </section>
    </main>
  );
}