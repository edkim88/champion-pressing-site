"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Pressing() {
  const { language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dict = {
    en: {
      heroDesc: "Vinyl production is not just a replication; it is a highly sensitive physical translation of sound. Champion Pressing’s expert consultants work closely with you from the mastering studio to final delivery, ensuring your sonic vision is pressed into the groove without compromise.",
      p1Desc: "The crucial first step where your digital or analog masters are translated into physical grooves. Our expert consultants collaborate closely with cutting engineers to ensure loudness, dynamics, and frequency balances are perfectly optimized for the vinyl medium.",
      p2Desc: "The cut lacquer master is electroplated with silver and nickel to create the metal stampers used for production. This requires a strictly controlled, dust-free environment, as even microscopic imperfections directly translate to surface noise.",
      p3Desc: "Stampers are loaded into the press, shaping PVC pellets under extreme heat and pressure. Before full production, we extract Test Pressings (TPs). Our consultants and artists listen together to rigorously check for pops, distortion, and dynamic integrity.",
      p4Desc: "The physical presentation is just as important as the sound. We meticulously inspect the color accuracy, paper stock, and finish of your sleeves. Finally, the records are carefully packaged and safely delivered to your hands.",
      closeDesc: "12-inch or 7-inch? 33 RPM or 45 RPM? Let us guide you to the format that best serves your music.",
      makeQuoteBtn: "Make a Quote",
      backToTopBtn: "Back to Top"
    },
    ko: {
      heroDesc: <>바이닐(LP) 생산은 단순한 복제가 아닙니다. 소리를 물리적인 매체로 변환하는 매우 섬세하고 예민한 과정입니다.<br className="hidden md:block" />챔피언 프레싱의 전문 컨설턴트들은 마스터링 스튜디오부터 최종 납품에 이르기까지 아티스트와 긴밀하게 협력하여, 당신이 그리는 사운드의 질감이 레코드 그루브 안에 온전히 담길 수 있도록 타협 없이 검수합니다.</>,
      p1Desc: <>디지털 또는 아날로그 마스터 음원이 물리적인 그루브로 처음 치환되는 가장 결정적인 단계입니다.<br className="hidden md:block" />우리는 전문 커팅 엔지니어와의 긴밀한 소통을 통해, 바이닐 매체 단위에서 허용 가능한 라우드니스(음압), 다이내믹스, 그리고 주파수 밸런스가 완벽하게 최적화되도록 조율합니다.</>,
      p2Desc: <>커팅이 완료된 래커 마스터(Lacquer Master) 표면에 은과 니켈을 전기도금하여 실제 프레싱에 사용될 메탈 스탬퍼(Metal Stampers)를 생성합니다.<br className="hidden md:block" />미세한 먼지나 결함조차 표면 노이즈로 직결되기 때문에, 모든 과정은 엄격하게 통제된 무결점 환경에서 진행됩니다.</>,
      p3Desc: <>스탬퍼가 프레스기에 장착되고, 극도의 열과 압력을 가해 PVC 펠릿을 형태화합니다.<br className="hidden md:block" />본 생산에 앞서 테스트 프레싱(TP) 공정을 필수적으로 거치며, 전문 컨설턴트와 아티스트가 함께 청취하여 팝 노이즈, 디스토션, 다이내믹 무결성 등을 철저하게 검증합니다.</>,
      p4Desc: <>피지컬 매체의 시각적 완성도는 사운드만큼이나 중요합니다.<br className="hidden md:block" />재킷 스펙의 컬러 정확도, 지류(Paper Stock)의 질감, 인쇄 마감 상태를 집요하게 인스펙션합니다.<br className="hidden md:block" />이 모든 과정을 거친 레코드는 가장 안전하게 패키징되어 당신의 손으로 직접 배송됩니다.</>,
      closeDesc: <>12인치가 좋을까요, 7인치가 맞을까요?<br />33 RPM과 45 RPM 중 어느 포맷이 당신의 음악적 의도를 더 완벽하게 살릴 수 있을까요?<br />챔피언 프레싱의 전문가들이 올바른 해답을 찾아드립니다.</>,
      makeQuoteBtn: "Make a Quote",
      backToTopBtn: "Back to Top"
    }
  };
  const t = dict[language];

  const processes = [
    {
      id: "01",
      title: "Mastering & Cutting",
      description: t.p1Desc,
      imgSrc: "/images/process-01 L2.jpeg",
    },
    {
      id: "02",
      title: "Electroforming (Plating)",
      description: t.p2Desc,
      imgSrc: "/images/process-02 L.jpeg",
    },
    {
      id: "03",
      title: "Pressing & QC",
      description: t.p3Desc,
      imgSrc: "/images/process-03 L.jpeg",
    },
    {
      id: "04",
      title: "Packaging & Delivery",
      description: t.p4Desc,
      imgSrc: "/images/process-04 L.jpeg",
    },
  ];

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
            The Process
          </p>
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.88] font-semibold tracking-[-0.06em] uppercase mb-12 md:mb-16">
            From Master.
            <br />
            To Groove.
            <br />
            To Reality.
          </h1>
          <div className="max-w-3xl">
            <p className="text-base md:text-lg leading-relaxed text-black/70 break-keep">
              {t.heroDesc}
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
              <div className="w-full md:w-[55%] bg-black/5 p-8 md:p-12 rounded-sm flex items-center justify-center">
                <Image
                  src={process.imgSrc}
                  alt={process.title}
                  width={800}
                  height={450}
                  className="w-full h-auto object-contain mix-blend-multiply transition duration-700 hover:scale-[1.03]"
                />
              </div>

              <div className="w-full md:w-[40%]">
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/38 mb-4 border-b border-black/10 pb-4 inline-block">
                  Phase {process.id}
                </p>
                <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] mb-6">
                  {process.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed text-black/65 break-keep">
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
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/35 mb-4">
              CONSULTATION
            </p>
            <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.03em] leading-tight uppercase">
              Unsure about the specs?
            </h3>
            <p className="max-w-xl mt-4 text-sm md:text-base leading-relaxed text-black/60 break-keep">
              {t.closeDesc}
            </p>
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