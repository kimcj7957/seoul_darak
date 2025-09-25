'use client';

export default function TermsPage() {
  return (
    <div className="min-h-screen font-semibold text-base text-[#17171B]">
      {/* Hero */}
      <section className="bg-[#f7f5ec] py-6 xs:py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 md:mb-8 leading-tight text-black">
            이용약관
          </h1>
          <p className="text-gray-700 max-w-3xl">
            본 약관은 사회적협동조합 서울다락(이하 ‘본 기관’)이 운영하는 홈페이지 서비스(seouldarak.site) 이용과
            관련하여 본 기관과 회원의 권리, 의무 및 책임사항을 규정합니다.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
            {/* 제1장 총칙 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">제 1 장 총칙</h2>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제1조 (목적)</h3>
              <p className="text-gray-700">
                이 약관은 사회적협동조합 서울다락(이하 ‘본 기관’이라 함)이 운영하는 홈페이지(seouldarak.site)의 제반
                서비스 이용과 관련하여 본 기관과 회원의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제2조 (정의)</h3>
              <p className="text-gray-700 mb-2">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>
                  ‘서비스’란 구현되는 단말기와 상관없이 회원이 이용할 수 있는 본 기관과 관련된 제반 서비스를
                  의미합니다.
                </li>
                <li>‘회원’이란 본 기관 홈페이지에 접속하여 본 약관에 따라 서비스를 받는 자를 총칭합니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제3조 (약관의 효력 및 변경)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>본 약관은 서비스 화면에 게시하거나 회원에게 공지함으로써 효력이 발생합니다.</li>
                <li>본 기관은 관계법령에 위배되지 않는 범위 내에서 약관을 개정할 수 있습니다.</li>
                <li>
                  개정 약관은 적용일자 7일 전부터 공지하며, 공지 기간 내 명시적 거부가 없으면 동의한 것으로 간주합니다.
                </li>
                <li>개정 약관은 관계 법령에 위배되지 않는 한 기존 회원에게도 적용됩니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제4조 (약관 외 준칙)</h3>
              <p className="text-gray-700">
                본 약관에 명시되지 않은 사항은 전기통신기본법, 전기통신사업법, 전자거래기본법, 전자서명법 등 관련
                법령과 상관례를 따릅니다.
              </p>
            </div>

            {/* 제2장 서비스 이용 계약 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">제 2 장 서비스 이용 계약</h2>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제5조 (회원가입)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>모든 개인·법인·단체는 회원가입 신청절차에 따라 가입할 수 있습니다.</li>
                <li>만 14세 미만 아동은 법정대리인의 확인과 동의 후 회원으로 가입할 수 있습니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제6조 (회원가입의 성립)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>서비스 이용은 회원 신청에 대한 승낙과 약관 동의로 성립합니다.</li>
                <li>회원가입은 본 기관이 정한 신청서에 아이디 등 필수사항을 기재·제공함으로써 완료됩니다.</li>
                <li>필요 시 실명확인 및 본인인증을 요청할 수 있습니다.</li>
                <li>
                  다음 각 호에 해당하는 경우 승낙을 하지 않거나 사후에 이용계약을 해지할 수 있습니다.
                  <ul className="list-disc pl-6 mt-1 space-y-1">
                    <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                    <li>허위정보 기재 또는 필수사항 누락 등 신청 요건 미충족</li>
                    <li>기타 규정 위반으로 승인이 불가능한 경우</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제7조 (개인정보 변경)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>회원은 개인정보관리 화면에서 자신의 정보를 열람·수정할 수 있습니다.</li>
                <li>변경사항은 온라인 수정 또는 전자우편 등으로 본 기관에 알려야 합니다.</li>
                <li>미통지로 발생한 불이익에 대해 본 기관은 책임지지 않습니다.</li>
              </ul>
            </div>
            {/* 제3장 서비스 이용 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">제 3 장 서비스 이용</h2>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제8조 (서비스의 제공)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>업무상·기술상 특별한 지장이 없는 한 연중무휴, 24시간 서비스를 제공합니다.</li>
                <li>
                  필요 시 전자우편, 우편, 문자메시지 등으로 기관 정보, 행사/이벤트 정보를 제공할 수 있으며, 회원은 필수
                  고지를 제외하고 수신 거부할 수 있습니다.
                </li>
                <li>회원은 본 기관이 진행하는 후원에 참여할 수 있으며, 승인에 따라 후원 내역을 열람할 수 있습니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제9조 (회원에 대한 통지)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>전자우편, 우편, 휴대전화, 문자메시지, 유선전화 등의 방법으로 통지할 수 있습니다.</li>
                <li>불특정다수 회원에 대한 통지는 홈페이지 공지사항에 1주일 이상 게시함으로써 갈음할 수 있습니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제10조 (서비스의 중단)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>설비 보수·교체·고장, 통신두절 등 발생 시 일시 중단할 수 있고 필요 시 완전 중단할 수 있습니다.</li>
                <li>중단 시 공지사항을 통해 통지하되, 통제 불가 사유로 사전 통지가 불가능한 경우는 예외입니다.</li>
              </ul>
            </div>
            {/* 제4장 계약 당사자의 의무 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">제 4 장 계약 당사자의 의무</h2>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제11조 (본 기관의 의무)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>법령과 약관이 금지하는 행위를 하지 않으며 안정적인 서비스 제공을 위해 노력합니다.</li>
                <li>관련 법령에 따라 회원의 개인정보를 보호하기 위해 노력합니다.</li>
                <li>회원의 정당한 의견·불만은 처리하고 결과를 통지합니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제12조 (회원의 의무)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>허위등록, 타인정보 도용, 무단 게시/송신, 저작권 침해, 명예훼손 등을 해서는 안 됩니다.</li>
                <li>공서양속에 반하는 정보 게시, 동의 없는 영리 목적 사용 등 불법·부당행위를 해서는 안 됩니다.</li>
                <li>관계법, 약관, 공지사항 등 본 기관의 통지를 준수해야 합니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제13조 (아이디 및 비밀번호의 의무)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>아이디/비밀번호 관리 책임은 회원에게 있으며 제3자 이용을 허용해서는 안 됩니다.</li>
                <li>부정사용 등으로 인한 불이익에 대해 본 기관은 책임지지 않습니다.</li>
                <li>도난·부정사용 인지 시 즉시 통보하고 안내에 따라야 합니다.</li>
              </ul>
            </div>
            {/* 제5장 계약의 해지 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">제 5 장 계약의 해지</h2>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제14조 (회원탈퇴 및 자격 상실 등)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>회원탈퇴는 회원 본인이 전자우편(seouldarak1@gmail.com) 또는 유선전화로 요청해야 합니다.</li>
                <li>후원 중단 의사는 별도로 밝혀야 하며, 관련 법령에 따라 필요한 개인정보는 보유할 수 있습니다.</li>
                <li>약관·이용규정 위반 시 자격 제한·정지·상실 및 손해배상 책임이 있을 수 있습니다.</li>
              </ul>
            </div>
            {/* 제6장 기타사항 */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-black">제 6 장 기타사항</h2>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제15조 (저작권의 귀속 및 이용제한)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>본 기관이 작성한 저작물의 저작권은 본 기관에 귀속됩니다.</li>
                <li>회원은 사전승낙 없이 영리 목적으로 이용하거나 제3자에게 이용하게 해서는 안 됩니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제16조 (손해 배상 및 면책조항)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>천재지변 등 불가항력 시 서비스 제공 책임이 면제됩니다.</li>
                <li>회원 귀책사유로 인한 서비스 이용 장애에 대해서는 책임지지 않습니다.</li>
                <li>회원이 게재한 정보의 신뢰도·정확성 등에 대해서는 책임지지 않습니다.</li>
                <li>무료 서비스 이용 관련 손해는 법령에 특별한 규정이 없는 한 책임지지 않습니다.</li>
                <li>설비 보수·교체·점검·공사 등 부득이한 사유로 발생한 손해는 면책됩니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제17조 (준거법 및 재판관할)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>본 기관과 회원 간 소송의 준거법은 대한민국법입니다.</li>
                <li>분쟁은 민사소송법상 관할 법원에 제기합니다.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2 text-black">제18조 (기부금의 사용)</h3>
              <ul className="list-decimal pl-6 space-y-1 text-gray-700">
                <li>
                  기부금은 사회적협동조합 서울다락을 통해 지역 공동체 활동, 일자리 창출, 문화·환경 관련 공익사업 등에
                  사용됩니다.
                </li>
                <li>
                  기부금 내역은 연 1회 &lt;기부금 모금액 및 활용실적 명세서&gt;를 통해 홈페이지에 공고하여 투명하게
                  공개합니다.
                </li>
              </ul>
            </div>
            <div className="text-right text-gray-600 mt-4">부칙: 이 약관은 2025년 7월 13일부터 적용됩니다.</div>
          </div>
        </div>
      </section>
    </div>
  );
}


