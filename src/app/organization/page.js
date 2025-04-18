'use client';
import Link from "next/link";
import { useState } from 'react';

export default function OrganizationPage() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 py-6 xs:py-8 sm:py-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-6 xs:mb-8 sm:mb-10">조직도</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
          <div className="bg-white p-6 xs:p-8 rounded-lg shadow-sm">
            <h2 className="text-xl xs:text-2xl font-bold mb-4 xs:mb-6">이사회</h2>
            <ul className="space-y-3 xs:space-y-4">
              <li className="flex items-center">
                <span className="w-24 xs:w-28 text-gray-600">이사장</span>
                <span className="font-medium">김철수</span>
              </li>
              <li className="flex items-center">
                <span className="w-24 xs:w-28 text-gray-600">부이사장</span>
                <span className="font-medium">이영희</span>
              </li>
              <li className="flex items-center">
                <span className="w-24 xs:w-28 text-gray-600">이사</span>
                <span className="font-medium">박민수, 정지원, 최수진</span>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 xs:p-8 rounded-lg shadow-sm">
            <h2 className="text-xl xs:text-2xl font-bold mb-4 xs:mb-6">감사</h2>
            <ul className="space-y-3 xs:space-y-4">
              <li className="flex items-center">
                <span className="w-24 xs:w-28 text-gray-600">감사</span>
                <span className="font-medium">장미란</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 