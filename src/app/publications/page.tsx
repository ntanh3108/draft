import Image from "next/image";
import SectionBanner from "../components/SectionBanner";
import GoToTopButton from "../components/GoToTopButton";

export default function PublicationsPage() {
  return (
    <section className="w-full flex flex-col items-center mt-6">
      <SectionBanner>
        <div className="flex-shrink-0">
          <Image src="/profile.webp" alt="Publications Banner" width={260} height={260} className="w-52 h-52 rounded-lg object-cover" />
        </div>
        <div className="flex-1 text-gray-700 text-lg md:text-xl">
          <p className="mb-4">Welcome to my publications! Here you can find my scientific articles, conference papers, and research contributions in the field of Chemistry.</p>
          <p className="mb-4">I have published in various international journals and conferences, collaborating with researchers from <a href="https://www.hcmus.edu.vn/" className="underline">University of Science</a></p>
          <p>Scroll down to see the full list of my publications and research works.</p>
        </div>
      </SectionBanner>
      <div className="w-full max-w-screen-xl mx-auto mt-8 px-4">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">2025</h2>
          <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col-reverse md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                1. A high-capacity double-layered (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub> in micro-rods structure for sodium storage
              </div>
              <div className="text-gray-700 mb-1">Materials Science and Engineering: B <span className="font-semibold">(Q1, IF = 4.6 in 2024)</span></div>
              <div className="text-gray-700 mb-1">
                <span className="font-bold">Authors:</span> <span className="font-bold underline">Thi Hong Loan Dang</span>, Thi Thu Trang Nguyen, Hai Nam Pham, Hoang Anh Nguyen, Thi Thu Hong Nguyen, Minh Dai To, Thu Thao Nguyen, Thi Nam Pham, Dai Lam Tran, Wen Jen Lee, Minh Thuan Pham, Anh Tuan Dao, Quang Vinh Lam, Thai Hoang Nguyen, Viet Hai Le, Le Thanh Nguyen Huynh
              </div>
              <hr></hr>
              <div className="text-gray-700 mb-2">
                <span className="font-bold">Abstract:</span><br/>
                An ammonium vanadium bronze (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub> (NVO) was synthesized via a hydrothermal route and investigated the Na-insertion/extraction process as a cathode for Na-ion batteries. The structural analysis confirms that the double-layered NVO in the micro-rods structure is formed by the double-sheet [VO<sub>6</sub>] with a large distance interlayer of 9.717 Å to be suitable for reversible Na-storage. The charge–discharge cycling performance delivers ∼160 mAh/g for long-term 200 cycles with structural stability. The ex-situ EXD at various Na-content states demonstrates the shrinkage/expansion of the interlayers during Na-migration, and the NH<sub>4</sub><sup>+</sup>-ions play an essential role as the &quot;pillar&quot; of double-layered V<sub>2</sub>O<sub>5</sub> to assure cycling stability. This work contributes to a high-capacity member of the V<sub>2</sub>O<sub>5</sub> polymorph family in the context of Na-ion batteries.
              </div>
              <hr></hr>
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0921510724006226" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded font-semibold transition">Access</a>
            </div>
            <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-0 md:text-right min-w-[120px] flex-shrink-0">01/2025</div>
          </div>
        </section>
      </div>
      <GoToTopButton />
    </section>
  );
} 