'use client';

import Link from "next/link";
import { useMemo, useState } from "react";

export default function DonationBoardListPage({ title, description, posts }) {
  const initialPostId = posts[0]?.id ?? null;
  const [selectedPostId, setSelectedPostId] = useState(initialPostId);

  const selectedPost = useMemo(
    () => posts.find((post) => post.id === selectedPostId) ?? posts[0] ?? null,
    [posts, selectedPostId]
  );

  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#f7f5ec] min-h-screen">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between gap-4 mb-6 xs:mb-8">
            <div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-black">
                {title}
              </h1>
              <p className="mt-3 text-sm xs:text-base sm:text-lg text-gray-700">
                {description}
              </p>
            </div>
            <Link
              href="/donation"
              className="shrink-0 rounded-full border border-[#A5D6A7] px-4 py-2 text-sm xs:text-base font-bold text-[#2e7d32] hover:bg-[#A5D6A7]/10 transition-colors duration-200"
            >
              후원안내로
            </Link>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-[88px_96px_1fr_120px] gap-4 bg-[#E8F5E9]/40 px-4 xs:px-6 py-4 text-sm xs:text-base font-extrabold text-black">
              <span>번호</span>
              <span>구분</span>
              <span>제목</span>
              <span>등록일</span>
            </div>

            {posts.length === 0 ? (
              <div className="px-4 xs:px-6 py-10 text-center text-gray-500">
                등록된 게시물이 없습니다.
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {posts.map((post, index) => (
                  <button
                    key={post.id}
                    type="button"
                    onClick={() => setSelectedPostId(post.id)}
                    className={`grid w-full grid-cols-[88px_96px_1fr_120px] gap-4 px-4 xs:px-6 py-4 text-left transition-colors duration-200 ${
                      selectedPost?.id === post.id ? "bg-[#f8fbf8]" : "bg-white hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-sm xs:text-base text-gray-600">{posts.length - index}</span>
                    <span className="text-sm xs:text-base font-bold text-[#2e7d32]">{post.category}</span>
                    <span className="min-w-0 text-sm xs:text-base font-bold text-[#17171B] truncate">
                      {post.title}
                    </span>
                    <span className="text-sm xs:text-base text-gray-600">{post.date}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedPost && (
            <div className="mt-6 rounded-2xl bg-white p-5 xs:p-6 sm:p-8 shadow-sm">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full bg-[#E8F5E9] px-3 py-1 text-sm font-bold text-[#2e7d32]">
                  {selectedPost.category}
                </span>
                <span className="text-sm text-gray-500">{selectedPost.date}</span>
              </div>
              <h2 className="text-xl xs:text-2xl font-extrabold text-black">
                {selectedPost.title}
              </h2>
              <div className="mt-5 space-y-4 text-gray-700 leading-relaxed">
                {selectedPost.content.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
