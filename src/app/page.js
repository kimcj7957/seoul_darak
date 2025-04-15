'use client';
import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import PlatformSection from '@/components/PlatformSection';
import CooperationSection from '@/components/CooperationSection';
import NewsSection from '@/components/NewsSection';
import MediaSection from '@/components/MediaSection';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    console.log("현재 상태:", mobileMenuOpen);
    setMobileMenuOpen(prev => {
      console.log("변경될 상태:", !prev);
      return !prev;
    });
  };

  return (
    <main>
      <HeroSection />
      <PlatformSection />
      <CooperationSection />
      <NewsSection />
      <MediaSection />
    </main>
  );
}

