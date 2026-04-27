import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressing Process | Champion Pressing',
  description: '바이닐(LP) 생산은 사운드를 특수한 아날로그 매체로 정교하게 옮겨 담는 매우 섬세한 물리적 여정입니다. 마스터링 커팅부터 프레싱, 패키징까지의 전 과정을 안내합니다.',
};

export default function PressingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
