'use client';
import Link from "next/link";

export default function Join() {

  return (
    <div className="min-h-screen font-semibold text-base text-[#17171B]">
      {/* Hero Section */}
      <section className="bg-[#f7f5ec] py-6 xs:py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 max-w-3xl leading-tight text-black">
            서울다락 <span className="text-[#A5D6A7]">조합원</span>이 되어<br />
            <br/>
            지역 사회의 변화를 함께 만들어가요
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl font-bold text-black">
            조합원이 되시면 서울다락의 다양한 활동에 참여하고 <br className="md:hidden" />
            지역 사회의 발전에 기여하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">조합원 혜택</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10">
            <div className="bg-[#E8F5E9]/20 p-6 xs:p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">커뮤니티 활동 참여</h3>
              <p className="text-gray-700">보드게임 모임, 우이천 플로깅 등 다양한 커뮤니티 활동에 우선 참여할 수 있습니다.</p>
            </div>
            <div className="bg-[#E8F5E9]/20 p-6 xs:p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">지역 네트워크</h3>
              <p className="text-gray-700">지역 주민들과 함께 활동하며 새로운 인연을 만들고 지역 네트워크를 확장할 수 있습니다.</p>
            </div>
            <div className="bg-[#E8F5E9]/20 p-6 xs:p-8 rounded-lg">
              <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-black">매장 혜택</h3>
              <p className="text-gray-700">서울다락 매장에서 조합원 할인 혜택을 받을 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">가입 절차</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#A5D6A7] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">가입 신청서 작성</h3>
                  <p className="text-gray-700">기본 정보와 가입 동기를 작성해 주세요.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#A5D6A7] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">가입비 납부</h3>
                  <p className="text-gray-700">조합원 가입비를 납부해 주세요.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#A5D6A7] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">승인 및 환영</h3>
                  <p className="text-gray-700">가입이 승인되면 조합원 카드를 발급해 드립니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Fee Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">조합원 가입비</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-black">개인 조합원</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>일반 개인</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>학생 및 청년</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>시니어</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-black">단체 조합원</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>비영리 단체 및 사회적 기업</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>지역 기반 커뮤니티 및 협동조합</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>공익 활동을 하는 법인 및 단체</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">개인정보 수집 및 이용 동의</h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 rounded-xl mb-8">
              <h3 className="text-xl font-bold mb-4 text-black">개인정보 수집 및 이용 목적</h3>
              <ul className="space-y-2 text-base text-gray-600">
                <li>• 조합원 관리 및 서비스 제공</li>
                <li>• 조합비 납부 및 회계 관리</li>
                <li>• 서울다락 활동 및 소식 안내</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-black">수집하는 개인정보 항목</h3>
              <ul className="space-y-2 text-base text-gray-600">
                <li>• 필수항목: 이름, 연락처, 이메일, 주소</li>
                <li>• 선택항목: 생년월일, 직업</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Form Redirect */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-center text-black">조합원 가입 폼으로 이동</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-700 mb-6">아래 버튼을 눌러 가입 폼에서 정보를 작성해 주세요.</p>
            <a
              href="https://forms.gle/ocPdNhCHNGMhtB1EA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#A5D6A7] text-white rounded-full text-lg font-bold hover:bg-[#81C784] transition-colors"
            >
              조합원 가입 신청하기
            </a>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-black">가입 자격</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-black">개인 조합원</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>만 19세 이상의 지역 주민</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>지역 사회 발전에 관심이 있는 분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>서울다락의 가치와 목적에 동의하는 분</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-black">단체 조합원</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>비영리 단체 및 사회적 기업</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>지역 기반 커뮤니티 및 협동조합</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#A5D6A7] font-bold">•</span>
                    <span>공익 활동을 하는 법인 및 단체</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#E8F5E9]/98">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-black">조합원 가입비는 어떻게 납부하나요?</h3>
              <p className="text-gray-700">가입 신청서 제출 후, 서울다락에서 보내드리는 안내에 따라 가입비를 납부하시면 됩니다.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-black">조합원 탈퇴는 어떻게 하나요?</h3>
              <p className="text-gray-700">서울다락 사무실을 방문하거나 이메일로 탈퇴 신청을 하실 수 있습니다.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-3 text-black">조합원 혜택은 언제부터 적용되나요?</h3>
              <p className="text-gray-700">가입비 납부 및 승인 완료 후 즉시 조합원 혜택이 적용됩니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#E8F5E9]/98">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-black">함께 만들어가는 우리 지역의 변화</h2>
          <p className="text-xl mb-8 text-gray-700">서울다락 조합원이 되어 지역 사회의 발전에 동참해주세요.</p>
        </div>
      </section>
    </div>
  );
} 