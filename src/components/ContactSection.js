export default function ContactSection() {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">문의하기</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">이메일</h3>
                <p className="text-gray-700">contact@seouldarak.org</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#A5D6A7] rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black">전화</h3>
                <p className="text-gray-700">02-123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 