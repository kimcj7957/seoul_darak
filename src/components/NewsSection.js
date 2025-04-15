import Link from "next/link";

export default function NewsSection() {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-between items-center mb-4 xs:mb-6 sm:mb-8">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black">소식</h2>
          <Link href="/news" className="text-[#A5D6A7] hover:underline text-sm xs:text-base sm:text-lg font-bold">More</Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
          <div className="border-t border-gray-200 pt-3 xs:pt-4">
            <span className="text-sm xs:text-base text-black font-semibold">커뮤니티</span>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-1 xs:mb-2 text-black">우이천 플로깅 4월 정기활동 안내</h3>
            <p className="text-black mb-1 xs:mb-2 line-clamp-3 text-sm xs:text-base sm:text-lg font-bold">
              4월 우이천 플로깅 정기활동을 아래와 같이 진행합니다. 환경을 생각하는 마음으로 함께 참여해주세요.
              - 일시: 2025년 4월 20일 13시 (일요일 오후 1시)
              - 장소: 백운시장 내 스푼앤포크타파스 앞
              - 준비물: 장갑
            </p>
            <p className="text-sm xs:text-base text-black font-semibold">2025-04-10</p>
          </div>
          <div className="border-t border-gray-200 pt-3 xs:pt-4">
            <span className="text-sm xs:text-base text-black font-semibold">서울다락 매장</span>
            <h3 className="text-lg xs:text-xl sm:text-2xl font-extrabold mb-1 xs:mb-2 text-black">서울다락 1호점 그랜드 오픈 안내</h3>
            <p className="text-black mb-1 xs:mb-2 line-clamp-3 text-sm xs:text-base sm:text-lg font-bold">
              서울다락의 첫 번째 매장 '햄버거햄버거'가 오픈을 앞두고 있습니다. 
              바닥 시공과 기초 시공을 거쳐 백운시장 내 새로운 바람을 일으킬 예정이니 많은 관심 부탁드립니다 🌸
            </p>
            <p className="text-sm xs:text-base text-black font-semibold">2024-04-18</p>
          </div>
        </div>
      </div>
    </section>
  );
} 