import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Make a Quote | Champion Pressing',
  description: '당신의 음악을 가장 완벽한 바이닐 레코드로 만들어보세요. 챔피언 프레싱에서 빠르고 명확한 프레싱 견적 및 상담을 받아보실 수 있습니다.',
};

export default function QuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
