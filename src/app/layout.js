import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nanum-gothic',
});

export const metadata = {
  title: "서울다락 - 지역 주민들이 함께 만드는 커뮤니티",
  description: "서울다락은 마을 공동체 활동과 친환경 식당 운영을 통해 지역 활성화와 일자리 창출에 기여합니다.",
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://seouldarak.site' : 'http://localhost:3000'),
  openGraph: {
    title: "서울다락 - 지역 주민들이 함께 만드는 커뮤니티",
    description: "서울다락은 마을 공동체 활동과 친환경 식당 운영을 통해 지역 활성화와 일자리 창출에 기여합니다.",
    url: 'https://seouldarak.site',
    siteName: '서울다락',
    images: [
      {
        url: '/images/bookmark_image.jpeg',
        width: 1200,
        height: 630,
        alt: '서울다락 북마크 이미지'
      }
    ],
    locale: 'ko_KR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: "서울다락 - 지역 주민들이 함께 만드는 커뮤니티",
    description: "서울다락은 마을 공동체 활동과 친환경 식당 운영을 통해 지역 활성화와 일자리 창출에 기여합니다.",
    images: ['/images/bookmark_image.jpeg']
  },
  icons: {
    apple: '/images/bookmark_image.jpeg'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={`${nanumGothic.variable} font-sans antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
