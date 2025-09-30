'use client';

export default function OrganizationPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-[#f7f5ec] py-6 xs:py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 xs:mb-6 md:mb-8 text-black">
            함께하는 사람들
          </h1>

          {/* 핵심 인력 소개 */}
          <div className="bg-white rounded-xl shadow-sm p-5 xs:p-6 sm:p-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black mb-6">핵심 인력 소개</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8">
              {/* 대표 신해균 */}
              <div className="border border-gray-200 rounded-lg p-4 xs:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#A5D6A7] flex items-center justify-center text-white font-extrabold">대표</div>
                  <div>
                    <p className="text-[#1b5e20] font-extrabold text-lg xs:text-xl">신해균</p>
                    <p className="text-[#388e3c] font-bold">외식업 26년</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                서울다락의 실행 전략은 26년 외식업 경력을 통해 다져진 신해균 대표의 전문성에서 비롯됩니다. 
                그의 경험은 트렌드를 선도하는 메뉴 개발부터 안정적인 매장 운영까지, 
                외식 사업의 성공에 필요한 모든 요소를 아우릅니다.
                </p>
                <ul className="mt-4 space-y-2 text-gray-800">
                  <li>• 전 카라쉬호텔 F&B 총괄</li>
                  <li>• 전 미슐랭 빕구르망 꽃, 밥에 피다 쉐프</li>
                  <li>• 전 을지로 다케오 호르몬 데판야끼 메뉴 개발</li>
                  <li>• 현재 스푼앤포크 운영 중</li>
                </ul>
              </div>

              {/* 자문위원 특보 */}
              <div className="border border-gray-200 rounded-lg p-4 xs:p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#ffd54f] flex items-center justify-center text-[#6d4c41] font-extrabold">자문</div>
                  <div>
                    <p className="text-[#f57f17] font-extrabold text-lg xs:text-xl">자문위원 탁철</p>
                    <p className="text-[#ef6c00] font-bold">전통시장 활성화의 산증인</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                서울다락은 대한민국 전통시장 활성화의 가장 성공적인 모델로 꼽히는 '통인시장'의 성공 신화를 이끈 탁철 전 통인시장 사업단장을 자문위원으로 초빙했습니다. 
                그의 경험과 통찰력은 백운시장 프로젝트가 나아갈 방향을 제시하는 귀중한 나침반이 될 것입니다.
                </p>
                <ul className="mt-4 space-y-2 text-gray-800">
                  <li>• 전 통인시장 사업단장</li>
                  <li>• '엽전 도시락'과 같은 혁신적인 아이디어를 현실로 구현</li>
                  <li>• 시장 전체의 자생력을 키우는 지속가능한 발전 모델 구축</li>
                </ul>
              </div>
            </div>

            <p className="mt-8 text-center text-lg xs:text-xl text-gray-800 font-bold">
              “이들의 전문성과 경험은 백운시장 활성화 프로젝트의 성공 가능성을 한층 더 높여줄 것입니다.”
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 