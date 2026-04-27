import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quality & Standards | Champion Pressing',
  description: '오디오파일 그레이드의 최고 품질을 챔피언 프레싱의 자체 제작 컴파운드와 최첨단 모니터링 기반의 무결점 환경에서 구현합니다.',
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
