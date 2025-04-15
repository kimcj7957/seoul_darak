import Link from "next/link";

export default function PlatformSection() {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 xs:mb-4 sm:mb-6 text-black">[ 마을 커뮤니티 활동 ]</h2>
            <p className="text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 sm:mb-6 font-bold text-black">
              즐겁게 참여하고 함께 성장하는<br className="md:hidden" />
              지역 중심 커뮤니티, 서울다락
            </p>
            <ul className="space-y-3 xs:space-y-4 sm:space-y-6 text-sm xs:text-base sm:text-lg">
              <li className="flex gap-2 xs:gap-3">
                <div className="bg-[#A5D6A7]/20 p-1.5 xs:p-2 h-min rounded-full flex-shrink-0">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#A5D6A7] rounded-full"></div>
                </div>
                <p className="font-bold text-black">주민 참여형 <strong className="font-extrabold bg-[#A5D6A7]/20 px-1">보드게임 모임과 우이천 플로깅</strong>을 통해 지역 커뮤니티를 활성화하고 환경 정화에 기여합니다.</p>
              </li>
              <li className="flex gap-2 xs:gap-3">
                <div className="bg-[#A5D6A7]/20 p-1.5 xs:p-2 h-min rounded-full flex-shrink-0">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#A5D6A7] rounded-full"></div>
                </div>
                <p className="font-bold text-black">1호점 햄버거 가게, 2호점 닭곰탕 가게 등 <strong className="font-extrabold bg-[#A5D6A7]/20 px-1">자체 매장 운영</strong>으로 지역 경제 활성화와 시니어 일자리를 창출합니다.</p>
              </li>
              <li className="flex gap-2 xs:gap-3">
                <div className="bg-[#A5D6A7]/20 p-1.5 xs:p-2 h-min rounded-full flex-shrink-0">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#A5D6A7] rounded-full"></div>
                </div>
                <p className="font-bold text-black"><strong className="font-extrabold bg-[#A5D6A7]/20 px-1">세대 간 교류</strong>와 <strong className="font-extrabold bg-[#A5D6A7]/20 px-1">지역 기반 활동</strong>을 통해 <strong className="font-extrabold bg-[#A5D6A7]/20 px-1">지속가능한 마을 공동체</strong>를 함께 만들어갑니다.</p>
              </li>
            </ul>
            <div className="mt-4 xs:mt-6 sm:mt-8 flex flex-wrap gap-3 xs:gap-4">
              <Link href="/join" className="px-4 xs:px-6 py-2 xs:py-3 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-sm xs:text-base sm:text-lg font-bold inline-block">커뮤니티 참여하기</Link>
              <a href="https://naver.me/F74qKlnO" target="_blank" rel="noopener noreferrer" className="px-4 xs:px-6 py-2 xs:py-3 border border-[#A5D6A7] text-[#A5D6A7] rounded-full hover:bg-[#A5D6A7]/10 text-sm xs:text-base sm:text-lg font-bold inline-block">매장 위치 보기</a>
            </div>
          </div>
          <div className="lg:w-1/2 bg-white rounded-lg mt-4 xs:mt-6 lg:mt-0 p-3 xs:p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 h-full">
              <a href="https://www.instagram.com/p/DILTQPoS-6h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="aspect-[3/4] relative">
                  <img 
                    src="/images/plogging_poster.jpg" 
                    alt="우이천 플로깅 이벤트" 
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
                <div className="p-3 xs:p-4 bg-white">
                  <h3 className="text-base xs:text-lg font-bold text-[#A5D6A7]">우이천 플로깅</h3>
                  <p className="text-xs xs:text-sm text-gray-600">2025.04.20 13:00</p>
                </div>
              </a>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <a 
                  href="https://www.instagram.com/p/DIbO159yonX/?igsh=azc4ZWNwbzg4bWhr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity duration-300"
                >
                  <div className="aspect-[3/4] relative">
                    <img 
                      src="/images/boardgame_poster.jpg" 
                      alt="보드게임 모임" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                </a>
                <div className="p-3 xs:p-4 bg-white">
                  <a 
                    href="https://www.instagram.com/p/DIbO159yonX/?igsh=azc4ZWNwbzg4bWhr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity duration-300"
                  >
                    <h3 className="text-base xs:text-lg font-bold text-[#A5D6A7]">보드게임 모임</h3>
                    <p className="text-xs xs:text-sm text-gray-600">2025.04.30 20:00</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 