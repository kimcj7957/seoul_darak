'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const donationMenuItems = [
  { href: "/donation#donation-inquiry", label: "후원문의" },
  { href: "/donation#fundraising-records", label: "기부금 모집내역" },
  { href: "/donation#fund-usage", label: "기부금 활용내역" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDonationOpen, setMobileDonationOpen] = useState(false);
  const [desktopDonationOpen, setDesktopDonationOpen] = useState(false);

  return (
    <nav className={`relative z-50 py-0 bg-[#f7f5ec] shadow-sm animate-dropdown`}>
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
            <div
              className="relative"
              onMouseEnter={() => setDesktopDonationOpen(true)}
              onMouseLeave={() => setDesktopDonationOpen(false)}
            >
              <Link
                href="/donation"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300"
                onFocus={() => setDesktopDonationOpen(true)}
              >
                후원하기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div
                className={`absolute left-1/2 top-full z-[100] w-60 -translate-x-1/2 pt-2 transition-all duration-200 ${
                  desktopDonationOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <div className="rounded-2xl border border-[#d9e8d9] bg-white p-2 shadow-xl">
                  {donationMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-sm font-bold text-[#17171B] hover:bg-[#E8F5E9]/40 hover:text-[#2e7d32] transition-colors duration-200"
                      onClick={() => setDesktopDonationOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
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
            <div className="space-y-2">
              <button
                type="button"
                onClick={() => setMobileDonationOpen((prev) => !prev)}
                className="w-full flex items-center justify-between px-4 py-2 bg-[#9FD4A4] text-white rounded-full hover:bg-[#7ECF8C] text-base font-bold transition-colors duration-300"
                aria-expanded={mobileDonationOpen}
                aria-controls="mobile-donation-menu"
              >
                <span>후원하기</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${mobileDonationOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDonationOpen && (
                <div id="mobile-donation-menu" className="rounded-2xl bg-white p-3 shadow-sm border border-[#d9e8d9]">
                  {donationMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-sm font-bold text-[#17171B] hover:bg-[#E8F5E9]/40 hover:text-[#2e7d32] transition-colors duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        setMobileDonationOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/join" className="block px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300">조합원 가입</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 