'use client';
import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <nav className="py-2 xs:py-3 sm:py-4 lg:py-2 bg-white dark:bg-[#17171B] shadow-sm">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300">
            서울다락
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-base font-bold text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300">소개</Link>
            <Link href="/activities" className="text-base font-bold text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300">활동</Link>
            <Link href="/media" className="text-base font-bold text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300">미디어</Link>
            <Link href="/join" className="px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300">조합원 가입</Link>
            <button
              onClick={toggleDarkMode}
              className="p-2 text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <button
              className="text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300"
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
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <Link href="/about" className="block text-base font-bold text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300">소개</Link>
            <Link href="/activities" className="block text-base font-bold text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300">활동</Link>
            <Link href="/media" className="block text-base font-bold text-black dark:text-white hover:text-[#A5D6A7] transition-colors duration-300">미디어</Link>
            <Link href="/join" className="block px-4 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold transition-colors duration-300">조합원 가입</Link>
          </div>
        )}
      </div>
    </nav>
  );
} 