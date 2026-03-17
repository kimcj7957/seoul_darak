'use client';
import Link from "next/link";

const footerBanners = [
  {
    href: "https://www.seoul.go.kr/",
    imgSrc: "/images/footer-banners/seoul-gov.png",
    imgAlt: "서울특별시",
  },
  {
    href: "https://www.nts.go.kr/",
    imgSrc: "/images/footer-banners/nts.png",
    imgAlt: "국세청",
  },
  {
    href: "https://www.acrc.go.kr/",
    imgSrc: "/images/footer-banners/acrc.png",
    imgAlt: "국민권익위원회",
  },
];

export default function Footer() {
  return (
    <>
      <section className="bg-white py-4 xs:py-5 sm:py-6 border-t border-gray-200">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 xs:gap-4 sm:gap-6 items-center">
            {footerBanners.map((banner) => (
              <a
                key={banner.href}
                href={banner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <img
                  src={banner.imgSrc}
                  alt={banner.imgAlt}
                  className="h-10 xs:h-12 sm:h-14 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#17171B] text-white py-6 xs:py-8 sm:py-12">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between mb-4 xs:mb-6 sm:mb-8">
            <div>
              <nav className="flex items-center gap-2 xs:gap-3 whitespace-nowrap flex-nowrap overflow-x-auto">
                <span className="text-sm xs:text-base sm:text-lg font-extrabold leading-6 xs:leading-7 min-h-[1.5rem] xs:min-h-[1.75rem]">사회적협동조합 서울다락</span>
                <span className="opacity-60" aria-hidden>│</span>
                <Link href="/organization" className="hover:text-gray-300 text-sm xs:text-base sm:text-lg font-bold leading-6 xs:leading-7 min-h-[1.5rem] xs:min-h-[1.75rem]">함께하는 사람들</Link>
                <span className="opacity-60" aria-hidden>│</span>
                <Link href="/privacy" className="hover:text-gray-300 text-sm xs:text-base sm:text-lg font-bold leading-6 xs:leading-7 min-h-[1.5rem] xs:min-h-[1.75rem]">개인정보 처리방침</Link>
                <span className="opacity-60" aria-hidden>│</span>
                <Link href="/terms" className="hover:text-gray-300 text-sm xs:text-base sm:text-lg font-bold leading-6 xs:leading-7 min-h-[1.5rem] xs:min-h-[1.75rem]">이용약관</Link>
              </nav>
              <br/>
              <div className="mt-2 space-y-1">
                <div className="flex items-center gap-2 xs:gap-3 flex-wrap">
                  <span className="text-xs xs:text-sm sm:text-base leading-6 xs:leading-7">대표 : 신해균</span>
                  <span className="opacity-60" aria-hidden>│</span>
                  <span className="text-xs xs:text-sm sm:text-base leading-6 xs:leading-7">전화 : 010-4321-1818</span>
                  <span className="opacity-60" aria-hidden>│</span>
                  <span className="text-xs xs:text-sm sm:text-base leading-6 xs:leading-7">주소 : 서울특별시 도봉구 삼양로 154길 42, 1층</span>
                </div>
                <div className="flex items-center gap-2 xs:gap-3 flex-wrap">
                  <span className="text-xs xs:text-sm sm:text-base leading-6 xs:leading-7">인가 번호 : 제2025-1420-S0-5704호</span>
                  <span className="opacity-60" aria-hidden>│</span>
                  <span className="text-xs xs:text-sm sm:text-base leading-6 xs:leading-7">E-mail : seouldarak1@gmail.com</span>
                  <span className="opacity-60" aria-hidden>│</span>
                  <span className="text-xs xs:text-sm sm:text-base leading-6 xs:leading-7">개인정보관리책임자 : 신해균</span>
                </div>

              </div>
            </div>
            <div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-3 xs:mb-4 mt-4 xs:mt-6 md:mt-0">SNS</h3>
              <div className="flex flex-wrap gap-3 xs:gap-4 sm:gap-6">
                <a href="https://www.instagram.com/seouldarak/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-sm xs:text-base sm:text-lg font-bold">
                  <svg className="w-5 h-5 xs:w-6 xs:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-4 xs:pt-6 sm:pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm xs:text-base sm:text-lg font-bold mb-3 xs:mb-4 md:mb-0">사회적협동조합 서울다락 @ 2026, All Rights Reserved.</p>
              <a href="/donation" className="w-full md:w-auto px-4 xs:px-6 py-1.5 xs:py-2 bg-[#A5D6A7] text-white rounded hover:bg-[#81C784] text-sm xs:text-base sm:text-lg font-bold text-center">서울다락 후원하기</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 