'use client';
import { useState } from 'react';

export default function DonationPage() {
  const [copied, setCopied] = useState(false);

  const bankName = '하나은행';
  const accountNumber = '211-910022-72904';
  const accountHolder = '사회적협동조합 서울다락';

  const copyAccountInfoToClipboard = async (value) => {
    // Modern API (secure contexts/browsers)
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
        await navigator.clipboard.writeText(value);
        return true;
      }
    } catch (e) {
      // fall back below
    }

    // Fallback for older browsers/iOS Safari
    try {
      const textArea = document.createElement('textarea');
      textArea.value = value;
      textArea.style.position = 'fixed';
      textArea.style.top = '0';
      textArea.style.left = '0';
      textArea.style.opacity = '0';
      textArea.setAttribute('readonly', '');
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (e) {
      return false;
    }
  };

  const handleCopy = async () => {
    const text = `${accountNumber} / ${bankName} / ${accountHolder}`;
    const ok = await copyAccountInfoToClipboard(text);
    setCopied(ok);
    if (ok) {
      setTimeout(() => setCopied(false), 2000);
    } else {
      console.error('클립보드 복사 실패');
    }
  };

  return (
    <div className="min-h-screen font-semibold text-base text-[#17171B]">
      {/* Hero */}
      <section className="bg-[#E8F5E9]/98 py-6 xs:py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 max-w-3xl leading-tight text-black">
            서울다락 <span className="text-[#A5D6A7]">후원하기</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-4 max-w-2xl font-bold text-black">
            여러분의 소중한 일시후원은 지역 공동체 활동과 청년 일자리 창출에 사용됩니다.
          </p>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
            CMS 없이 간편하게 계좌이체로 후원하실 수 있어요.
          </p>
        </div>
      </section>

      {/* 일시후원 안내 */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-black">일시후원 안내</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xs:gap-8">
            <div className="bg-[#E8F5E9]/20 p-6 xs:p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-black">1. 금액 선택</h3>
              <p className="text-gray-700">원하시는 금액을 자유롭게 정하세요.</p>
            </div>
            <div className="bg-[#E8F5E9]/20 p-6 xs:p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-black">2. 계좌이체</h3>
              <p className="text-gray-700">아래 후원 계좌로 이체해 주세요.</p>
            </div>
            <div className="bg-[#E8F5E9]/20 p-6 xs:p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-black">3. 확인 안내</h3>
              <p className="text-gray-700">이체 후 확인이 필요하시면 이메일로 연락 주세요. (seouldarak1@gmail.com)</p>
            </div>
          </div>
        </div>
      </section>

      {/* 후원계좌 안내 */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#E8F5E9]/98">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-black">후원계좌 안내</h2>
          <div className="bg-white rounded-xl p-6 xs:p-8 shadow-sm max-w-3xl">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-gray-500 min-w-[4rem]">은행</span>
                <span className="text-black font-bold">{bankName}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 min-w-[4rem]">계좌</span>
                <span className="text-black font-extrabold text-lg">{accountNumber}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-500 min-w-[4rem]">예금주</span>
                <span className="text-black font-bold">{accountHolder}</span>
              </div>
              <div className="pt-4">
                <button onClick={handleCopy} className="px-5 py-2 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-base font-bold">
                  {copied ? '복사됨!' : '계좌정보 복사'}
                </button>
                <p className="text-xs text-gray-500 mt-3">위 계좌로 일시후원을 이체해 주세요. 감사합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 유의사항 */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-black">유의사항</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• 이체 시 입금자명에 "후원" 표기를 함께 적어주시면 확인이 쉽습니다. (예: 홍길동 후원)</li>
            <li>• 영수증/확인서 발급이 필요하시면 이메일로 요청해 주세요. (seouldarak1@gmail.com)</li>
          </ul>
        </div>
      </section>
    </div>
  );
}


