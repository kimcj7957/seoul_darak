export default function ActivitiesSection() {
  return (
    <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#E8F5E9]/98">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6">
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">주요 활동</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 sm:gap-8">
            <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">커뮤니티 공간 운영</h3>
              <p className="text-sm xs:text-base text-center text-gray-700">
                지역주민들이 모여 소통하고 활동할 수 있는 공간을 운영합니다.
              </p>
            </div>
            <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">교육 프로그램</h3>
              <p className="text-sm xs:text-base text-center text-gray-700">
                지역주민을 위한 다양한 교육 프로그램을 운영합니다.
              </p>
            </div>
            <div className="bg-white p-4 xs:p-6 rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-[#A5D6A7] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg xs:text-xl font-bold mb-2 text-center text-black">지역 네트워크</h3>
              <p className="text-sm xs:text-base text-center text-gray-700">
                지역 내 다양한 단체와의 협력을 통해 지역문제를 해결합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 