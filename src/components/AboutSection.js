export default function AboutSection() {
  return (
    <>
      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">서울다락 소개</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-8">
              <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-black">서울다락이란?</h3>
                <p className="text-gray-700">
                  서울다락은 도봉구의 지역 상권 및 시니어 주민들의 고용효과 증진을 위해 탄생한 지역 공동체입니다. 
                  지역주민들의 자발적인 참여와 협력을 통해 지역의 문제를 개선하고 
                  지속가능한 공동체를 만들어가고 있습니다.
                </p>
              </div>
              <div className="bg-[#E8F5E9]/20 p-4 xs:p-6 rounded-lg">
                <h3 className="text-lg xs:text-xl font-bold mb-2 text-black">우리의 비전</h3>
                <p className="text-gray-700">
                  지역주민이 주체가 되어 함께 만들어가는 살기 좋은 마을, 
                  지속가능한 공동체를 만들어가는 것이 우리의 비전입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 xs:py-8 sm:py-12 md:py-16 bg-[#E8F5E9]/98">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold mb-4 xs:mb-6 sm:mb-8 text-center text-black">서울다락 정관</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="/서울다락_정관.pdf"
              className="w-full h-[800px]"
              title="서울다락 정관"
            />
          </div>
        </div>
      </section>
    </>
  );
} 