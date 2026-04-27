import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects Portfolio | Champion Pressing',
  description: '챔피언 프레싱에서 성공적으로 제작한 다양한 아티스트 및 레이블의 바이닐 레코드 프레싱 포트폴리오를 확인하세요.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
