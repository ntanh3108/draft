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
          <p className="mb-4">I have published in various international journals and conferences, collaborating with researchers from <a href="https://www.hcmus.edu.vn/" target="_blank" rel="noopener noreferrer" className="underline">University of Science - VNUHCM</a>.</p>
          <p>Scroll down to see the full list of my publications and research works.</p>
        </div>
      </SectionBanner>
      <div className="w-full max-w-screen-xl mx-auto mt-8 px-4">
        
        {/* --- NĂM 2026 --- */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">2026</h2>
          
          {/* --- BÀI BÁO MỚI (SỐ 1) --- */}
          <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col-reverse md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                1. Ammonium vanadium bronze (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub>: a novel cathode material for potassium-ion batteries
              </div>
              <div className="text-gray-700 mb-1">Journal of Power Sources, Volume 666, 239214</div>
              <div className="text-gray-700 mb-1">
                <span className="font-bold">Authors:</span> Hai Nam Pham <sup>#</sup>, <span className="font-bold underline">Thi Hong Loan Dang</span> <sup>#</sup>, Thi Kieu Anh Vo, Thu Thao Nguyen, Xuan Tai Pham, Thi Thu Trang Nguyen, Wen Jen Lee, Minh-Thuan Pham <sup>#</sup>, Guo-Ping Chang-Chien, Thi Nam Pham, Quang Vinh Lam, Dai Lam Tran, Thai Hoang Nguyen, Viet Hai Le, Le Thanh Nguyen Huynh.
              </div>
              <div className="text-gray-700 mb-1 text-sm italic">
                #: Equal contribution
              </div>
              <hr></hr>
              <div className="text-gray-700 mb-2">
                <span className="font-bold">Abstract:</span><br/>
                Ammonium vanadium bronze (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub> (NVO) is demonstrated as a high-voltage cathode for potassium-ion batteries. NVO exhibits a monoclinic layered framework (c ≈ 9.71 Å) stabilized by NH<sub>4</sub><sup>+</sup> and rod-like morphology, with strong V=O bonding, mixed V<sup>5+</sup>/V<sup>4+</sup> states, and surface ‒OH groups that promote redox reversibility. The electrode delivers 117 mAh g<sup>-1</sup> at C/10 and retains 105 mAh g<sup>-1</sup> after 100 cycles (90.7% retention, nearly 100% Coulombic efficiency). Rate performance remains robust with capacities of 98–17 mAh g<sup>-1</sup> from C/5 to 5C. Cyclic voltammetry (CV) indicates hybrid kinetics: diffusion-controlled at low scan rate (~64% at 0.01 mV s<sup>-1</sup>) and increasingly capacitive (~55% at 0.10 mV s<sup>-1</sup>). Ex-situ XRD and impedance analyses confirm reversible coupling between structure and ion transport, where the interlayer spacing contracts from 9.41 to 9.26 Å during discharge and expands to 9.43 Å upon charge, accompanied by a diffusion coefficient change from 3.4 × 10<sup>-13</sup> to 0.97 × 10<sup>-13</sup> cm<sup>2</sup> s<sup>-1</sup> and subsequent recovery to 3.5 × 10<sup>-13</sup> cm<sup>2</sup> s<sup>-1</sup>. The lattice undergoes anisotropic but stable distortions, preserving the monoclinic framework and (001) texture without phase degradation. These results position NVO as a structurally stable and electrochemically efficient cathode for high-performance K<sup>+</sup>-ion storage.
              </div>
              <hr></hr>
              <span className="text-gray-700">Published 28 February 2026 (Available online 31 December 2025).</span>
              <br />
              <a href="https://doi.org/10.1016/j.jpowsour.2025.239214" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded font-semibold transition">Access</a>
            </div>
            <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-0 md:text-right min-w-[120px] flex-shrink-0">02/2026</div>
          </div>
        </section>

        {/* --- NĂM 2025 --- */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">2025</h2>
          
          {/* --- BÀI SỐ 2 (CŨ LÀ SỐ 1) --- */}
          <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col-reverse md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                2. High-Performance Sodium Storage Enabled by Structural Optimization of Oxidized (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub>
              </div>
              <div className="text-gray-700 mb-1">Journal of The Electrochemical Society, Volume 172, Number 9</div>
              <div className="text-gray-700 mb-1">
                <span className="font-bold">Authors:</span> Hai Nam Pham <sup>#</sup>, <span className="font-bold underline">Thi Hong Loan Dang</span> <sup>#</sup>, Thi Thu Trang Nguyen, Thu Thao Nguyen, Thi Nam Pham, Tuan Anh Nguyen, Thi Kieu Anh Vo, Wen Jen Lee, Minh-Thuan Pham, Guo-Ping Chang-Chien, Quang Vinh Lam, Thai Hoang Nguyen, Viet Hai Le, Le Thanh Nguyen Huynh.
              </div>
              <div className="text-gray-700 mb-1 text-sm italic">
                #: Equal contribution
              </div>
              <hr></hr>
              <div className="text-gray-700 mb-2">
                <span className="font-bold">Abstract:</span><br/>
                This study reports the design of an oxidation-engineered (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub> (oxidation-NVO) cathode via selective ammonium ion extraction using Na<sub>2</sub>S<sub>2</sub>O<sub>8</sub> to modulate the interlayer framework for enhanced sodium-ion storage. The oxidation process partially removes NH<sub>4</sub><sup>+</sup> ions while preserving the layered monoclinic structure, leading to expanded interlayer spacing and improved ion accessibility. Structural characterizations confirm the retention of a stable [VO<sub>6</sub>]<sub>n</sub> framework supported by residual NH<sub>4</sub><sup>+</sup> species acting as structural pillars. Morphological analysis reveals highly crystalline rod-like microstructures, and chemical state analysis confirms the coexistence of V<sup>4+</sup>/V<sup>5+</sup> state, favorable for redox activity. Electrochemical testing shows that the oxidation-NVO electrode delivers a high reversible capacity of 192 mAh g<sup>-1</sup>, approximately 20% higher than the pristine NVO counterpart, with excellent cycling stability, low polarization, and full capacity recovery after rate variation. Further transport and structural analyses under dynamic conditions demonstrate improved Na<sup>+</sup> transport and a reversible breathing-type interlayer response. These findings highlight the effectiveness of interlayer chemistry modulation through oxidation as a simple and scalable strategy for advancing vanadium-based cathode materials in sodium-ion batteries.
              </div>
              <hr></hr>
              <span className="text-gray-700">Published 10 September 2025.</span>
              <br />
              <a href="https://doi.org/10.1149/1945-7111/ae00fa" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded font-semibold transition">Access</a>
            </div>
            <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-0 md:text-right min-w-[120px] flex-shrink-0">10/2025</div>
          </div>

          {/* --- BÀI SỐ 3 (CŨ LÀ SỐ 2) --- */}
          <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col-reverse md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                3. Layered (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub> as a High-Performance Cathode for Zinc-Ion Batteries: Structural, Electrochemical, and Intercalation Mechanism Insights
              </div>
              <div className="text-gray-700 mb-1">Ceramics International <span className="font-semibold">(Q1, IF = 5.6)</span></div>
              <div className="text-gray-700 mb-1">
                <span className="font-bold">Authors:</span> Hai Nam Pham <sup>#</sup>, <span className="font-bold underline">Thi Hong Loan Dang</span> <sup>#</sup>, Thi Thu Trang Nguyen, Thu Thao Nguyen, Wen Jen Lee, Minh Thuan Pham, Guo-Ping Chang-Chien, Quang Vinh Lam, Thai Hoang Nguyen, Viet Hai Le, Le Thanh Nguyen Huynh.
              </div>
              <div className="text-gray-700 mb-1 text-sm italic">
                #: Equal contribution
              </div>
              <hr></hr>
              <div className="text-gray-700 mb-2">
                <span className="font-bold">Abstract:</span><br/>
                The development of high-performance cathodes remains a critical challenge for advancing aqueous zinc-ion batteries (ZIBs), despite their inherent advantages in cost, safety, and sustainability. This work presents a layered ammonium vanadium bronze (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub> (NVO) synthesized via a simple hydrothermal method and explored as a scalable cathode for ZIBs. The NVO structure features intercalated NH<sub>4</sub><sup>+</sup> ions that form N–H···O hydrogen bonds, acting as structural pillars between V<sub>2</sub>O<sub>5</sub> slabs to enhance interlayer stability and facilitate Zn<sup>2+</sup> diffusion. Beyond the favorable layered framework, this study provides a unique correlation between the material&apos;s thermal behavior, phase stability, and electrochemical durability. The NVO electrode delivers a high specific capacity of 240 mAh g<sup>-1</sup> at C/5, with 92.3% capacity retention over 200 cycles. Even at a high rate of 2C, it maintains 185 mAh g<sup>-1</sup> after 300 cycles with &gt;90% retention and nearly 100% Coulombic efficiency. Kinetic analysis reveals combined capacitive and diffusion-controlled processes, while ex-situ characterization confirms minimal interlayer contraction and reversible phase transitions. These findings highlight the crucial role of NH<sub>4</sub><sup>+</sup> pre-intercalation and hydrogen bonding in stabilizing the structure, enabling long-life, high-rate Zn<sup>2+</sup> storage, and establishing NVO as a practical, high-performance cathode for next-generation aqueous ZIBs.
              </div>
              <hr></hr>
              <span className="text-gray-700">Received 26 March 2025, Revised 8 July 2025, Accepted 8 August 2025, Available online 9 August 2025.</span>
              <br />
              <a href="https://www.sciencedirect.com/science/article/abs/pii/S0272884225038623" target="_blank" rel="noopener noreferrer" className="mt-2 inline-block px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded font-semibold transition">Access</a>
            </div>
            <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-0 md:text-right min-w-[120px] flex-shrink-0">08/2025</div>
          </div>

          {/* --- BÀI SỐ 4 (CŨ LÀ SỐ 3) --- */}
          <div className="bg-white rounded-lg shadow p-6 mb-8 flex flex-col-reverse md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                4. A high-capacity double-layered (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub> in micro-rods structure for sodium storage
              </div>
              <div className="text-gray-700 mb-1">Materials Science and Engineering: B <span className="font-semibold">(Q1, IF = 4.6 in 2024)</span></div>
              <div className="text-gray-700 mb-1">
                <span className="font-bold">Authors:</span> <span className="font-bold underline">Thi Hong Loan Dang</span>, Thi Thu Trang Nguyen, Hai Nam Pham, Hoang Anh Nguyen, Thi Thu Hong Nguyen, Minh Dai To, Thu Thao Nguyen, Thi Nam Pham, Dai Lam Tran, Wen Jen Lee, Minh Thuan Pham, Anh Tuan Dao, Quang Vinh Lam, Thai Hoang Nguyen, Viet Hai Le, Le Thanh Nguyen Huynh.
              </div>
              <hr></hr>
              <div className="text-gray-700 mb-2">
                <span className="font-bold">Abstract:</span><br/>
                An ammonium vanadium bronze (NH<sub>4</sub>)<sub>0.5</sub>V<sub>2</sub>O<sub>5</sub> (NVO) was synthesized via a hydrothermal route and investigated the Na-insertion/extraction process as a cathode for Na-ion batteries. The structural analysis confirms that the double-layered NVO in the micro-rods structure is formed by the double-sheet [VO<sub>6</sub>] with a large distance interlayer of 9.717 Å to be suitable for reversible Na-storage. The charge–discharge cycling performance delivers ∼160 mAh/g for long-term 200 cycles with structural stability. The ex-situ EXD at various Na-content states demonstrates the shrinkage/expansion of the interlayers during Na-migration, and the NH<sub>4</sub><sup>+</sup>-ions play an essential role as the &quot;pillar&quot; of double-layered V<sub>2</sub>O<sub>5</sub> to assure cycling stability. This work contributes to a high-capacity member of the V<sub>2</sub>O<sub>5</sub> polymorph family in the context of Na-ion batteries.
              </div>
              <hr></hr>
              <span className="text-gray-700">Received 12 September 2024, Revised 28 October 2024, Accepted 30 October 2024, Available online 2 November 2024, Version of Record 2 November 2024.</span>
              <br />
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