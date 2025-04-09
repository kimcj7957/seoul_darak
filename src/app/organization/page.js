'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Organization() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-semibold text-base text-[#17171B]">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white shadow-md px-4 sm:px-6 lg:px-8 py-4">
        <div className="container mx-auto flex items-center">
          <div className="font-bold text-xl sm:text-2xl text-[#17171B] mr-auto">서울다락</div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#17171B] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <ul className="hidden lg:flex space-x-8 xl:space-x-10 text-lg">
            <li><Link href="/" className="text-[#17171B] hover:text-gray-500 font-bold">홈</Link></li>
            <li><Link href="/about" className="text-[#17171B] hover:text-gray-500 font-bold">소개</Link></li>
            <li><Link href="/services" className="text-[#17171B] hover:text-gray-500 font-bold">서비스</Link></li>
            <li><Link href="/contact" className="text-[#17171B] hover:text-gray-500 font-bold">문의</Link></li>
          </ul>
          
          {/* 데스크톱 버튼 그룹 */}
          <div className="hidden lg:flex items-center ml-4 xl:ml-8">
            <Link href="/search" className="px-4 py-2 text-[#17171B] hover:text-gray-500 text-lg font-bold flex items-center">
              통합검색
            </Link>
            <Link href="/join" className="px-4 py-2 text-[#2196F3] hover:text-[#1976D2] text-lg font-bold">
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
            <li><Link href="/join" className="block text-[#2196F3] hover:text-[#1976D2] font-bold py-2">조합원 가입</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#E3F2FD]/98 py-20 sm:py-24 md:py-28 mt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 max-w-3xl leading-tight text-center text-black">
            함께 <span className="text-[#2196F3]">변화</span>를 만들어가는<br />
            서울다락의 구성원들을 소개합니다
          </h1>
        </div>
      </section>

      {/* Organization Chart Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            {/* 대표 */}
            <div className="mb-16">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-black">대표</h2>
              <div className="max-w-sm mx-auto">
                <div className="bg-[#E3F2FD]/30 p-6 rounded-xl text-center">
                  <div className="w-24 h-24 mx-auto bg-[#2196F3]/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold text-black">신해균</h3>
                  <p className="text-gray-600">대표</p>
                </div>
              </div>
            </div>

            {/* 이사진 */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-black">이사진</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-[#E3F2FD]/30 p-6 rounded-xl text-center">
                  <div className="w-24 h-24 mx-auto bg-[#2196F3]/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold text-black">김재석</h3>
                  <p className="text-gray-600">이사</p>
                </div>
                <div className="bg-[#E3F2FD]/30 p-6 rounded-xl text-center">
                  <div className="w-24 h-24 mx-auto bg-[#2196F3]/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold text-black">김선민</h3>
                  <p className="text-gray-600">이사</p>
                </div>
                <div className="bg-[#E3F2FD]/30 p-6 rounded-xl text-center">
                  <div className="w-24 h-24 mx-auto bg-[#2196F3]/20 rounded-full mb-4"></div>
                  <h3 className="text-xl font-bold text-black">이다미</h3>
                  <p className="text-gray-600">이사</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-4">서울다락</h3>
              <ul className="space-y-2">
                <li><Link href="/organization" className="hover:text-gray-300 text-base sm:text-lg font-bold">함께하는 사람들</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-300 text-base sm:text-lg font-bold">개인정보처리방침</Link></li>
                <li><Link href="/terms" className="hover:text-gray-300 text-base sm:text-lg font-bold">이용약관</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-4 mt-6 md:mt-0">소셜 미디어</h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <Link href="#" className="hover:text-gray-300 text-base sm:text-lg font-bold">Facebook</Link>
                <Link href="https://www.instagram.com/seouldarak/" className="hover:text-gray-300 text-base sm:text-lg font-bold">Instagram</Link>
                <Link href="#" className="hover:text-gray-300 text-base sm:text-lg font-bold">Youtube</Link>
                <Link href="#" className="hover:text-gray-300 text-base sm:text-lg font-bold">Blog</Link>
              </div>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-gray-800">
            <p className="text-base sm:text-lg font-bold text-center">© 2025 서울다락. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 