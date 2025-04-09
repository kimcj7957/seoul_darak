'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-semibold text-base text-[#17171B]">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-3 xs:px-4 sm:px-6 lg:px-8 py-3 xs:py-4">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="font-bold text-lg xs:text-xl sm:text-2xl text-[#17171B] mr-auto hover:text-gray-500">서울다락</Link>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#17171B] focus:outline-none"
            >
              <svg className="h-5 w-5 xs:h-6 xs:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <ul className="hidden lg:flex space-x-13 xl:space-x-10 text-lg">
            <li><Link href="/" className="text-[#17171B] hover:text-gray-500 font-bold">홈</Link></li>
            <li><Link href="/about" className="text-[#17171B] hover:text-gray-500 font-bold">소개</Link></li>
            <li><Link href="/services" className="text-[#17171B] hover:text-gray-500 font-bold">서비스</Link></li>
            <li><Link href="/contact" className="text-[#17171B] hover:text-gray-500 font-bold">문의</Link></li>
          </ul>
          
          {/* 데스크톱 버튼 그룹 */}
          <div className="hidden lg:flex items-center ml-10 xl:ml-8">
            <Link href="/search" className="px-8 py-2 text-[#17171B] hover:text-gray-500 text-lg font-bold flex items-center">
              통합검색
            </Link>
            <Link href="/join" className="px-8 py-2 text-[#17171B] hover:text-gray-500 text-lg font-bold">
              조합원 가입
            </Link>
          </div>
        </div>
        
        {/* 모바일 메뉴 */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? "max-h-96 opacity-100 border-t border-gray-200 mt-4 pb-4" 
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className={`space-y-3 ${mobileMenuOpen ? "mt-4" : "mt-0"} transition-all duration-300`}>
            <li><Link href="/" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">홈</Link></li>
            <li><Link href="/about" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">소개</Link></li>
            <li><Link href="/services" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">서비스</Link></li>
            <li><Link href="/contact" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">문의</Link></li>
            <li><Link href="/search" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">통합검색</Link></li>
            <li><Link href="/join" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">조합원 가입</Link></li>
          </ul>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section className="bg-[#E3F2FD]/98 py-6 xs:py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 xs:mb-6 md:mb-8 max-w-3xl leading-tight text-black">
            <span className="text-[#2196F3]">지역 주민</span>들이 함께 <span className="text-[#2196F3]">커뮤니티</span>를 만들어
            마을의 변화를 이끌어갑니다
          </h1>
          <p className="text-lg xs:text-xl sm:text-2xl mb-4 xs:mb-6 md:mb-8 max-w-2xl font-bold text-black">
            서울다락은 <br className="md:hidden" />
            마을 공동체 활동과 친환경 식당 운영을 통해 <br className="md:hidden" />
            지역 활성화와 일자리 창출에 기여합니다.
          </p>
          <div className="max-w-2xl text-sm xs:text-base sm:text-lg">
            <p className="mb-2 xs:mb-3 md:mb-4 font-bold text-black">서울다락은 <strong className="font-extrabold bg-[#2196F3]/20 px-1">우이천 플로깅과 보드게임 활동 등의 여러 소모임</strong>을 진행함으로써</p>
            <p className="mb-2 xs:mb-3 md:mb-4 font-bold text-black">지역민과 함께 <strong className="font-extrabold bg-[#2196F3]/20 px-1">지역 커뮤니티 활동</strong>을 촉진합니다.</p>
            <p className="mb-2 xs:mb-3 md:mb-4 font-bold text-black"><strong className="font-extrabold bg-[#2196F3]/20 px-1"> 또한 자체 매장 운영을 통해</strong>시니어 고용 효과를 창출하고,</p>
            <p className="mb-2 xs:mb-3 md:mb-4 font-bold text-black">주민들의 <strong className="font-extrabold bg-[#2196F3]/20 px-1">참여와 소통</strong>으로 마을 공동체를 활성화하여</p>
            <p className="mb-4 xs:mb-6 md:mb-8 font-bold text-black"><strong className="font-extrabold bg-[#2196F3]/20 px-1">지속가능한 환경과 지역 경제, 세대 간 화합</strong>의 가치를 실현합니다.</p>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-white">
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
                  <div className="bg-[#2196F3]/20 p-1.5 xs:p-2 h-min rounded-full flex-shrink-0">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#2196F3] rounded-full"></div>
                  </div>
                  <p className="font-bold text-black">주민 참여형 <strong className="font-extrabold bg-[#2196F3]/20 px-1">보드게임 모임과 우이천 플로깅</strong>을 통해 지역 커뮤니티를 활성화하고 환경 정화에 기여합니다.</p>
                </li>
                <li className="flex gap-2 xs:gap-3">
                  <div className="bg-[#2196F3]/20 p-1.5 xs:p-2 h-min rounded-full flex-shrink-0">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#2196F3] rounded-full"></div>
                  </div>
                  <p className="font-bold text-black">1호점 햄버거 가게, 2호점 닭곰탕 가게 등 <strong className="font-extrabold bg-[#2196F3]/20 px-1">자체 매장 운영</strong>으로 지역 경제 활성화와 시니어 일자리를 창출합니다.</p>
                </li>
                <li className="flex gap-2 xs:gap-3">
                  <div className="bg-[#2196F3]/20 p-1.5 xs:p-2 h-min rounded-full flex-shrink-0">
                    <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#2196F3] rounded-full"></div>
                  </div>
                  <p className="font-bold text-black"><strong className="font-extrabold bg-[#2196F3]/20 px-1">세대 간 교류</strong>와 <strong className="font-extrabold bg-[#2196F3]/20 px-1">지역 기반 활동</strong>을 통해 <strong className="font-extrabold bg-[#2196F3]/20 px-1">지속가능한 마을 공동체</strong>를 함께 만들어갑니다.</p>
                </li>
              </ul>
              <div className="mt-4 xs:mt-6 sm:mt-8 flex flex-wrap gap-3 xs:gap-4">
                <button className="px-4 xs:px-6 py-2 xs:py-3 bg-[#2196F3] text-white rounded-full hover:bg-[#1976D2] text-sm xs:text-base sm:text-lg font-bold">커뮤니티 참여하기</button>
                <a href="https://www.instagram.com/seouldarak/" target="_blank" rel="noopener noreferrer" className="px-4 xs:px-6 py-2 xs:py-3 border border-[#2196F3] text-[#2196F3] rounded-full hover:bg-[#2196F3]/10 text-sm xs:text-base sm:text-lg font-bold inline-block">매장 위치 보기</a>
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
                    <h3 className="text-base xs:text-lg font-bold text-[#2196F3]">우이천 플로깅</h3>
                    <p className="text-xs xs:text-sm text-gray-600">2025.04.20 13:00</p>
                  </div>
                </a>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-[3/4] relative">
                    <img 
                      src="/images/boardgame_poster.jpg" 
                      alt="보드게임 모임" 
                      className="w-full h-full object-cover absolute inset-0"
                    />
                  </div>
                  <div className="p-3 xs:p-4 bg-white">
                    <h3 className="text-base xs:text-lg font-bold text-[#2196F3]">보드게임 모임</h3>
                    <p className="text-xs xs:text-sm text-gray-600">2025.04.30 20:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cooperation Section */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-[#E3F2FD]/98">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-center text-black">서울다락 서비스</h2>
          <p className="text-center text-base xs:text-lg sm:text-xl mb-6 xs:mb-8 sm:mb-12 font-bold text-black">서울다락과 함께 지역 사회에 참여하세요.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="flex justify-center items-center w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rounded-full bg-[#2196F3]/20 text-[#2196F3] font-extrabold mb-3 xs:mb-5 sm:mb-6 text-base xs:text-lg sm:text-xl">1</div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-black">커뮤니티 활동</h3>
              <p className="text-sm xs:text-base sm:text-lg font-bold text-black">보드게임 모임, 우이천 플로깅 등 주민들이 함께 참여할 수 있는 다양한 커뮤니티 활동을 운영합니다. 환경 보호와 주민 교류를 동시에 경험해보세요.</p>
            </div>
            <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-lg shadow-sm">
              <div className="flex justify-center items-center w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rounded-full bg-[#2196F3]/20 text-[#2196F3] font-extrabold mb-3 xs:mb-5 sm:mb-6 text-base xs:text-lg sm:text-xl">2</div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-black">서울다락 매장</h3>
              <p className="text-sm xs:text-base sm:text-lg font-bold text-black">1호점 햄버거 가게와 2호점 닭곰탕 가게를 운영하며, 시니어 고용을 통해 세대 간 화합과 지역 경제 활성화에 기여합니다. 맛있는 음식과 따뜻한 분위기를 경험하세요.</p>
            </div>
            <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
              <div className="flex justify-center items-center w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rounded-full bg-[#2196F3]/20 text-[#2196F3] font-extrabold mb-3 xs:mb-5 sm:mb-6 text-base xs:text-lg sm:text-xl">3</div>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-black">지역 협력 프로젝트</h3>
              <p className="text-sm xs:text-base sm:text-lg font-bold text-black">지역 환경 개선, 세대 간 교류, 시니어 일자리 창출 등 다양한 사회적 가치를 창출하는 프로젝트를 함께 기획하고 참여할 수 있습니다.</p>
            </div>
          </div>

          <div className="text-center mt-6 xs:mt-8 sm:mt-12">
            <button className="px-4 xs:px-6 py-2 xs:py-3 bg-[#2196F3] text-white rounded-full hover:bg-[#1976D2] text-sm xs:text-base sm:text-lg font-bold">참여 문의하기</button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="flex justify-between items-center mb-4 xs:mb-6 sm:mb-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black">소식</h2>
            <Link href="/news" className="text-[#2196F3] hover:underline text-sm xs:text-base sm:text-lg font-bold">More</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
            <div className="border-t border-gray-200 pt-3 xs:pt-4">
              <span className="text-sm xs:text-base text-black font-semibold">커뮤니티</span>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-1 xs:mb-2 text-black">우이천 플로깅 5월 정기활동 안내</h3>
              <p className="text-black mb-1 xs:mb-2 line-clamp-3 text-sm xs:text-base sm:text-lg font-bold">
                5월 우이천 플로깅 정기활동을 아래와 같이 진행합니다. 환경을 생각하는 마음으로 함께 참여해주세요.
                - 일시: 2024년 5월 25일 (토요일 오전 10시)
                - 장소: 우이천 벽산아파트 앞 광장
                - 준비물: 개인 물병, 장갑
              </p>
              <p className="text-sm xs:text-base text-black font-semibold">2024-05-10</p>
            </div>
            <div className="border-t border-gray-200 pt-3 xs:pt-4">
              <span className="text-sm xs:text-base text-black font-semibold">서울다락 매장</span>
              <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-1 xs:mb-2 text-black">서울다락 2호점 '할매닭곰탕' 오픈 안내</h3>
              <p className="text-black mb-1 xs:mb-2 line-clamp-3 text-sm xs:text-base sm:text-lg font-bold">
                서울다락의 두 번째 매장 '할매닭곰탕'이 오픈합니다! 
                시니어 주방장의 정성이 담긴 전통 닭곰탕을 맛보세요.
                지역 어르신들의 일자리 창출에 동참해주셔서 감사합니다.
              </p>
              <p className="text-sm xs:text-base text-black font-semibold">2024-04-18</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Section */}
      <section className="py-8 xs:py-10 sm:py-12 md:py-16 bg-[#E3F2FD]/98">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="flex justify-between items-center mb-4 xs:mb-6 sm:mb-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black">언론·미디어</h2>
            <Link href="/media" className="text-[#2196F3] hover:underline text-sm xs:text-base sm:text-lg font-bold">More</Link>
          </div>
          
          <div className="grid grid-cols-1 gap-3 xs:gap-4 sm:gap-6">
            <div className="bg-white p-3 xs:p-5 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-extrabold mb-1 xs:mb-2 text-black">"지역민이 함께하는 우이천 플로깅, 환경 보호와 커뮤니티 활성화 동시에"</h3>
              <p className="text-black mb-1 xs:mb-2 line-clamp-2 text-sm xs:text-base sm:text-lg font-bold">
                매월 진행되는 서울다락의 우이천 플로깅 활동이 지역 환경 개선과 주민 간 소통의 장으로 자리매김하고 있습니다. 
                지난 달 활동에는 50여 명의 주민이 참여해 쓰레기 15kg을 수거했습니다.
              </p>
              <p className="text-sm xs:text-base text-black font-semibold">2024-04-22</p>
            </div>
            <div className="bg-white p-3 xs:p-5 sm:p-6 rounded-lg shadow-sm">
              <h3 className="text-base xs:text-lg sm:text-xl font-extrabold mb-1 xs:mb-2 text-black">"시니어 일자리 창출하는 서울다락 매장, 지역 경제 활성화에 기여"</h3>
              <p className="text-black mb-1 xs:mb-2 line-clamp-2 text-sm xs:text-base sm:text-lg font-bold">
                서울다락의 햄버거 가게와 닭곰탕 가게는 시니어 고용을 통해 지역 어르신들에게 일자리를 제공하고 있습니다. 
                세대 간 소통의 장이자 지역 경제 활성화에 기여하는 새로운 모델로 주목받고 있습니다.
              </p>
              <p className="text-sm xs:text-base text-black font-semibold">2024-04-05</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

