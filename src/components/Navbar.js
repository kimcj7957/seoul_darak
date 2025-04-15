'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-2 xs:py-3 sm:py-4 lg:py-2 bg-white shadow-sm">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black hover:text-[#A5D6A7] transition-colors duration-300">
            서울다락
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300">소개</Link>
            <Link href="/activities" className="text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300">활동</Link>
            <Link href="/media" className="text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300">미디어</Link>
            <Link href="/join" className="px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300">조합원 가입</Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-black hover:text-[#A5D6A7] transition-colors duration-300"
            onClick={() => setIsOpen(!isOpen)}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <Link href="/about" className="block text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300">소개</Link>
            <Link href="/activities" className="block text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300">활동</Link>
            <Link href="/media" className="block text-base font-bold text-black hover:text-[#A5D6A7] transition-colors duration-300">미디어</Link>
            <Link href="/join" className="block px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300">조합원 가입</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 