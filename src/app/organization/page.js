'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Organization() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    console.log("현재 상태:", mobileMenuOpen);
    setMobileMenuOpen(prev => {
      console.log("변경될 상태:", !prev);
      return !prev;
    });
  };

  return (
    <div className="min-h-screen font-semibold text-base text-[#17171B]">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md px-4 sm:px-6 lg:px-8 py-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link href="/" className="font-bold text-xl sm:text-2xl text-[#17171B] hover:text-gray-500">서울다락</Link>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="text-[#17171B] focus:outline-none p-3 touch-manipulation cursor-pointer"
              style={{touchAction: 'manipulation'}}
              type="button"
              aria-label="메뉴 열기/닫기"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <div className="hidden lg:flex flex-1 justify-center">
            <ul className="flex items-center space-x-8 xl:space-x-10 text-lg">
              <li><Link href="/" className="text-[#17171B] hover:text-gray-500 font-bold">홈</Link></li>
              <li><Link href="/about" className="text-[#17171B] hover:text-gray-500 font-bold">소개</Link></li>
              <li><Link href="/services" className="text-[#17171B] hover:text-gray-500 font-bold">서비스</Link></li>
              <li><Link href="/contact" className="text-[#17171B] hover:text-gray-500 font-bold">문의</Link></li>
            </ul>
          </div>
          
          {/* 데스크톱 버튼 그룹 */}
          <div className="hidden lg:flex items-center">
            <Link href="/search" className="px-4 py-2 text-[#17171B] hover:text-gray-500 text-lg font-bold flex items-center mr-4">
              통합검색
            </Link>
            <Link href="/join" className="px-4 py-2 text-[#2196F3] hover:text-[#1976D2] text-lg font-bold">
              조합원 가입
            </Link>
          </div>
        </div>
      </nav>
      
      {/* 모바일 메뉴 - 상단에서 분리 */}
      <div className={`lg:hidden fixed top-[72px] left-0 right-0 bg-white shadow-md border-t border-gray-200 z-40 p-4 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <ul className="space-y-3">
          <li><Link href="/" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">홈</Link></li>
          <li><Link href="/about" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">소개</Link></li>
          <li><Link href="/services" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">서비스</Link></li>
          <li><Link href="/contact" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">문의</Link></li>
          <li><Link href="/search" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">통합검색</Link></li>
          <li><Link href="/join" className="block text-[#2196F3] hover:text-[#1976D2] font-bold py-2">조합원 가입</Link></li>
        </ul>
      </div>
      
      {/* 네비게이션 바 고정 위치에 따른 여백 추가 */}
      <div className="pt-[72px]"></div>
      
      {/* Hero Section */}
      <section className="bg-[#E8F5E9]/98 py-6 xs:py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 xs:mb-6 md:mb-8 max-w-4xl leading-tight text-black">
            함께 <span className="text-[#A5D6A7]">변화</span>를 만들어가는 서울다락의 구성원들을 소개합니다
          </h1>
        </div>
      </section>

      {/* Organization Chart Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">조직도</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
              <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
                <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">이사장</h3>
                <p className="text-sm xs:text-base text-center text-gray-700">김서울</p>
              </div>
              <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
                <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">이사</h3>
                <p className="text-sm xs:text-base text-center text-gray-700">이다락</p>
              </div>
              <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
                <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">감사</h3>
                <p className="text-sm xs:text-base text-center text-gray-700">박감사</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#E8F5E9]/98">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">운영팀</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
              <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">사무국장</h3>
                <p className="text-sm xs:text-base text-center text-gray-700">최사무</p>
              </div>
              <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">재정팀</h3>
                <p className="text-sm xs:text-base text-center text-gray-700">정재정</p>
              </div>
              <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">기획팀</h3>
                <p className="text-sm xs:text-base text-center text-gray-700">강기획</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">문의하기</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">이메일</h3>
                  <p className="text-gray-700">contact@seouldarak.org</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-black">전화</h3>
                  <p className="text-gray-700">02-123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 