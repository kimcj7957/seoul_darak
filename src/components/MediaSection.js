import Link from "next/link";

export default function MediaSection() {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#E8F5E9]/98">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-between items-center mb-4 xs:mb-6 sm:mb-8">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-black">언론·미디어</h2>
          <Link href="/media" className="text-[#A5D6A7] hover:underline text-sm xs:text-base sm:text-lg font-bold">More</Link>
        </div>
        
        <div className="grid grid-cols-1 gap-3 xs:gap-4 sm:gap-6">
          <div className="bg-white p-3 xs:p-5 sm:p-6 rounded-lg shadow-sm">
            <h3 className="text-base xs:text-lg sm:text-xl font-extrabold mb-1 xs:mb-2 text-black">"지역민이 함께하는 우이천 플로깅, 환경 보호와 커뮤니티 활성화 동시에"</h3>
            <p className="text-black mb-1 xs:mb-2 line-clamp-2 text-sm xs:text-base sm:text-lg font-bold">
              매월 진행되는 서울다락의 우이천 플로깅 활동이 지역 환경 개선과 주민 간 소통의 장으로 자리매김하고 있습니다. 
              지난 달 활동에는 50여 명의 주민이 참여해 쓰레기 15kg을 수거했습니다.
            </p>
            <p className="text-sm xs:text-base text-black font-semibold">2024-04-22</p>
          </div>
          <a 
            href="https://www.instagram.com/p/DIbO159yonX/?igsh=azc4ZWNwbzg4bWhr" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white p-3 xs:p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          >
            <h3 className="text-base xs:text-lg sm:text-xl font-extrabold mb-1 xs:mb-2 text-black">"시니어 일자리 창출하는 서울다락 매장, 지역 경제 활성화에 기여"</h3>
            <p className="text-black mb-1 xs:mb-2 line-clamp-2 text-sm xs:text-base sm:text-lg font-bold">
              서울다락의 햄버거 가게와 닭곰탕 가게는 시니어 고용을 통해 지역 어르신들에게 일자리를 제공하고 있습니다. 
              세대 간 소통의 장이자 지역 경제 활성화에 기여하는 새로운 모델로 주목받고 있습니다.
            </p>
            <p className="text-sm xs:text-base text-black font-semibold">2024-04-05</p>
          </div>
        </div>
      </div>
    </section>
  );
} 