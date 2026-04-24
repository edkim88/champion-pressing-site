import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
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
  title: "Champion Pressing | 바이닐(LP) 프레싱 팩토리",
  description: "아티스트의 본래 의도와 사운드 디테일을 온전히 담아내는 프리미엄 바이닐 레코드 제조 파트너. 대한민국 남양주 팩토리에서 최상의 퀄리티를 경험하세요.",
  openGraph: {
    title: "Champion Pressing",
    description: "깊이 있는 리스닝 경험과 사운드 디테일에 대한 확고한 장인 정신을 바탕으로 최상의 바이닐 프레싱을 선사합니다.",
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
      </body>
    </html>
  );
}
