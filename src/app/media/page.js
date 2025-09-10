import Link from "next/link";

export default function MediaPage() {
  const mediaItems = [
    {
      href: "https://www.instagram.com/p/DNDAbhlSt04/?utm_source=ig_embed&ig_rid=cee73e3b-6148-45a0-b936-29207fa92aca&img_index=3",
      imgSrc: "/images/flea_market_250831.jpeg",
      title: "서울다락 X 백운시장 상인회 플리마켓",
      source: "Instagram",
      displayDate: "2025.08.31",
      dateISO: "2025-08-31T12:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DMjfLH7PP9B/?utm_source=ig_embed&ig_rid=f165520c-50de-4437-8777-2b95ef2a6ea8",
      imgSrc: "/images/ui_running_0810.jpeg",
      title: "우이천 러닝 소모임",
      source: "Instagram",
      displayDate: "2025.08.10",
      dateISO: "2025-08-10T20:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DKwKd1MSZJd/",
      imgSrc: "/images/ui_running_0622.jpg",
      title: "우이천 러닝 소모임",
      source: "Instagram",
      displayDate: "2025.06.22",
      dateISO: "2025-06-22T19:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DJyzeayyqpe/",
      imgSrc: "/images/tracking_plog_0525.jpg",
      title: "북한산 플로깅",
      source: "Instagram",
      displayDate: "2025.05.25",
      dateISO: "2025-05-25T11:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DIbO159yonX/?igsh=azc4ZWNwbzg4bWhr",
      imgSrc: "/images/boardgame_poster.jpg",
      title: "보드게임 모임",
      source: "Instagram",
      displayDate: "2025.04.30",
      dateISO: "2025-04-30T20:00:00+09:00",
    },
    {
      href: "https://www.instagram.com/p/DILTQPoS-6h/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      imgSrc: "/images/plogging_poster.jpg",
      title: "우이천 플로깅",
      source: "Instagram",
      displayDate: "2025.04.20",
      dateISO: "2025-04-20T13:00:00+09:00",
    },
  ];

  const sorted = [...mediaItems].sort(
    (a, b) => new Date(b.dateISO) - new Date(a.dateISO)
  );

  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-between items-center mb-6 xs:mb-8">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">미디어</h1>
          <Link href="/" className="text-sm xs:text-base text-[#A5D6A7] hover:text-[#81C784] font-semibold">홈으로</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
          {sorted.map((item) => (
            <div key={item.href} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity duration-300"
              >
                <div className="aspect-[3/4] relative">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </div>
              </a>
              <div className="p-3 xs:p-4 bg-white">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:opacity-80 transition-opacity duration-300"
                >
                  <h3 className="text-base xs:text-lg font-bold text-[#A5D6A7] leading-6 xs:leading-7 min-h-[1.5rem] xs:min-h-[1.75rem] whitespace-nowrap overflow-hidden text-ellipsis">{item.title}</h3>
                  <p className="text-xs xs:text-sm text-gray-600">{item.displayDate} · {item.source}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

