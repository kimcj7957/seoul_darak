export default function AboutSection() {
  return (
    <>
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 xs:mb-8 sm:mb-10 text-center">
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-3 xs:mb-4 text-black">
                서울다락 기관 소개
              </h2>
              <p className="text-sm xs:text-base sm:text-lg text-gray-700">
                서울다락의 소개, 운영 방향, 사업 내용을 한 곳에서 확인하실 수 있습니다.
              </p>
            </div>

            <div className="mb-6 xs:mb-8">
              <div className="overflow-x-auto rounded-full border border-[#d9e8d9] bg-white px-3 py-3 shadow-sm">
                <div className="flex min-w-max items-center gap-2">
                  <a href="#about-overview" className="rounded-full bg-[#A5D6A7] px-4 py-2 text-sm xs:text-base font-bold text-white hover:bg-[#81C784]">소개</a>
                <a href="#about-greeting" className="rounded-full border border-[#cfe3cf] bg-white px-4 py-2 text-sm xs:text-base font-bold text-[#2e7d32] hover:bg-[#A5D6A7]/10">이사장 인사말</a>
                  <a href="#about-history" className="rounded-full border border-[#cfe3cf] bg-white px-4 py-2 text-sm xs:text-base font-bold text-[#2e7d32] hover:bg-[#A5D6A7]/10">연혁</a>
                  <a href="#about-organization" className="rounded-full border border-[#cfe3cf] bg-white px-4 py-2 text-sm xs:text-base font-bold text-[#2e7d32] hover:bg-[#A5D6A7]/10">조직도</a>
                  <a href="#about-location" className="rounded-full border border-[#cfe3cf] bg-white px-4 py-2 text-sm xs:text-base font-bold text-[#2e7d32] hover:bg-[#A5D6A7]/10">오시는 길</a>
                </div>
              </div>
            </div>

            <div className="space-y-4 xs:space-y-6 sm:space-y-8">
              <div id="about-overview" className="rounded-2xl bg-white p-5 xs:p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl xs:text-2xl font-extrabold mb-3 text-black">소개</h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    사회적협동조합 서울다락은 서울 도봉구와 강북구를 거점으로 활동하는 지역 기반 공동체 조직입니다.
                    지역 상권 활성화와 시니어 주민의 고용효과 증진을 목적으로 탄생했으며, 시니어 채용과 은퇴자의
                    원활한 창업 지원을 핵심 과제로 내세우고 있습니다.
                  </p>
                  <div className="rounded-xl bg-[#E8F5E9]/20 p-4 xs:p-5 text-center">
                    <p className="text-lg font-bold text-black">
                      비전: "지역주민이 주체가 되어 함께 만들어가는 살기 좋은 마을, 지속가능한 공동체"
                    </p>
                  </div>
                  <p>
                    서울다락의 가장 뚜렷한 특징은 백운시장 안에서 시니어 채용과 소규모 창업의 실제 모델을 실험하는
                    한편, 우이천 플로깅, 러닝, 영화 감상, 보드게임 모임, 플리마켓 같은 생활밀착형 프로그램으로
                    주민들이 스스로 연결될 수 있는 구조를 만들어간다는 점입니다. 일자리, 상권, 관계망, 문화 활동을
                    하나의 지역 순환 구조로 묶으려는 조직입니다.
                  </p>
                  <p>
                    서울다락의 중심 무대는 백운시장입니다. 1970년대부터 자연스럽게 형성된 이 전통시장은 북한산과
                    솔밭공원, 덕성여자대학교, 도봉도서관이 가까이 있는 탁월한 입지를 갖추고 있습니다. 서울다락은 이
                    잠재력을 실제 활력으로 바꾸기 위해 백운시장 상인회와 함께 매달 마지막 일요일 정기 플리마켓
                    &apos;백운다락장&apos;을 개최하고, 지역 주민과 청년, 상인과 어르신이 한 공간에서 만나는 커뮤니티를
                    만들어가고 있습니다.
                  </p>
                </div>
              </div>

              <div id="about-greeting" className="rounded-2xl bg-white p-5 xs:p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl xs:text-2xl font-extrabold mb-3 text-black">이사장 인사말</h3>
                <div className="rounded-xl bg-[#E8F5E9]/20 p-5 xs:p-6">
                  <p className="text-gray-700 leading-relaxed">
                    안녕하세요. 서울다락 이사장 신해균입니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    지역은 일하고, 만나고, 배우고, 돌보고, 다시 시작하는 삶의 기반이어야 합니다. 그러나 오늘날
                    지역사회는 너무 오랫동안 소비의 공간, 익명의 거주지로만 취급되어 왔습니다. 그 결과 사람과 사람
                    사이의 관계는 느슨해졌고, 전통시장은 활력을 잃었으며, 시니어 세대가 오랜 경험을 가지고도 다시
                    일할 기회를 얻기 어려운 구조가 굳어졌습니다. 서울다락은 이 현실을 정면에서 다루기 위해 출발했습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    지역이 살아나려면 관계가 살아나야 하고, 관계가 살아나려면 반복 가능한 만남의 장이 필요합니다.
                    그래서 서울다락은 공동체 활동과 경제 활동을 분리하지 않았습니다. 매장으로 실제 창업 모델을
                    운영하고, 플로깅, 러닝, 영화 감상, 보드게임 모임, 플리마켓으로 주민들이 스스로 연결될 수 있는
                    구조를 만들어왔습니다. 지난 8년 동안 140곳이 넘는 전통시장이 문을 닫았습니다. 시장에 다시 사람이
                    모이고, 거래와 체험과 대화가 한 공간 안에서 동시에 일어나는 순간, 지역은 다시 공동체로 작동하기
                    시작합니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    서울다락이 지향하는 것은 &quot;지역주민이 주체가 되어 함께 만들어가는 살기 좋은 마을,
                    지속가능한 공동체&quot;입니다. 단기 이벤트의 성과보다, 일자리가 만들어지고, 가게가 살아나고,
                    세대 간 대화가 이어지는 과정을 더 중요하게 보겠습니다. 겉으로는 작은 시도처럼 보일지 몰라도,
                    지역의 미래는 대개 이런 작고 집요한 실천 위에서 만들어집니다. 감사합니다.
                  </p>
                  <p className="mt-5 text-right font-bold text-black">사회적협동조합 서울다락 이사장 신해균</p>
                </div>
              </div>

              <div id="about-history" className="rounded-2xl bg-white p-5 xs:p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl xs:text-2xl font-extrabold mb-4 text-black">연혁</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2024년</p>
                    <p className="text-gray-700">
                      서울 도봉구와 강북구를 기반으로 활동하는 청년들이 자발적으로 모임을 결성했습니다. 인공지능 시대에
                      오프라인 공간과 사람 중심의 커뮤니티가 가진 가능성에 주목하고, 백운시장을 활동 거점으로 삼는 것에
                      의견을 모았습니다. 초기 운영 자금 1,000만 원을 자체 조달하며 백운시장 내 수제버거 매장
                      &apos;버버버거&apos; 론칭을 준비했습니다.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2025년 1월 20일</p>
                    <p className="text-gray-700">
                      창립총회를 개최하고 「서울다락 사회적협동조합」 정관을 제정했습니다. 협동조합기본법에 의한
                      사회적협동조합으로 공식 법인을 설립했으며, 사업구역을 쌍문동, 우이동 및 서울, 수도권으로 확정하고
                      이사장으로 신해균을 선출했습니다.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2025년 상반기 | 지역 커뮤니티 활동 본격화</p>
                    <p className="text-gray-700">
                      법인 설립 등기를 완료하고 인가 번호 제2025-1420-S0-5704호를 부여받았습니다. 인스타그램 공식 계정
                      `@seouldarak` 운영을 시작했으며, 주민들이 낮은 진입장벽으로 참여할 수 있는 생활밀착형 프로그램을
                      연속적으로 전개했습니다.
                    </p>
                    <ul className="mt-3 space-y-2 text-gray-700">
                      <li>4월 20일: 우이천 플로깅</li>
                      <li>4월 30일: 보드게임 모임</li>
                      <li>5월 25일: 북한산 플로깅</li>
                      <li>6월 22일: 우이천 러닝 소모임</li>
                      <li>7월 20일: 영화 감상 소모임</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2025년 6월 1일 | 버버버거 오픈</p>
                    <p className="text-gray-700">
                      백운시장 내 첫 앵커스토어 &apos;버버버거&apos;를 정식 오픈했습니다. 햄버거 번과 패티를 모두 수제로
                      만드는 수제버거 매장으로, 시니어 채용과 은퇴자 창업 지원을 목표로 한 서울다락의 첫 번째 경제사업
                      모델입니다. 실제 고용 효과를 창출하며 주말에 문을 닫아버리던 시장 상권에 새로운 소비층을 유입시키기
                      시작했고, 인스타그램 팔로어도 500명을 돌파했습니다.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2025년 7월 | 제1회 플리마켓 준비 착수</p>
                    <p className="text-gray-700">
                      백운시장 상인회와 협력 관계를 구축하고 플리마켓 기획에 착수했습니다. 시장 내 13개 공간 사용을
                      확정하고 셀러 모집, 전단지 400장 배포, 현수막 게시, 인스타그램, 맘카페, 지역 커뮤니티 홍보 채널
                      운영을 병행했습니다. 보도자료 배포 시스템과 스탬프 쿠폰 경품 이벤트 체계를 구축하고, 도봉구청과
                      덕성여자대학교와의 협업 기반도 마련했습니다.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2025년 8월 31일 | 제1회 백운시장 플리마켓 개최</p>
                    <p className="text-gray-700">
                      서울다락 사회적협동조합(준)과 백운시장 상인회가 공동 주최한 「우리동네 플리마켓」을 개최했습니다.
                      총 18개 셀러 부스를 운영하고 연인원 500여 명이 방문했으며, 수세미 만들기, 석고 공예, 스탬프 경품
                      이벤트, 대만오빠 팝업, 콩국수 나눔 행사, 덕성여대 학생 초대권 배부 등을 함께 진행했습니다.
                      서울다락이 커뮤니티 활동을 전통시장 활성화와 직접 결합시킨 첫 대외적 사건으로 평가됩니다.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2025년 9월 | 조직 정비 및 정기 행사 체계 수립</p>
                    <p className="text-gray-700">
                      제1회 행사 피드백을 반영한 개선안을 수립하고, 셀러 보증금 제도, 행사맵, 라인업 포스터 제도를
                      도입했습니다. 플리마켓을 매달 마지막 일요일 정기 행사로 발전시키겠다는 계획을 공표했고, 백운시장
                      상인들과의 개별 협의, 도봉구청 및 덕성여자대학교와의 협업 확대 논의를 이어갔습니다. 이 시기
                      서울다락 매니페스토를 발행하고 공식 홈페이지 정비도 완료했습니다.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2025년 9월 28일 | 제2회 백운다락장 개최</p>
                    <p className="text-gray-700">
                      서울다락과 백운시장 상인회가 공동 주최한 제2회 플리마켓 &apos;백운다락장&apos;을 개최했습니다.
                      지역 상권 활성화와 세대 간 교류를 핵심 목표로 운영했으며, 1회의 경험을 바탕으로 개선된 운영 체계를
                      적용했습니다. 이 시점부터 서울다락의 플리마켓은 일회성 이벤트를 넘어 반복 가능한 지역 정기 프로그램으로
                      제도화된 것으로 평가됩니다.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#A5D6A7] pl-4">
                    <p className="text-sm font-bold text-[#2e7d32]">2025년 하반기 | 2호 앵커스토어 기획 착수</p>
                    <p className="text-gray-700">
                      파스타바 형태의 2호 매장 기획에 착수하고, 커뮤니티 센터 운영 계획과 조합원 CMS 회비 구조 설계를
                      진행했습니다. 또한 통인시장 전 사업단장 탁철을 자문위원으로 위촉해 전통시장 활성화 전략 자문 체계를
                      구축했습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div id="about-organization" className="rounded-2xl bg-white p-5 xs:p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl xs:text-2xl font-extrabold mb-4 text-black">조직도</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="rounded-xl border border-[#dce8dc] p-4">
                    <p className="text-sm font-bold text-[#2e7d32] mb-1">의사결정</p>
                    <h4 className="text-lg font-extrabold text-black">총회 · 이사회</h4>
                    <p className="text-gray-700 mt-2">
                      조합의 주요 방향과 운영 원칙을 결정하고 공익적 목적에 맞는 사업 운영을 점검합니다.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#dce8dc] p-4">
                    <p className="text-sm font-bold text-[#2e7d32] mb-1">대표 운영</p>
                    <h4 className="text-lg font-extrabold text-black">대표(이사장)</h4>
                    <p className="text-gray-700 mt-2">
                      조합의 비전 수립과 대외 협력, 사업 총괄을 담당하며 현장 실행을 이끕니다.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#dce8dc] p-4">
                    <p className="text-sm font-bold text-[#2e7d32] mb-1">실행 조직</p>
                    <h4 className="text-lg font-extrabold text-black">사업 운영 · 커뮤니티</h4>
                    <p className="text-gray-700 mt-2">
                      지역 행사, 커뮤니티 프로그램, 사업 운영 및 참여자 지원을 담당합니다.
                    </p>
                  </div>
                  <div className="rounded-xl border border-[#dce8dc] p-4">
                    <p className="text-sm font-bold text-[#2e7d32] mb-1">협력 체계</p>
                    <h4 className="text-lg font-extrabold text-black">자문 · 지역 네트워크</h4>
                    <p className="text-gray-700 mt-2">
                      시장, 지역 단체, 외부 전문가와 연계하여 조합의 지속 가능성과 공익성을 강화합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div id="about-location" className="rounded-2xl bg-white p-5 xs:p-6 sm:p-8 shadow-sm">
                <h3 className="text-xl xs:text-2xl font-extrabold mb-4 text-black">오시는 길</h3>
                <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] gap-4 xs:gap-6">
                  <div className="rounded-xl bg-[#E8F5E9]/20 p-5">
                    <p className="text-sm font-bold text-[#2e7d32] mb-2">주소</p>
                    <p className="text-gray-700 mb-4">서울특별시 도봉구 삼양로 154길 42, 1층</p>
                    <p className="text-sm font-bold text-[#2e7d32] mb-2">문의</p>
                    <p className="text-gray-700">전화: 010-4321-1818</p>
                    <p className="text-gray-700">이메일: seouldarak1@gmail.com</p>
                  </div>
                  <div className="rounded-xl border border-[#dce8dc] p-5">
                    <h4 className="text-lg font-bold text-black mb-2">방문 안내</h4>
                    <p className="text-gray-700 mb-4">
                      방문 전 연락 주시면 운영 일정과 상담 가능 시간을 안내해 드립니다.
                    </p>
                    <a
                      href="https://naver.me/F74qKlnO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-full bg-[#A5D6A7] px-5 py-2 text-white font-bold hover:bg-[#81C784]"
                    >
                      지도에서 위치 보기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-4 xs:mb-6 text-black">
              사업 안내
            </h2>
            <p className="text-sm xs:text-base sm:text-lg text-gray-700 mb-6 xs:mb-8">
              서울다락은 지역 사회에 필요한 활동을 사업과 커뮤니티 형태로 운영하며,
              주민 참여와 공익적 가치를 함께 확장하고 있습니다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
              <div className="bg-white p-5 xs:p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg xs:text-xl font-bold mb-3 text-black">시니어 고용 및 은퇴자 창업 지원</h3>
                <p className="text-gray-700 leading-relaxed">
                  경험과 역량을 지닌 시니어의 새로운 일자리 창출과 안정적인 창업 정착을 지원합니다.
                </p>
              </div>
              <div className="bg-white p-5 xs:p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg xs:text-xl font-bold mb-3 text-black">지역 문화거점 운영</h3>
                <p className="text-gray-700 leading-relaxed">
                  지역 주민이 일상 속에서 자연스럽게 만나고 머무를 수 있는 문화적 거점을 운영합니다.
                </p>
              </div>
              <div className="bg-white p-5 xs:p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg xs:text-xl font-bold mb-3 text-black">백운시장 연계 플리마켓 진행</h3>
                <p className="text-gray-700 leading-relaxed">
                  백운시장과 연계한 플리마켓을 통해 지역 상권에 활력을 더하고 주민 교류의 장을 만듭니다.
                </p>
              </div>
              <div className="bg-white p-5 xs:p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg xs:text-xl font-bold mb-3 text-black">생활 커뮤니티·소모임 운영</h3>
                <p className="text-gray-700 leading-relaxed">
                  다양한 취향과 관심을 매개로 한 소모임을 운영하여 지속 가능한 지역 커뮤니티를 형성합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">서울다락 소개</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
              <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-black">서울다락이란?</h3>
                <p className="text-gray-700">
                  서울다락은 도봉구의 지역 상권 및 시니어 주민들의 고용효과 증진을 위해 탄생한 지역 공동체입니다.
                  지역주민들의 자발적인 참여와 협력을 통해 지역의 문제를 개선하고
                  지속가능한 공동체를 만들어가고 있습니다.
                </p>
              </div>
              <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-black">우리의 비전</h3>
                <p className="text-gray-700">
                  지역주민이 주체가 되어 함께 만들어가는 살기 좋은 마을,
                  지속가능한 공동체를 만들어가는 것이 우리의 비전입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">서울다락 정관</h2>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="/서울다락_정관.pdf"
                className="w-full h-[800px]"
                title="서울다락 정관"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 