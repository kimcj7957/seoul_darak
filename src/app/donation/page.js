'use client';
import { useState } from 'react';

export default function DonationPage() {
  const [copied, setCopied] = useState(false);

  const bankName = '하나은행';
  const accountNumber = '211-910022-72904';
  const accountHolder = '서울다락';
  const donusLink = 'https://secure.donus.org/seouldarak/pay';

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
      <section id="donation-inquiry" className="scroll-mt-28 xs:scroll-mt-32 sm:scroll-mt-36 bg-[#f7f5ec] py-6 xs:py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 max-w-3xl leading-tight text-black">
            서울다락 <span className="text-[#A5D6A7]">후원하기</span>
          </h1>
          <p className="text-xl sm:text-2xl mb-4 max-w-2xl font-bold text-black">
            여러분의 소중한 후원은 지역 공동체 활동과 일자리 창출에 사용됩니다.
          </p>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
            서울다락은 계좌이체를 통한 일시 후원과 Donus를 통한 정기 후원을 모두 운영하고 있습니다.
          </p>
          <div className="mt-6 rounded-2xl bg-white p-5 sm:p-6 shadow-sm max-w-4xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-black">후원문의</h2>
            <p className="text-gray-700 leading-relaxed">
              서울다락의 후원 방식, 후원 절차, 영수증 발급 여부 등 후원과 관련한 문의는 아래 안내를 통해 확인하실 수 있습니다.
            </p>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-[#E8F5E9]/30 p-5 border border-[#d9e8d9]">
                <p className="text-sm font-bold text-[#2e7d32]">정기 후원</p>
                <h3 className="mt-2 text-xl font-extrabold text-black">매월 정기적으로 후원하기</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Donus 후원 페이지를 통해 정기 후원을 신청하실 수 있습니다.
                  서울다락의 지속적인 지역 활동과 사업 운영을 꾸준히 응원해 주세요.
                </p>
                <a
                  href={donusLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-[#A5D6A7] px-6 py-3 text-white font-bold hover:bg-[#81C784] transition-colors duration-300"
                >
                  정기 후원 하러가기
                </a>
              </div>
              <div className="rounded-2xl border border-[#d9e8d9] p-5 bg-white">
                <p className="text-sm font-bold text-[#2e7d32]">일시 후원</p>
                <h3 className="mt-2 text-xl font-extrabold text-black">계좌이체로 바로 후원하기</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  일시 후원은 아래 후원 계좌를 통해 자유 금액으로 참여하실 수 있습니다.
                  입금 후 확인이 필요하시면 이메일로 문의해 주세요.
                </p>
                <a
                  href="#donation-account"
                  className="mt-5 inline-flex items-center justify-center rounded-full border border-[#A5D6A7] px-6 py-3 text-[#2e7d32] font-bold hover:bg-[#A5D6A7]/10 transition-colors duration-300"
                >
                  일시 후원 계좌 보기
                </a>
              </div>
            </div>
            <p className="mt-5 text-gray-700">문의 이메일: seouldarak1@gmail.com</p>
          </div>
        </div>
      </section>

      {/* 일시후원 안내 */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
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
      <section id="donation-account" className="scroll-mt-28 xs:scroll-mt-32 sm:scroll-mt-36 py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
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
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-black">유의사항</h2>
          <ul className="space-y-3 text-gray-700">
            <li>• 이체 시 입금자명에 "후원" 표기를 함께 적어주시면 확인이 쉽습니다. (예: 홍길동 후원)</li>
            <li>• 영수증/확인서 발급이 필요하시면 이메일로 요청해 주세요. (seouldarak1@gmail.com)</li>
          </ul>
        </div>
      </section>

      <section id="fundraising-records" className="scroll-mt-28 xs:scroll-mt-32 sm:scroll-mt-36 py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl bg-white p-6 xs:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-black">기부금 모집내역</h2>
            <p className="text-gray-700 leading-relaxed">
              기부금 모집내역은 공시 자료 확정 후 게시판 형식으로 연도별 공개 예정입니다.
              현재는 후원 계좌를 통한 일시후원 중심으로 운영하고 있으며, 추후 모집 내역을
              체계적으로 정리해 공개할 예정입니다.
            </p>
          </div>
        </div>
      </section>

      <section id="fund-usage" className="scroll-mt-28 xs:scroll-mt-32 sm:scroll-mt-36 py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto rounded-2xl bg-white p-6 xs:p-8 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-black">기부금 활용내역</h2>
            <p className="text-gray-700 leading-relaxed">
              후원금은 지역 공동체 활동, 시니어 일자리 및 창업 지원, 백운시장 연계 행사 운영 등
              공익 목적 사업에 사용됩니다. 활용내역 역시 향후 게시판 형식으로 정리하여 투명하게
              공개할 예정입니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


