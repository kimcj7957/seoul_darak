'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`py-0 bg-[#f7f5ec] shadow-sm animate-dropdown`}>
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/seouldarak_logo_mid_narrow.png"
              alt="서울다락 로고"
              width={180}
              height={48}
              className="w-auto h-[48px] xs:h-[56px] sm:h-[64px] lg:h-[72px] object-contain"
              priority
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/about" className={`text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300`}>소개</Link>
            <Link href="/activities" className={`text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300`}>활동</Link>
            <Link href="/media" className={`text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300`}>미디어</Link>
            <a
              href="https://secure.donus.org/seouldarak/pay"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300"
            >
              후원하기
            </a>
            <Link href="/join" className="px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300">조합원 가입</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              className={`text-black hover:text-[#A5D6A7] transition-colors duration-300`}
              onClick={() => setIsOpen(!isOpen)}
              aria-label="메뉴 열기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4 animate-dropdown">
            <Link href="/about" className={`block text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300`}>소개</Link>
            <Link href="/activities" className={`block text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300`}>활동</Link>
            <Link href="/media" className={`block text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300`}>미디어</Link>
            <a
              href="https://secure.donus.org/seouldarak/pay"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-4 py-2 bg-[#9FD4A4] text-white rounded-full hover:bg-[#7ECF8C] text-base font-bold transition-colors duration-300"
            >
              후원하기
            </a>
            <Link href="/join" className="block px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300">조합원 가입</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 