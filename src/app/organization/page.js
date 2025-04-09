'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Organization() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-semibold text-base text-[#17171B]">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white shadow-md px-3 xs:px-4 sm:px-6 lg:px-8 py-3 xs:py-4">
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
          <ul className="hidden lg:flex space-x-6 xl:space-x-10 text-lg">
            <li><Link href="/" className="text-[#17171B] hover:text-gray-500 font-bold">홈</Link></li>
            <li><Link href="/about" className="text-[#17171B] hover:text-gray-500 font-bold">소개</Link></li>
            <li><Link href="/services" className="text-[#17171B] hover:text-gray-500 font-bold">서비스</Link></li>
            <li><Link href="/contact" className="text-[#17171B] hover:text-gray-500 font-bold">문의</Link></li>
          </ul>
          
          {/* 데스크톱 버튼 그룹 */}
          <div className="hidden lg:flex items-center ml-3 xl:ml-8">
            <Link href="/search" className="px-3 xs:px-4 py-2 text-[#17171B] hover:text-gray-500 text-lg font-bold flex items-center">
              통합검색
            </Link>
            <Link href="/join" className="px-3 xs:px-4 py-2 text-[#2196F3] hover:text-[#1976D2] text-lg font-bold">
              조합원 가입
            </Link>
          </div>
        </div>
        
        {/* 모바일 메뉴 */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? "max-h-96 opacity-100 border-t border-gray-200 mt-3 xs:mt-4 pb-3 xs:pb-4" 
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className={`space-y-2 xs:space-y-3 ${mobileMenuOpen ? "mt-3 xs:mt-4" : "mt-0"} transition-all duration-300`}>
            <li><Link href="/" className="block text-[#17171B] hover:text-gray-500 font-bold py-1 xs:py-2">홈</Link></li>
            <li><Link href="/about" className="block text-[#17171B] hover:text-gray-500 font-bold py-1 xs:py-2">소개</Link></li>
            <li><Link href="/services" className="block text-[#17171B] hover:text-gray-500 font-bold py-1 xs:py-2">서비스</Link></li>
            <li><Link href="/contact" className="block text-[#17171B] hover:text-gray-500 font-bold py-1 xs:py-2">문의</Link></li>
            <li><Link href="/search" className="block text-[#17171B] hover:text-gray-500 font-bold py-1 xs:py-2">통합검색</Link></li>
            <li><Link href="/join" className="block text-[#2196F3] hover:text-[#1976D2] font-bold py-1 xs:py-2">조합원 가입</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#E3F2FD]/98 py-16 xs:py-20 sm:py-24 md:py-28 mt-14 xs:mt-16">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 xs:mb-6 md:mb-8 max-w-3xl leading-tight text-center text-black">
            함께 <span className="text-[#2196F3]">변화</span>를 만들어가는<br />
            서울다락의 구성원들을 소개합니다
          </h1>
        </div>
      </section>

      {/* Organization Chart Section */}
      <section className="py-12 xs:py-16 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* 대표 */}
            <div className="mb-12 xs:mb-16">
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-6 xs:mb-8 text-center text-black">대표</h2>
              <div className="max-w-xs mx-auto">
                <div className="bg-[#E3F2FD]/30 p-4 xs:p-6 rounded-xl text-center">
                  <div className="w-20 h-20 xs:w-24 xs:h-24 mx-auto bg-[#2196F3]/20 rounded-full mb-3 xs:mb-4"></div>
                  <h3 className="text-lg xs:text-xl font-bold text-black">신해균</h3>
                  <p className="text-gray-600">대표</p>
                </div>
              </div>
            </div>

            {/* 이사진 */}
            <div>
              <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-6 xs:mb-8 text-center text-black">이사진</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
                <div className="bg-[#E3F2FD]/30 p-4 xs:p-6 rounded-xl text-center">
                  <div className="w-20 h-20 xs:w-24 xs:h-24 mx-auto bg-[#2196F3]/20 rounded-full mb-3 xs:mb-4"></div>
                  <h3 className="text-lg xs:text-xl font-bold text-black">김재석</h3>
                  <p className="text-gray-600">이사</p>
                </div>
                <div className="bg-[#E3F2FD]/30 p-4 xs:p-6 rounded-xl text-center">
                  <div className="w-20 h-20 xs:w-24 xs:h-24 mx-auto bg-[#2196F3]/20 rounded-full mb-3 xs:mb-4"></div>
                  <h3 className="text-lg xs:text-xl font-bold text-black">김선민</h3>
                  <p className="text-gray-600">이사</p>
                </div>
                <div className="bg-[#E3F2FD]/30 p-4 xs:p-6 rounded-xl text-center sm:col-span-2 md:col-span-1 sm:max-w-xs sm:mx-auto">
                  <div className="w-20 h-20 xs:w-24 xs:h-24 mx-auto bg-[#2196F3]/20 rounded-full mb-3 xs:mb-4"></div>
                  <h3 className="text-lg xs:text-xl font-bold text-black">이다미</h3>
                  <p className="text-gray-600">이사</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 