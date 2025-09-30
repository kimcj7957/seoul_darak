"use client";
import Link from "next/link";
import { useState } from "react";
import { seouldarakPosts } from "@/lib/seouldarakPosts";

export default function MediaPage() {
  const [activeTab, setActiveTab] = useState("sns"); // 'news' | 'sns'

  // 뉴스보도 탭 데이터 (외부 기사 링크)
  const pressItems = [
    {
      href: "https://www.newstap.co.kr/news/articleView.html?idxno=314087",
      imgSrc: "/images/press/2025-09-28_completed/[사진 1] 비어있는 상점이 플리마켓으로 활성화된 모습.jpg",
      title: "도봉구 백운시장 ‘제2회 백운다락장’ 성황리 개최…세대와 지역 잇는 교류의 장",
      source: "뉴스탭",
      displayDate: "2025.10.01",
      dateISO: "2025-10-01T00:15:00+09:00",
    },
    {
      href: "https://ceo.dobong.go.kr/user/bbs/BD_selectBbs.do?q_bbsSn=1002&q_bbsDocNo=20250831163908252",
      imgSrc: "https://ceo.dobong.go.kr/webcontent/bbs/2025/8/31/1b20d1c9-8bd9-4969-a0f9-b106a46b0bcb.jpg",
      title: "백운시장 플리마켓",
      source: "도봉구청장실",
      displayDate: "2025.08.31",
      dateISO: "2025-08-31T00:00:00+09:00",
    },
    {
      href: "https://www.dongbukilbo.com/etnews/?fn=v&no=38728&cid=21060200",
      imgSrc: "/images/press/2025-09-28/poster.jpg",
      title: "서울다락×백운시장 ‘우리동네 플리마켓’ 2차 개최",
      source: "동북일보",
      displayDate: "2025.09.21",
      dateISO: "2025-09-21T00:00:00+09:00",
    },
    {
      href: "https://weekly.cnbnews.com/news/article.html?no=189064",
      imgSrc: "https://weekly.cnbnews.com/data/photos/20250937/art_189064_1757307087.jpg",
      title: "도봉구, 백운시장서 벼룩시장 행사…어르신 콩국수 나눔도",
      source: "CNB뉴스",
      displayDate: "2025.09.08",
      dateISO: "2025-09-08T00:00:00+09:00",
    },
    {
      href: "http://www.igangbuk.com/news/munhoa/5634",
      imgSrc: "/images/press/2025-09-28/vendors.jpg",
      title: "서울다락·백운시장 상인회, 9월 28일 ‘우리동네 플리마켓’ 2차 개최",
      source: "강북신문",
      displayDate: "2025.09.22",
      dateISO: "2025-09-22T00:00:00+09:00",
    },
    {
      href: "https://www.seoulinnews.com/news/articleView.html?idxno=1847",
      imgSrc: "/images/press/2025-09-28/dobong-visit.jpg",
      title: "도봉구, 서울다락·백운시장 상인회, 9월 28일 ‘우리동네 플리마켓’ 2차 개최",
      source: "서울인뉴스",
      displayDate: "2025.09.17",
      dateISO: "2025-09-17T00:00:00+09:00",
    },
  ];

  // 서울다락 소식 (내부 게시글 데이터)
  const seouldarakItems = seouldarakPosts;

  const sortedSeouldarak = [...seouldarakItems].sort(
    (a, b) => new Date(b.dateISO) - new Date(a.dateISO)
  );
  const sortedPress = [...pressItems].sort(
    (a, b) => new Date(b.dateISO) - new Date(a.dateISO)
  );

  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec]">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="flex justify-between items-center mb-6 xs:mb-8">
          <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">미디어</h1>
          <Link href="/" className="text-sm xs:text-base text-[#A5D6A7] hover:text-[#81C784] font-semibold">홈으로</Link>
        </div>

        {/* 탭 메뉴 */}
        <div className="mb-6 xs:mb-8">
          <div className="inline-flex rounded-full bg-[#E8F5E9]/80 p-1">
            <button
              onClick={() => setActiveTab("news")}
              className={`px-4 xs:px-5 py-2 rounded-full text-sm xs:text-base font-bold transition-colors ${activeTab === "news" ? "bg-[#A5D6A7] text-white" : "text-black hover:text-[#A5D6A7]"}`}
            >
              서울다락 소식
            </button>
            <button
              onClick={() => setActiveTab("sns")}
              className={`px-4 xs:px-5 py-2 rounded-full text-sm xs:text-base font-bold transition-colors ${activeTab === "sns" ? "bg-[#A5D6A7] text-white" : "text-black hover:text-[#A5D6A7]"}`}
            >
              뉴스보도
            </button>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        {activeTab === "news" ? (
          <div>
            {sortedSeouldarak.length === 0 ? (
              <div className="bg-white border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
                등록된 서울다락 소식이 없습니다. 곧 업데이트됩니다.
              </div>
            ) : (
              <div className="divide-y rounded-xl border border-gray-200 bg-white overflow-hidden">
                {sortedSeouldarak.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/media/seouldarak/${item.slug}`}
                    className="block hover:bg-gray-50 transition-colors"
                  >
                    <div className="px-4 xs:px-5 py-4 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="text-base xs:text-lg font-bold text-[#17171B] truncate">{item.title}</h3>
                        <p className="text-xs xs:text-sm text-gray-600 mt-1">{item.displayDate} · {item.author ?? '서울다락'}</p>
                      </div>
                      <span className="text-xs xs:text-sm text-gray-400 whitespace-nowrap">자세히</span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            {sortedPress.length === 0 ? (
              <div className="bg-white border border-dashed border-gray-300 rounded-xl p-8 text-center text-gray-500">
                등록된 뉴스보도 콘텐츠가 없습니다. 곧 업데이트됩니다.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
                {sortedPress.map((item) => (
                  <div key={item.href} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block hover:opacity-80 transition-opacity duration-300"
                    >
                      <div className="aspect-[3/4] relative bg-gray-100">
                        {item.imgSrc ? (
                          <img src={item.imgSrc} alt={item.title} className="w-full h-full object-cover absolute inset-0" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">썸네일 없음</div>
                        )}
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
            )}
          </div>
        )}
      </div>
    </section>
  );
}

