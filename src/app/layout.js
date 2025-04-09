import { Nanum_Gothic } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const nanumGothic = Nanum_Gothic({
  weight: ['400', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nanum-gothic',
});

export const metadata = {
  title: "서울다락 - 지역 주민들이 함께 만드는 커뮤니티",
  description: "서울다락은 마을 공동체 활동과 친환경 식당 운영을 통해 지역 활성화와 일자리 창출에 기여합니다.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body
        className={`${nanumGothic.variable} font-sans antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
