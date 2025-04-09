'use client';
import Link from "next/link";
import { useState } from 'react';

export default function Join() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    birth: '',
    job: '',
    motivation: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          birth: '',
          job: '',
          motivation: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen font-semibold text-base text-[#17171B]">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-50 bg-white shadow-md px-4 sm:px-6 lg:px-8 py-4">
        <div className="container mx-auto flex items-center">
          <Link href="/" className="font-bold text-xl sm:text-2xl text-[#17171B] mr-auto hover:text-gray-500">서울다락</Link>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#17171B] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* 데스크톱 메뉴 */}
          <ul className="hidden lg:flex space-x-8 xl:space-x-10 text-lg">
            <li><Link href="/" className="text-[#17171B] hover:text-gray-500 font-bold">홈</Link></li>
            <li><Link href="/about" className="text-[#17171B] hover:text-gray-500 font-bold">소개</Link></li>
            <li><Link href="/services" className="text-[#17171B] hover:text-gray-500 font-bold">서비스</Link></li>
            <li><Link href="/contact" className="text-[#17171B] hover:text-gray-500 font-bold">문의</Link></li>
          </ul>
          
          {/* 데스크톱 버튼 그룹 */}
          <div className="hidden lg:flex items-center ml-4 xl:ml-8">
            <Link href="/search" className="px-4 py-2 text-[#17171B] hover:text-gray-500 text-lg font-bold flex items-center">
              통합검색
            </Link>
            <Link href="/join" className="px-4 py-2 text-[#2196F3] hover:text-[#1976D2] text-lg font-bold">
              조합원 가입
            </Link>
          </div>
        </div>
        
        {/* 모바일 메뉴 */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen 
              ? "max-h-96 opacity-100 border-t border-gray-200 mt-4 pb-4" 
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className={`space-y-3 ${mobileMenuOpen ? "mt-4" : "mt-0"} transition-all duration-300`}>
            <li><Link href="/" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">홈</Link></li>
            <li><Link href="/about" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">소개</Link></li>
            <li><Link href="/services" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">서비스</Link></li>
            <li><Link href="/contact" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">문의</Link></li>
            <li><Link href="/search" className="block text-[#17171B] hover:text-gray-500 font-bold py-2">통합검색</Link></li>
            <li><Link href="/join" className="block text-[#2196F3] hover:text-[#1976D2] font-bold py-2">조합원 가입</Link></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#E3F2FD]/98 py-20 sm:py-24 md:py-28 mt-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 max-w-3xl leading-tight text-black">
            서울다락 <span className="text-[#2196F3]">조합원</span>이 되어<br />
            지역 사회의 변화를 함께 만들어가요
          </h1>
          <p className="text-xl sm:text-2xl mb-8 max-w-2xl font-bold text-black">
            조합원이 되시면 서울다락의 다양한 활동에 참여하고<br className="md:hidden" />
            지역 사회의 발전에 기여하실 수 있습니다.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">조합원 혜택</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#E3F2FD]/30 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2196F3] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">커뮤니티 활동 참여</h3>
              <p className="text-gray-700">우이천 플로깅, 보드게임 모임 등 다양한 커뮤니티 활동에 우선적으로 참여하실 수 있습니다.</p>
            </div>
            <div className="bg-[#E3F2FD]/30 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2196F3] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">매장 할인 혜택</h3>
              <p className="text-gray-700">서울다락이 운영하는 모든 매장에서 할인 혜택을 받으실 수 있습니다.</p>
            </div>
            <div className="bg-[#E3F2FD]/30 p-6 rounded-xl">
              <div className="w-12 h-12 bg-[#2196F3] rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">정기 모임 참석</h3>
              <p className="text-gray-700">월 1회 진행되는 정기 모임에 참석하여 의견을 제시하고 지역 발전에 기여하실 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#E3F2FD]/98">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">가입 절차</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">가입 신청서 작성</h3>
                  <p className="text-gray-700">기본 정보와 가입 동기를 작성해 주세요.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-black">가입비 납부</h3>
                  <p className="text-gray-700">조합원 가입비를 납부해 주세요.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-[#2196F3] rounded-full flex items-center justify-center flex-shrink-0">
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">조합비 안내</h2>
          <div className="max-w-3xl mx-auto bg-[#E3F2FD]/30 p-8 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold text-black">월 조합비</span>
              <span className="text-2xl font-extrabold text-[#2196F3]">8,000원</span>
            </div>
            <p className="text-base text-gray-600 mb-4">* 조합비는 매월 자동으로 인출됩니다.</p>
            <p className="text-base text-gray-600">* 조합비는 서울다락의 운영과 지역 사회 발전을 위해 사용됩니다.</p>
          </div>
        </div>
      </section>

      {/* Agreement Section */}
      <section className="py-16 bg-[#E3F2FD]/98">
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

      {/* Application Form Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-12 text-center text-black">가입 신청서</h2>
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-base font-bold mb-2 text-black">이름</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2196F3]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-base font-bold mb-2 text-black">연락처</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2196F3]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-base font-bold mb-2 text-black">이메일</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2196F3]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-base font-bold mb-2 text-black">주소</label>
                  <input 
                    type="text" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2196F3]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-base font-bold mb-2 text-black">생년월일 (선택)</label>
                  <input 
                    type="date" 
                    name="birth"
                    value={formData.birth}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2196F3]" 
                  />
                </div>
                <div>
                  <label className="block text-base font-bold mb-2 text-black">직업 (선택)</label>
                  <input 
                    type="text" 
                    name="job"
                    value={formData.job}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2196F3]" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-base font-bold mb-2 text-black">가입 동기</label>
                <textarea 
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2196F3] h-32" 
                  placeholder="서울다락에 가입하고 싶은 이유를 적어주세요."
                  required
                ></textarea>
              </div>

              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="agreement" 
                  className="w-4 h-4 text-[#2196F3] border-gray-300 rounded focus:ring-[#2196F3]" 
                  required 
                />
                <label htmlFor="agreement" className="ml-2 text-base text-gray-600">
                  개인정보 수집 및 이용에 동의합니다.
                </label>
              </div>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center">
                  가입 신청이 완료되었습니다. 이메일로 연락드리겠습니다.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">
                  가입 신청 중 오류가 발생했습니다. 다시 시도해주세요.
                </div>
              )}

              <div className="text-center">
                <button 
                  type="submit" 
                  className="px-8 py-4 bg-[#2196F3] text-white rounded-full hover:bg-[#1976D2] text-lg font-bold disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? '전송 중...' : '가입 신청하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Conditions Section */}
      <section className="py-16 bg-[#E3F2FD]/98">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-black">가입 자격</h2>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-black">개인 조합원</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2196F3] font-bold">•</span>
                    <span>만 19세 이상의 지역 주민</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2196F3] font-bold">•</span>
                    <span>지역 사회 발전에 관심이 있는 분</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2196F3] font-bold">•</span>
                    <span>서울다락의 가치와 목적에 동의하는 분</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-bold mb-4 text-black">단체 조합원</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2196F3] font-bold">•</span>
                    <span>비영리 단체 및 사회적 기업</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2196F3] font-bold">•</span>
                    <span>지역 기반 커뮤니티 및 협동조합</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2196F3] font-bold">•</span>
                    <span>공익 활동을 하는 법인 및 단체</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-8 text-center text-black">자주 묻는 질문</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#E3F2FD]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-black">조합원이 되면 어떤 활동에 참여할 수 있나요?</h3>
              <p className="text-gray-700">우이천 플로깅, 보드게임 모임 등 다양한 커뮤니티 활동과 월 1회 정기 모임에 참여할 수 있습니다. 또한 서울다락이 운영하는 매장에서 할인 혜택을 받으실 수 있습니다.</p>
            </div>
            <div className="bg-[#E3F2FD]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-black">가입 절차는 어떻게 되나요?</h3>
              <p className="text-gray-700">온라인 가입 신청서 작성 → 가입비 납부 → 서류 검토 → 승인 및 조합원 카드 발급의 순서로 진행됩니다. 일반적으로 서류 검토 후 1주일 이내에 승인 여부를 알려드립니다.</p>
            </div>
            <div className="bg-[#E3F2FD]/30 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3 text-black">조합비는 어떻게 사용되나요?</h3>
              <p className="text-gray-700">조합비는 커뮤니티 활동 운영, 조합원 혜택 제공, 지역 사회 발전 프로젝트 등에 사용됩니다. 매년 정기총회를 통해 상세한 사용 내역을 공유드립니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#E3F2FD]/98">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-black">함께 만들어가는 우리 지역의 변화</h2>
          <p className="text-xl mb-8 text-gray-700">서울다락 조합원이 되어 지역 사회의 발전에 동참해주세요.</p>
          <button className="bg-[#2196F3] text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-[#1976D2] transition-colors">
            가입 신청하기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between mb-6 sm:mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-4">서울다락</h3>
              <ul className="space-y-2">
                <li><Link href="/organization" className="hover:text-gray-300 text-base sm:text-lg font-bold">함께하는 사람들</Link></li>
                <li><Link href="/privacy" className="hover:text-gray-300 text-base sm:text-lg font-bold">개인정보처리방침</Link></li>
                <li><Link href="/terms" className="hover:text-gray-300 text-base sm:text-lg font-bold">이용약관</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-4 mt-6 md:mt-0">소셜 미디어</h3>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <Link href="#" className="hover:text-gray-300 text-base sm:text-lg font-bold">Facebook</Link>
                <Link href="https://www.instagram.com/seouldarak/" className="hover:text-gray-300 text-base sm:text-lg font-bold">Instagram</Link>
                <Link href="#" className="hover:text-gray-300 text-base sm:text-lg font-bold">Youtube</Link>
                <Link href="#" className="hover:text-gray-300 text-base sm:text-lg font-bold">Blog</Link>
              </div>
            </div>
          </div>
          <div className="pt-6 sm:pt-8 border-t border-gray-800">
            <p className="text-base sm:text-lg font-bold text-center">© 2025 서울다락. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 