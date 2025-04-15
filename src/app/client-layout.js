'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useState } from 'react';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar onMenuToggle={setMobileMenuOpen} />
      <div className={`pt-[72px] transition-all duration-300 ${mobileMenuOpen ? 'mt-[320px]' : 'mt-0'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
} 