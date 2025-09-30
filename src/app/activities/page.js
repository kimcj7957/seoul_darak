'use client';

export default function ActivitiesPage() {
  const events = [
    {
      href: "https://www.instagram.com/p/DOlQTgdEb58",
      imgSrc: "/images/250928_fleamarket.jpg",
      imgAlt: "서울다락 X 백운시장 우리동네 플리마켓 (2025-09-28)",
      title: "제2회 서울다락 X 백운시장 상인회 우리동네 플리마켓",
      displayDate: "2025.09.28 12:00-17:00",
      dateISO: "2025-09-28T12:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DNDAbhlSt04/?utm_source=ig_embed&ig_rid=cee73e3b-6148-45a0-b936-29207fa92aca&img_index=3",
      imgSrc: "/images/flea_market_250831.jpeg",
      imgAlt: "서울다락 X 백운시장 상인회 플리마켓",
      title: "서울다락 X 백운시장 상인회 플리마켓",
      displayDate: "2025.08.31 12:00",
      dateISO: "2025-08-31T12:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DL4vrgny9S1",
      imgSrc: "/images/watching_movie_250720.jpg",
      imgAlt: "영화 감상 소모임",
      title: "염화 감상 소모임",
      displayDate: "2025.07.20 11:00",
      dateISO: "2025-07-20T11:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DMjfLH7PP9B/?utm_source=ig_embed&ig_rid=f165520c-50de-4437-8777-2b95ef2a6ea8",
      imgSrc: "/images/ui_running_0810.jpeg",
      imgAlt: "우이천 러닝 소모임",
      title: "우이천 러닝 소모임",
      displayDate: "2025.08.10 20:00",
      dateISO: "2025-08-10T20:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DKwKd1MSZJd/",
      imgSrc: "/images/ui_running_0622.jpg",
      imgAlt: "우이천 러닝",
      title: "우이천 러닝 소모임",
      displayDate: "2025.06.22 19:00",
      dateISO: "2025-06-22T19:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DJyzeayyqpe/",
      imgSrc: "/images/tracking_plog_0525.jpg",
      imgAlt: "우이천 플로깅",
      title: "북한산 플로깅",
      displayDate: "2025.05.25 11:00",
      dateISO: "2025-05-25T11:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DIbO159yonX/?igsh=azc4ZWNwbzg4bWhr",
      imgSrc: "/images/boardgame_poster.jpg",
      imgAlt: "보드게임 모임",
      title: "보드게임 모임",
      displayDate: "2025.04.30 20:00",
      dateISO: "2025-04-30T20:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DILTQPoS-6h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/images/plogging_poster.jpg",
      imgAlt: "우이천 플로깅 이벤트",
      title: "우이천 플로깅",
      displayDate: "2025.04.20 13:00",
      dateISO: "2025-04-20T13:00:00+09:00",
    },
  ];

  const sortedEvents = [...events].sort(
    (a, b) => new Date(b.dateISO) - new Date(a.dateISO)
  );

  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 xs:mb-8 text-black">
          커뮤니티 활동
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
          {sortedEvents.map((event) => (
            <div key={event.href} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a 
                href={event.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                {event.imgSrc2 ? (
                  <div className="relative">
                    <div className="aspect-[3/4] relative">
                      <img src={event.imgSrc} alt={event.imgAlt} className="w-full h-full object-cover absolute inset-0" />
                    </div>
                    <div className="aspect-[3/4] relative">
                      <img src={event.imgSrc2} alt={event.imgAlt + ' - 추가 이미지'} className="w-full h-full object-cover absolute inset-0" />
                    </div>
                  </div>
                ) : (
                  <div className="aspect-[3/4] relative">
                    <img src={event.imgSrc} alt={event.imgAlt} className="w-full h-full object-cover absolute inset-0" />
                  </div>
                )}
              </a>
              <div className="p-3 xs:p-4 bg-white">
                <a 
                  href={event.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity duration-300"
                >
                  <h3 className="text-base xs:text-lg font-bold text-[#A5D6A7] leading-6 xs:leading-7 min-h-[1.5rem] xs:min-h-[1.75rem] whitespace-nowrap overflow-hidden text-ellipsis">{event.title}</h3>
                  <p className="text-xs xs:text-sm text-gray-600">{event.displayDate}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


