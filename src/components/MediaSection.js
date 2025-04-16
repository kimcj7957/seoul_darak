import Link from "next/link";

export default function MediaSection() {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-between items-center mb-6 xs:mb-8">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black">언론보도</h2>
          <Link href="/media" className="text-sm xs:text-base text-[#A5D6A7] hover:text-[#81C784] font-semibold">
            더보기
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
          <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
            <h3 className="text-lg xs:text-xl font-bold mb-2 text-black">
              서울다락, 지역 환경 보호 캠페인 진행
            </h3>
            <p className="text-gray-700 mb-4">
              서울다락이 주최한 지역 환경 보호 캠페인이 성공적으로 진행되었습니다. 
              지역주민들의 적극적인 참여로 쓰레기 수거와 재활용 교육이 이루어졌으며, 
              이를 통해 지역 환경 개선에 기여했습니다.
            </p>
            <p className="text-sm xs:text-base text-black font-semibold">2025-04-10</p>
          </div>
          <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
            <h3 className="text-lg xs:text-xl font-bold mb-2 text-black">
              서울다락, 시니어 일자리 창출 프로젝트 추진
            </h3>
            <p className="text-gray-700 mb-4">
              서울다락이 추진한 시니어 일자리 창출 프로젝트가 성공적으로 추진되고 있습니다. 
              지역 내 은퇴자들을 대상으로 한 창업 프로그램과 일자리 연계를 통해 
              시니어 지역 경제 활성화에 기여하는 새로운 모델로 주목받고 있습니다.
            </p>
            <p className="text-sm xs:text-base text-black font-semibold">2025-04-05</p>
          </div>
        </div>
      </div>
    </section>
  );
} 