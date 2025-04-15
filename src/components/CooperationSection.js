import Link from "next/link";

export default function CooperationSection() {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#E8F5E9]/98">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-center text-black">서울다락 서비스</h2>
        <p className="text-center text-base xs:text-lg sm:text-xl mb-6 xs:mb-8 sm:mb-12 font-bold text-black">서울다락과 함께 지역 사회에 참여하세요.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
          <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-lg shadow-sm">
            <div className="flex justify-center items-center w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rounded-full bg-[#A5D6A7]/20 text-[#A5D6A7] font-extrabold mb-3 xs:mb-5 sm:mb-6 text-base xs:text-lg sm:text-xl">1</div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-black">커뮤니티 활동</h3>
            <p className="text-sm xs:text-base sm:text-lg font-bold text-black">보드게임 모임, 우이천 플로깅 등 주민들이 함께 참여할 수 있는 다양한 커뮤니티 활동을 운영합니다. 환경 보호와 주민 교류를 동시에 경험해보세요.</p>
          </div>
          <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-lg shadow-sm">
            <div className="flex justify-center items-center w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rounded-full bg-[#A5D6A7]/20 text-[#A5D6A7] font-extrabold mb-3 xs:mb-5 sm:mb-6 text-base xs:text-lg sm:text-xl">2</div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-black">서울다락 매장</h3>
            <p className="text-sm xs:text-base sm:text-lg font-bold text-black">1호점 햄버거 가게와 2호점 닭곰탕 가게를 운영하며, 시니어 고용을 통해 세대 간 화합과 지역 경제 활성화에 기여합니다. 맛있는 음식과 따뜻한 분위기를 경험하세요.</p>
          </div>
          <div className="bg-white p-4 xs:p-6 sm:p-8 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
            <div className="flex justify-center items-center w-8 xs:w-10 sm:w-12 h-8 xs:h-10 sm:h-12 rounded-full bg-[#A5D6A7]/20 text-[#A5D6A7] font-extrabold mb-3 xs:mb-5 sm:mb-6 text-base xs:text-lg sm:text-xl">3</div>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-2 xs:mb-3 sm:mb-4 text-black">지역 협력 프로젝트</h3>
            <p className="text-sm xs:text-base sm:text-lg font-bold text-black">지역 환경 개선, 세대 간 교류, 시니어 일자리 창출 등 다양한 사회적 가치를 창출하는 프로젝트를 함께 기획하고 참여할 수 있습니다.</p>
          </div>
        </div>

        <div className="text-center mt-6 xs:mt-8 sm:mt-12">
          <Link href="/join" className="px-4 xs:px-6 py-2 xs:py-3 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-sm xs:text-base sm:text-lg font-bold inline-block">조합원 참여하기</Link>
        </div>
      </div>
    </section>
  );
} 