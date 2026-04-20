"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import { useLanguage } from "@/contexts/LanguageContext";

// 고객 제출용 단가표 (2026.04 기준)
const PRICING_TIERS = [
  { min: 5000, standard: 7000, special: 8000 },
  { min: 4000, standard: 7500, special: 8500 },
  { min: 3000, standard: 8000, special: 9000 },
  { min: 2000, standard: 8500, special: 9500 },
  { min: 1000, standard: 9000, special: 10000 },
  { min: 900, standard: 9500, special: 10500 },
  { min: 800, standard: 10000, special: 11000 },
  { min: 700, standard: 10500, special: 11500 },
  { min: 600, standard: 11000, special: 12000 },
  { min: 500, standard: 11500, special: 12500 },
  { min: 400, standard: 12000, special: 13000 },
  { min: 300, standard: 12500, special: 13500 },
  { min: 200, standard: 14500, special: 16500 },
];

export default function QuotePage() {
  const [colorType, setColorType] = useState<"standard" | "special">("standard");
  const [quantityStr, setQuantityStr] = useState<string>("500");

  const { language } = useLanguage();
  const USD_RATE = 1500;

  const quantity = parseInt(quantityStr, 10);
  const isValidQuantity = !isNaN(quantity) && quantity > 0;

  const getEffectiveQuantity = (qty: number) => {
    if (qty < 200) return 200;
    if (qty >= 5000) return qty; 
    const tier = PRICING_TIERS.find((t) => qty >= t.min);
    return tier ? tier.min : 200;
  };

  const calculatePricing = (qty: number, isSpecial: boolean) => {
    const effectiveQty = getEffectiveQuantity(qty);
    
    const lookupMin = effectiveQty >= 5000 ? 5000 : effectiveQty;
    const tier = PRICING_TIERS.find((t) => t.min === lookupMin);
    
    let unitPrice = tier ? (isSpecial ? tier.special : tier.standard) : 0;
    let totalPrice = unitPrice * effectiveQty;

    if (language === 'en') {
      unitPrice = unitPrice / USD_RATE;
      totalPrice = totalPrice / USD_RATE;
    }

    return {
      unitPrice,
      totalPrice,
      effectiveQty,
    };
  };

  const pricing = isValidQuantity ? calculatePricing(quantity, colorType === "special") : { unitPrice: 0, totalPrice: 0, effectiveQty: 200 };

  const formatCurrency = (val: number) => {
    if (language === 'en') {
      return new Intl.NumberFormat('en-US', { 
        style: 'currency', 
        currency: 'USD',
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
      }).format(val);
    }
    return `₩${val.toLocaleString('ko-KR')}`;
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantityStr(e.target.value);
  };

  // Translations
  const dict = {
    en: {
      title: "Make a Quote",
      vinylType: "Vinyl Type",
      stdColor: <>Standard Color<br />(Black, etc.)</>,
      spcColor: <>Special Color<br />(Marble, Custom)</>,
      quantity: "Quantity",
      qtyPlaceholder: "200",
      qtySuffix: "units",
      minQtyError: "Minimum order quantity is 200 units.",
      pricingTiers: "Pricing Tiers",
      pricingDesc1: "Costs are calculated based on the minimum threshold of your quantity's tier.",
      pricingDesc2: "(e.g., 250 units will cost exactly the same total as 200 units)",
      unitPrice: "Unit Price",
      totalPrice: "Estimated Total Price",
      baseIncluded: "based on",
      basedOnSuffix: "units",
      noticesTitle: "Notices",
      notice1: "The above estimate covers Record Pressing + Center Labels (CMYK printed).",
      notice2: "Vinyl mastering, print packaging (jackets, inserts), and VAT are not included.",
      notice3: "Final quotes may vary based on exact color selection and packaging specs. Please contact us for an official invoice.",
      inquiryTitle: "Ready to Press?",
      inquiryDesc: "The calculation above is an estimate. For an accurate quote including test pressings, custom packaging, and specific delivery schedules, please fill out our official project inquiry form.",
      inquiryBtn: "Submit Order Inquiry",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdzbqsmw9AV_nORKQwmsOgEo9EZpA51lcSwiMzJj95mQv09gQ/viewform"
    },
    ko: {
      title: "Make a Quote",
      vinylType: "Vinyl Type",
      stdColor: <>스탠다드 컬러<br />(블랙 등 기본 컬러)</>,
      spcColor: <>스페셜 오더<br />(마블 및 커스텀 컬러)</>,
      quantity: "Quantity",
      qtyPlaceholder: "200",
      qtySuffix: "장",
      minQtyError: "프레싱 최소 주문 수량(MOQ)은 200장입니다.",
      pricingTiers: "Pricing Tiers",
      pricingDesc1: "입력하신 수량을 기준으로 최소 구간 단가가 적용됩니다.",
      pricingDesc2: "(예: 250장 주문 시, 200장 기준 단가 및 총액 적용)",
      unitPrice: "Unit Price",
      totalPrice: "Total Price",
      baseIncluded: "",
      basedOnSuffix: "장 기준",
      noticesTitle: "Notices",
      notice1: "본 견적은 '바이닐 알판(Record Pressing)' 및 '풀 컬러 라벨 인쇄(Center Labels)'가 포함된 기준가입니다.",
      notice2: "바이닐 마스터링(커팅), 인쇄물(자켓, 인서트 등) 및 부가세(VAT)는 본 견적에 포함되어 있지 않습니다.",
      notice3: "선택하시는 세부 사양 및 컬러 배합에 따라 최종 단가가 변동될 수 있습니다. 보다 정확한 산출을 원하시면 담당자에게 문의해 주십시오.",
      inquiryTitle: "프로젝트 시작하기",
      inquiryDesc: "위 계산기를 통해 대략적인 예산을 확인하셨다면, 이제 저희와 함께 솔루션을 완성할 차례입니다. 맞춤형 패키지 옵션과 구체적인 생산 일정을 조율하기 위해 아래 폼을 가볍게 작성해 주세요.",
      inquiryBtn: "세부 견적 및 상담 접수하기",
      formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSdzbqsmw9AV_nORKQwmsOgEo9EZpA51lcSwiMzJj95mQv09gQ/viewform"
    }
  };
  const t = dict[language];

  return (
    <main className="min-h-screen bg-[#f5f3ee] text-[#111111] flex flex-col">
      <div className="px-7 md:px-10 pt-8 pb-4">
        <Header />
      </div>

      <div className="flex-1 px-7 md:px-10 py-12 md:py-20 max-w-[1200px] w-full mx-auto">
        <h1 className="text-5xl md:text-7xl font-semibold tracking-[-0.04em] uppercase mb-12">
          {t.title}
        </h1>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 mb-16">
          
          {/* 입력 폼 섹션 */}
          <div>
            {/* 컬러 선택 */}
            <div className="mb-10">
              <label className="block text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold mb-4">
                {t.vinylType}
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setColorType("standard")}
                  className={`py-3 px-4 md:px-6 text-[11px] md:text-xs uppercase tracking-[0.1em] transition-all border break-keep leading-relaxed ${
                    colorType === "standard"
                      ? "bg-black text-[#f5f3ee] border-black"
                      : "bg-transparent text-black border-black/20 hover:border-black/50 hover:bg-black/20"
                  }`}
                >
                  {t.stdColor}
                </button>
                <button
                  onClick={() => setColorType("special")}
                  className={`py-3 px-4 md:px-6 text-[11px] md:text-xs uppercase tracking-[0.1em] transition-all border break-keep leading-relaxed ${
                    colorType === "special"
                      ? "bg-black text-[#f5f3ee] border-black"
                      : "bg-transparent text-black border-black/20 hover:border-black/50 hover:bg-black/20"
                  }`}
                >
                  {t.spcColor}
                </button>
              </div>
            </div>

            {/* 수량 입력 */}
            <div className="mb-10">
              <label 
                htmlFor="quantity" 
                className="block text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold mb-3"
              >
                {t.quantity}
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="quantity"
                  min="200"
                  max="30000"
                  value={quantityStr}
                  onChange={handleQuantityChange}
                  className="w-full bg-transparent border-b-2 border-black/20 focus:border-black outline-none py-4 text-3xl font-semibold transition-colors"
                  placeholder={t.qtyPlaceholder}
                />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-black/40 text-lg">
                  {t.qtySuffix}
                </span>
              </div>
              
              {quantity < 200 && (
                <p className="mt-3 text-red-600 text-sm">
                  {t.minQtyError}
                </p>
              )}
            </div>
            
            {/* 단가 구간 정보 */}
            <div className="hidden md:block pt-8 border-t border-black/10">
              <p className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-black/40 mb-3">
                {t.pricingTiers}
              </p>
              <div className="text-xs text-black/60 leading-relaxed max-w-sm space-y-1">
                <p>{t.pricingDesc1}</p>
                <p>{t.pricingDesc2}</p>
              </div>
            </div>
          </div>

          {/* 결과 표시 섹션 */}
          <div className="bg-[#ecede8] rounded-sm border border-black/5 flex flex-col overflow-hidden">
            
            <div className="relative w-full h-48 md:h-64 bg-black/5">
              <Image
                src="/images/impression-01.jpeg"
                alt="Standard Vinyl"
                fill
                className={`object-cover transition-opacity duration-[800ms] ease-out ${
                  colorType === "standard" ? "opacity-100" : "opacity-0"
                }`}
              />
              <Image
                src="/images/impression-03.jpeg"
                alt="Special Vinyl"
                fill
                className={`object-cover transition-opacity duration-[800ms] ease-out ${
                  colorType === "special" ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center flex-1">
              <h2 className="text-[11px] md:text-xs uppercase tracking-[0.2em] text-black/50 mb-8 border-b border-black/10 pb-4">
                Estimated Cost
              </h2>

              <div className="mb-8">
              <p className="text-sm text-black/60 mb-1">{t.unitPrice}</p>
              <p className="text-3xl font-semibold">
                {formatCurrency(pricing.unitPrice)}
              </p>
            </div>

            <div>
              <p className="text-sm text-black/60 mb-1 flex items-center gap-2">
                {t.totalPrice}
                {isValidQuantity && quantityStr !== pricing.effectiveQty.toString() && (
                  <span className="text-black/40 text-[11px] font-normal inline-flex items-center">
                    {language === 'en' ? `(${t.baseIncluded} ${pricing.effectiveQty} ${t.basedOnSuffix})` : `(${pricing.effectiveQty}${t.basedOnSuffix})`}
                  </span>
                )}
              </p>
              <p className="text-4xl md:text-5xl tracking-[-0.02em] font-semibold flex items-center">
                {formatCurrency(pricing.totalPrice)}
              </p>
            </div>
          </div>
          </div>
        </div>

        {/* INQUIRY CTA SECTION */}
        <div className="bg-white border border-black/10 shadow-md p-10 md:p-16 mb-16 text-center flex flex-col items-center rounded-sm">
          <p className="text-[10px] md:text-[12px] font-semibold uppercase tracking-[0.28em] text-black/60 mb-5">
            NEXT STEP
          </p>
          <h3 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-black mb-6">
            {t.inquiryTitle}
          </h3>
          <p className="max-w-2xl text-base md:text-lg font-medium leading-relaxed text-black/80 break-keep mb-10">
            {t.inquiryDesc}
          </p>
          <a
            href={t.formUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-[54px] md:h-[60px] items-center justify-center border-2 border-black bg-transparent text-black px-12 md:px-16 text-[13px] md:text-[14px] font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-black/5 hover:-translate-y-0.5"
          >
            {t.inquiryBtn}
          </a>
        </div>

        {/* 안내사항 */}
        <div className="pt-8 mb-10">
          <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/40 mb-6">
            {t.noticesTitle}
          </h3>
          <ul className="space-y-3 text-sm md:text-base text-black/70 leading-relaxed max-w-3xl break-keep">
            <li className="flex items-start">
              <span className="mr-3 mt-[5px] w-1.5 h-1.5 bg-black/40 rounded-full flex-shrink-0"></span>
              {t.notice1}
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-[5px] w-1.5 h-1.5 bg-black/40 rounded-full flex-shrink-0"></span>
              {t.notice2}
            </li>
            <li className="flex items-start">
              <span className="mr-3 mt-[5px] w-1.5 h-1.5 bg-black/40 rounded-full flex-shrink-0"></span>
              {t.notice3}
            </li>
          </ul>
        </div>
      </div>

      <footer className="px-7 md:px-10 py-8 border-t border-black/10 mt-auto">
        <div className="flex items-center justify-between text-[10px] md:text-[11px] uppercase tracking-[0.28em] text-black/28">
          <span>CHAMPION PRESSING</span>
          <span>© 2026. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </main>
  );
}