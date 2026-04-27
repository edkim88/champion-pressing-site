import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Champion Pressing',
  description: '챔피언 프레싱은 아티스트의 본래 의도와 사운드 디테일을 온전히 담아낸다는 단 하나의 목표로 모인 엔지니어이자 전문 리스너 그룹입니다.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
