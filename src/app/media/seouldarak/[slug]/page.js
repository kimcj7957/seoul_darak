import Link from 'next/link';
import { seouldarakPosts, getPostBySlug } from '@/lib/seouldarakPosts';

export function generateStaticParams() {
  return seouldarakPosts.map((post) => ({ slug: post.slug }));
}

export default function SeouldarakPostPage({ params }) {
  const { slug } = params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 text-center">
          <p className="text-gray-600">게시글을 찾을 수 없습니다.</p>
          <Link href="/media" className="inline-block mt-4 text-[#A5D6A7] hover:text-[#81C784] font-bold">목록으로</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <div className="mb-6 xs:mb-8">
          <Link href="/media" className="text-sm xs:text-base text-[#A5D6A7] hover:text-[#81C784] font-semibold">목록</Link>
        </div>
        <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-extrabold text-black mb-2">{post.title}</h1>
        <div className="text-xs xs:text-sm text-gray-600 mb-6">
          {post.displayDate} · {post.author ?? '서울다락'}
        </div>
        {Array.isArray(post.images) && post.images.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 mb-8">
            {post.images.map((img, idx) => (
              <div key={idx} className="rounded-lg overflow-hidden bg-gray-100">
                <img src={img.src} alt={img.alt || post.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        )}

        <article className="prose max-w-none">
          {Array.isArray(post.content) ? post.content.map((para, idx) => (
            <p key={idx} className="text-base xs:text-lg leading-7 text-gray-800 mb-4">{para}</p>
          )) : (
            <p className="text-base xs:text-lg leading-7 text-gray-800">{post.content}</p>
          )}
        </article>
      </div>
    </section>
  );
}


