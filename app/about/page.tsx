"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dict = {
    en: {
      heroDesc: "Champion Pressing is a team of specialized engineers and listeners unified by one singular purpose: to produce vinyl that matches the original sonic intent without compromise.",
      originDesc1: "Champion Pressing was founded out of a profound frustration with the compromises often made in modern vinyl production. We believe that pressing a record is not merely a manufacturing step—it is the final, crucial act of mastering.",
      originDesc2: "Located in Namyangju, South Korea, our facility was engineered from the ground up to prioritize sonic fidelity over sheer volume. We combine decades of analogue tradition with highly maintained, modernized pressing machinery.",
      standardDesc1: "We are a small but highly specialized team of engineers and listeners. By keeping our operation focused, we maintain strict quality control at every phase: from test pressings to final packaging.",
      standardDesc2: "Whether you are an independent artist releasing your debut EP or a legacy label reissuing a classic, our approach remains identical: precision, communication, and deep respect for the groove.",
      readyDesc: "Let's discuss your next project and bring your sound to physical form.",
      makeQuoteBtn: "Make a Quote",
      backToTopBtn: "Back to Top"
    },
    ko: {
      heroDesc: <>챔피언 프레싱은 아티스트의 본래 의도와 사운드 디테일을 온전히 담아낸다는 단 하나의 목표로 모인 엔지니어이자 전문 리스너들입니다.<br className="hidden md:block" />우리에게 레코드 프레싱은 단순한 기계적 복제가 아닌 음악을 가장 생생하게 기록하는 작업입니다.</>,
      originDesc1: <>챔피언 프레싱은 현대 바이닐(LP) 대량 생산 과정에서 흔히 수용되는 음질적 한계에 대한 깊은 아쉬움에서 출발했습니다.<br className="hidden md:block" />우리는 레코드를 프레싱하는 과정이 단순한 '제조'가 아니라, 음악을 완성하는 마스터링의 가장 핵심적이고 최종적인 단계라고 믿습니다.</>,
      originDesc2: <>대한민국 남양주에 위치한 우리의 팩토리는 설립 초기부터 생산량(Volume)보다 사운드의 해상력(Fidelity)을 최우선으로 고려하여 설계되었습니다.<br className="hidden md:block" />수십 년간 이어져 온 아날로그 전통의 기술력과 최상의 컨디션으로 관리되는 최신 프레싱 설비가 결합된 결과물입니다.</>,
      standardDesc1: <>챔피언 프레싱은 엔지니어이자 전문 리스너들로 구성된 소수 정예 팀입니다.<br className="hidden md:block" />운영 규모를 무리하게 확장하지 않는 대신, 테스트 프레싱부터 최종 패키징에 이르는 모든 단계에서 무결점의 품질 관리를 유지합니다.</>,
      standardDesc2: <>데뷔 EP를 준비하는 독립 아티스트부터 클래식 명반을 재발매하는 대형 레거시 레이블까지, 우리가 레코드를 대하는 태도는 동일합니다.<br className="hidden md:block" />엄격한 정밀도, 투명한 커뮤니케이션, 그리고 바이닐 그루브에 새겨지는 음악에 대한 깊은 존중입니다.</>,
      readyDesc: <>여러분의 다음 프로젝트에 대한 이야기를 들려주세요.<br className="hidden md:block" />치열하게 고민한 사운드를 매력적인 실체로 완성해 드립니다.</>,
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

      {/* ABOUT HERO */}
      <section className="px-7 md:px-10 pt-20 md:pt-[15vh] pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto">
          <p className="mb-6 md:mb-8 text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/38">
            Who We Are
          </p>
          <h1 className="text-[11vw] md:text-[6.5vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase mb-12 md:mb-16">
            Beyond
            <br />
            Reproduction.
            <br />
            The New Standard.
          </h1>
          <div className="max-w-3xl">
            <p className="text-lg md:text-xl leading-relaxed text-black/70 break-keep">
              {t.heroDesc}
            </p>
          </div>
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
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 sticky top-10">
                Our Origins
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-8 uppercase">
                Born in Namyangju, built for the global standard of sound.
              </h2>

              <div className="space-y-6 max-w-2xl text-sm md:text-base leading-relaxed text-black/65 break-keep">
                <p>{t.originDesc1}</p>
                <p>{t.originDesc2}</p>
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
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 sticky top-10">
                The Standard
              </p>
            </div>

            <div className="md:col-span-8">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.03em] leading-tight mb-8 uppercase">
                No shortcuts. <br />
                Just pure analogue discipline.
              </h2>

              <div className="space-y-6 max-w-2xl text-sm md:text-base leading-relaxed text-black/65 break-keep">
                <p>{t.standardDesc1}</p>
                <p>{t.standardDesc2}</p>
              </div>
            </div>
          </div>

          {/* CLOSING */}
          <div className="border-t border-black/8 pt-8 md:pt-10 flex flex-col md:flex-row md:items-end md:justify-between gap-8 mt-32">
            <div>
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 mb-4 uppercase">
                Work with us
              </p>
              <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight uppercase">
                Ready to press?
              </h3>
              <p className="max-w-xl mt-4 text-sm md:text-base leading-relaxed text-black/60 break-keep">
                {t.readyDesc}
              </p>
            </div>

            {/* 버튼 영역 */}
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
        </div>
      </section>
    </main>
  );
}