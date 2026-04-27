import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://championpressing.com"),
  title: "Champion Pressing | 국내 프리미엄 엘피제작 및 바이닐 프레싱 팩토리",
  description: "최고의 퀄리티를 자랑하는 국내 엘피제작 업체 챔피언 프레싱. 오리지널 사운드를 담아내는 프리미엄 바이닐 레코드(LP) 프레싱 팩토리입니다.",
  keywords: ["엘피제작", "엘피제작업체", "국내 엘피제작 업체", "LP제작", "바이닐 레코드", "LP 팩토리", "바이닐 프레싱", "챔피언 프레싱"],
  openGraph: {
    title: "Champion Pressing | 국내 프리미엄 엘피(LP) 제작 업체",
    description: "사운드 디테일에 대한 장인 정신을 바탕으로 최상의 바이닐 프레싱 퀄리티를 선사하는 국내 엘피(LP) 제조 파트너입니다.",
    url: "https://champion-pressing-site.vercel.app", // 추후 커스텀 도메인으로 변경 예정
    siteName: "Champion Pressing",
    images: [
      {
        url: "/images/about-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Champion Pressing Factory",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    google: "eG0zWa9r4P0yEfyOR6y1qKe5fkP2XFPMT2YPOeaL1UM",
    other: {
      "naver-site-verification": ["458da3bed113587340e44cda81ea14d103457594"],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
