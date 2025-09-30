"use client";
import Link from "next/link";
import { useState } from "react";

export default function PlatformSection() {
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
  const [showAll, setShowAll] = useState(false);
  const visibleEvents = sortedEvents.slice(0, 4);
  const hiddenEvents = sortedEvents.slice(4);
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-6 xs:gap-8 lg:gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 xs:mb-4 sm:mb-6 text-black">[ 커뮤니티 활동 ]</h2>
            <p className="text-lg xs:text-xl sm:text-2xl mb-3 xs:mb-4 sm:mb-6 font-bold text-black">
              세대 간의 소통을 통해 사회적인 문제를 공유, 공감함으로써 해결책을 찾아갑니다.<br className="md:hidden" />
              
            </p>
            <ul className="space-y-3 xs:space-y-4 sm:space-y-6 text-sm xs:text-base sm:text-lg">
              <li className="flex gap-2 xs:gap-3">
                <div className="bg-[#A5D6A7]/20 p-1.5 xs:p-2 h-min rounded-full flex-shrink-0">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#A5D6A7] rounded-full"></div>
                </div>
                <p className="font-bold text-black"><strong className="font-extrabold bg-[#A5D6A7]/20 px-1">다양한 소모임 지원을 통해</strong>직접적인 소통을 실천하고 있습니다.</p>
              </li>
              <li className="flex gap-2 xs:gap-3">
                <div className="bg-[#A5D6A7]/20 p-1.5 xs:p-2 h-min rounded-full flex-shrink-0">
                  <div className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-[#A5D6A7] rounded-full"></div>
                </div>
                <p className="font-bold text-black">향후 더 다양한 활동들로<strong className="font-extrabold bg-[#A5D6A7]/20 px-1"></strong>재미있는 서울을 만들어갑니다.</p>
              </li>
            
            </ul>
            <div className="mt-4 xs:mt-6 sm:mt-8 flex flex-wrap gap-3 xs:gap-4">
              <Link href="/join" className="px-4 xs:px-6 py-2 xs:py-3 bg-[#A5D6A7] text-white rounded-full hover:bg-[#81C784] text-sm xs:text-base sm:text-lg font-bold inline-block">커뮤니티 참여하기</Link>
              <a href="https://naver.me/F74qKlnO" target="_blank" rel="noopener noreferrer" className="px-4 xs:px-6 py-2 xs:py-3 border border-[#A5D6A7] text-[#A5D6A7] rounded-full hover:bg-[#A5D6A7]/10 text-sm xs:text-base sm:text-lg font-bold inline-block">매장 위치 보기</a>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white rounded-lg mt-4 xs:mt-6 lg:mt-0 p-3 xs:p-4">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
              {visibleEvents.map((event) => (
                <div key={event.href} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <a 
                    href={event.href}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity duration-300"
                  >
                    <div className="aspect-[3/4] relative">
                      <img 
                        src={event.imgSrc}
                        alt={event.imgAlt}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                    </div>
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

            {hiddenEvents.length > 0 && (
              <div className="mt-4 xs:mt-6">
                {!showAll && (
                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="px-4 xs:px-6 py-2 xs:py-3 border border-[#A5D6A7] text-[#A5D6A7] rounded-full hover:bg-[#A5D6A7]/10 text-sm xs:text-base sm:text-lg font-bold inline-flex items-center"
                    aria-expanded={showAll}
                    aria-controls="more-events-panel"
                  >
                    {">> more events"}
                  </button>
                )}

                <div
                  id="more-events-panel"
                  className={`${showAll ? "max-h-[3000px] mt-4 xs:mt-6" : "max-h-0"} overflow-hidden transition-[max-height] duration-500`}
                  aria-hidden={!showAll}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
                    {hiddenEvents.map((event) => (
                      <div key={event.href} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <a 
                          href={event.href}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block hover:opacity-80 transition-opacity duration-300"
                        >
                          <div className="aspect-[3/4] relative">
                            <img 
                              src={event.imgSrc}
                              alt={event.imgAlt}
                              className="w-full h-full object-cover absolute inset-0"
                            />
                          </div>
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

                  {showAll && (
                    <div className="mt-4 flex">
                      <button
                        type="button"
                        onClick={() => setShowAll(false)}
                        className="ml-auto px-4 xs:px-6 py-2 xs:py-3 border border-[#A5D6A7] text-[#A5D6A7] rounded-full hover:bg-[#A5D6A7]/10 text-sm xs:text-base sm:text-lg font-bold inline-flex items-center"
                        aria-expanded={showAll}
                        aria-controls="more-events-panel"
                      >
                        {"<< less events"}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
} 