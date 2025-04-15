import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setDarkMode(true);
    }
  }, []);

  return (
    <section className={`relative ${darkMode ? 'bg-[#17171B]' : 'bg-white'}`}>
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 lg:gap-12">
          <div className="lg:w-[50%]">
            <h1 className={`text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 xs:mb-4 sm:mb-6 ${darkMode ? 'text-white' : 'text-black'}`}>
              서울다락
            </h1>
            <p className={`text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 sm:mb-6 font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
              지역 중심의 협동조합으로 <br className="md:hidden" />
              함께 성장하는 마을 공동체
            </p>
            <p className={`text-sm xs:text-base sm:text-lg mb-6 xs:mb-8 sm:mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              서울다락은 지역 주민들이 함께 모여 마을 공동체를 만들어가는 협동조합입니다.<br />
              다양한 세대가 함께 모여 즐거운 시간을 보내며 자연스럽게 소통하는 계기가 되고 있습니다.
            </p>
            <div className="flex flex-wrap gap-3 xs:gap-4">
              <Link href="/join" className="px-4 xs:px-6 py-2 xs:py-3 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-sm xs:text-base sm:text-lg font-bold inline-block transition-colors duration-300">조합원 가입하기</Link>
              <a href="https://naver.me/F74qKlnO" target="_blank" rel="noopener noreferrer" className="px-4 xs:px-6 py-2 xs:py-3 border border-[#A5D6A7] text-[#A5D6A7] rounded-full hover:bg-[#A5D6A7]/10 text-sm xs:text-base sm:text-lg font-bold inline-block transition-colors duration-300">매장 위치 보기</a>
            </div>
          </div>
          <div className="lg:w-[50%] lg:mt-[-2rem]">
            <div className="aspect-[16/16] relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={process.env.NODE_ENV === 'production' ? '/seoul_darak/images/hero.png' : '/images/hero.png'}
                alt="서울다락 협동조합" 
                className="w-full h-full object-cover absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 