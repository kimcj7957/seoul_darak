export const metadata = {
  title: "개인정보처리방침 - 서울다락",
  description: "서울다락 개인정보 처리방침",
};

export default function PrivacyPage() {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-black">개인정보처리방침</h1>

        <p className="text-sm xs:text-base sm:text-lg text-gray-700 mb-6 xs:mb-8">
          사회적협동조합 서울다락(이하 "서울다락")은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 관련 고충을 신속하고 원활하게 처리하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">1. 개인정보의 처리목적</h2>
            <p className="text-gray-700 mb-2">서울다락은 다음의 목적을 위하여 개인정보를 처리합니다. 처리한 개인정보는 다음 목적 이외의 용도로는 사용되지 않으며, 목적이 변경되는 경우에는 개인정보 보호법에 따라 별도의 동의를 받는 등 필요한 조치를 이행하겠습니다.</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>홈페이지 회원가입 및 관리: 가입의사 확인, 본인 식별·인증, 회원자격 유지·관리, 고지·통지, 민원처리 등</li>
              <li>재화 또는 서비스 제공: 콘텐츠 제공, 맞춤서비스, 요금정산, 본인인증 등</li>
              <li>고충처리: 민원인의 신원 확인, 민원사항 확인 및 처리결과 통보 등</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">2. 처리 및 보유기간</h2>
            <p className="text-gray-700">법령에 따른 기간 또는 정보주체로부터 동의받은 기간 내에서 개인정보를 처리·보유하며, 기간 경과 시 지체없이 파기합니다.</p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">3. 처리하는 개인정보 항목</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>필수항목: 이름, 연락처(전화번호/이메일), 서비스 이용기록, 접속 로그, 쿠키</li>
              <li>선택항목: 주소, 관심사 등 서비스 제공에 필요한 최소 정보</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-700">서울다락은 법령에 근거가 있거나 정보주체의 동의가 있는 경우를 제외하고 제3자에게 개인정보를 제공하지 않습니다.</p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">5. 개인정보 처리의 위탁</h2>
            <p className="text-gray-700 mb-2">원활한 서비스 제공을 위하여 필요한 경우 개인정보 처리업무를 위탁할 수 있으며, 위탁 시 관련 법령에 따라 안전하게 관리될 수 있도록 관리·감독합니다.</p>
            <p className="text-gray-700">현재 기준 위탁 내역이 발생하는 경우 본 방침 또는 별도 고지를 통해 공개합니다.</p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">6. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="text-gray-700 mb-2">정보주체는 서울다락에 대해 언제든지 개인정보 열람·정정·삭제·처리정지 요구를 할 수 있습니다.</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>권리행사는 서면, 이메일 등으로 요청할 수 있으며, 서울다락은 지체없이 조치합니다.</li>
              <li>대리인을 통한 요청도 가능하며, 이 경우 위임장 등 증빙자료가 필요할 수 있습니다.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">7. 개인정보의 파기</h2>
            <p className="text-gray-700 mb-2">보유기간의 경과, 처리목적 달성 등 불필요해진 개인정보는 지체없이 다음의 방법으로 파기합니다.</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>전자적 파일: 복구·재생이 불가능한 기술적 방법으로 영구 삭제</li>
              <li>종이 문서: 분쇄 또는 소각</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">8. 개인정보의 안전성 확보조치</h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>관리적 조치: 내부관리계획 수립·시행, 정기 교육</li>
              <li>기술적 조치: 접근권한 관리, 접근통제, 암호화, 보안프로그램 설치</li>
              <li>물리적 조치: 전산실, 자료보관실 출입통제</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">9. 쿠키의 사용</h2>
            <p className="text-gray-700 mb-2">맞춤형 서비스 제공을 위해 쿠키를 이용할 수 있습니다. 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 일부 서비스 이용에 제한이 있을 수 있습니다.</p>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">10. 개인정보 보호책임자</h2>
            <p className="text-gray-700 mb-2">서울다락은 개인정보 처리에 관한 업무를 총괄하여 책임지는 개인정보 보호책임자를 지정하고 있습니다.</p>
            <div className="bg-[#E8F5E9]/20 p-4 rounded">
              <p className="text-gray-800"><span className="font-bold">성명</span>: 신해균</p>
              <p className="text-gray-800"><span className="font-bold">연락처</span>: 010-4321-1818 / <span className="font-bold">E-mail</span>: seouldarak1@gmail.com</p>
              <p className="text-gray-800"><span className="font-bold">주소</span>: 서울특별시 도봉구 삼양로 154길 42, 1층</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">11. 권익침해 구제방법</h2>
            <p className="text-gray-700 mb-2">개인정보 침해에 대한 신고 또는 상담이 필요한 경우 아래 기관에 문의하실 수 있습니다.</p>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>개인정보침해신고센터(privacy.kisa.or.kr / 국번없이 118)</li>
              <li>개인정보분쟁조정위원회(www.kopico.go.kr / 1833-6972)</li>
              <li>대검찰청 사이버범죄수사(www.spo.go.kr / 02-3480-3573)</li>
              <li>경찰청 사이버수사 시스템(cyberbureau.police.go.kr / 국번없이 182)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl xs:text-2xl font-bold text-black mb-3">12. 개인정보 처리방침의 변경</h2>
            <p className="text-gray-700">본 방침은 법령, 정책 또는 내부 운영방침에 따라 변경될 수 있으며, 변경 시 본 페이지를 통해 고지합니다. 적용일: 2025-09-11</p>
          </section>
        </div>
      </div>
    </section>
  );
}


