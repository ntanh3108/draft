import Image from "next/image";
import SectionBanner from "../components/SectionBanner";
import GoToTopButton from "../components/GoToTopButton";

export default function ProfilePage() {
  return (
    <section className="w-full flex flex-col items-center mt-6">
      <SectionBanner>
        <div className="flex-shrink-0">
          <Image src="/profile.webp" alt="Profile Banner" width={260} height={260} className="w-52 h-52 rounded-lg object-cover" />
        </div>
        <div className="flex-1 text-gray-700 text-lg md:text-xl">
          <p className="mb-4">Welcome to my profile! I am a sales engineer at Sou Viet Company Limited.</p>
          <p className="mb-4">I received my B.Sc in Chemistry at <a href="https://www.hcmus.edu.vn/" target="_blank" rel="noopener noreferrer" className="underline">University of Science - VNUHCM</a> in 2024.</p>
          <p>I am interested in...</p>
        </div>
      </SectionBanner>
      <div className="w-full max-w-screen-xl mx-auto mt-8 px-4">
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Education</h2>
          <div className="flex flex-col gap-8">
            {/* Trường 1 */}
            <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between bg-white rounded-lg shadow p-6">
              <div>
                <span className="text-lg md:text-xl font-semibold text-gray-900">Bachelor of Science in Chemistry, </span>
                <a href="https://www.hcmus.edu.vn/" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-semibold text-gray-900 underline">University of Science - VNUHCM,</a>
                <span className="text-lg md:text-xl font-semibold text-gray-900"> HCMC, Vietnam</span>
                <div className="text-gray-700 mt-1">Supervisor: Assoc. Prof. Le Thanh Nguyen, Huynh.</div>
                <div className="text-gray-700">Classification: <span className="font-medium">Very Good</span></div>
                <div className="text-gray-700">GPA: <span className="font-medium">3.4/4 (8.0/10)</span></div>
              </div>
              <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-0 md:text-right min-w-[180px]">09/2020 - 09/2024</div>
            </div>
            {/* Trường 2 */}
            <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between bg-white rounded-lg shadow p-6">
              <div>
                <a href="https://www.facebook.com/thptchuyenhoanglekhatayninh" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-semibold text-gray-900 underline">Hoang Le Kha Gifted High School,</a>
                <span className="text-lg md:text-xl font-semibold text-gray-900"> Tay Ninh Province, Vietnam</span>
                <div className="text-gray-700 mt-1">Major: Biology.</div>
              </div>
              <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-0 md:text-right min-w-[180px]">09/2016 - 05/2019</div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Experience</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between bg-white rounded-lg shadow p-6">
              <div>
                <div className="text-lg md:text-xl font-semibold text-gray-900">Sou Viet Company Limited</div>
                <div className="text-lg md:text-xl text-gray-900">Sales Engineer</div>
                <hr />
                <div className="text-gray-700 mt-1">
                  The representative office of&nbsp;
                  <a href="https://www.soule.com.tw/" target="_blank" rel="noopener noreferrer" className="underline text-gray-900 font-medium">Sou Le Enterprise Co., Ltd.</a>
                  &nbsp;(首立企业股份有限公司) (Taiwan, China) in Ho Chi Minh City, Vietnam
                </div>
                <div className="mt-4">
                  <div className="font-semibold text-gray-800 mb-1">Responsibilities:</div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>ABCXYZ...</li>
                    <li>ABCXYZ...</li>
                    <li>ABCXYZ...</li>
                    <li>ABCXYZ...</li>
                    <li>ABCXYZ...</li>
                    <li>ABCXYZ...</li>
                  </ul>
                </div>
                <div className="mt-4">
                  <div className="font-semibold text-gray-800 mb-1">Achievements:</div>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>ABCXYZ...</li>
                    <li>ABCXYZ...</li>
                  </ul>
                </div>
              </div>
              <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-0 md:text-right min-w-[180px]">11/2024 - Present</div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Skills</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <li className="bg-white rounded-lg shadow p-5">
              <div className="font-semibold text-gray-900 mb-1">Skill 1</div>
              <div className="text-gray-700">Description</div>
            </li>
            <li className="bg-white rounded-lg shadow p-5">
              <div className="font-semibold text-gray-900 mb-1">Skill 2</div>
              <div className="text-gray-700">Description</div>
            </li>
            <li className="bg-white rounded-lg shadow p-5">
              <div className="font-semibold text-gray-900 mb-1">Skill 3</div>
              <div className="text-gray-700">Description</div>
            </li>
            <li className="bg-white rounded-lg shadow p-5">
              <div className="font-semibold text-gray-900 mb-1">Skill 4</div>
              <div className="text-gray-700">Description</div>
            </li>
            <li className="bg-white rounded-lg shadow p-5">
              <div className="font-semibold text-gray-900 mb-1">Skill 5</div>
              <div className="text-gray-700">Description</div>
            </li>
            <li className="bg-white rounded-lg shadow p-5">
              <div className="font-semibold text-gray-900 mb-1">Skill 6</div>
              <div className="text-gray-700">Description</div>
            </li>
          </ul>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">Licences</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col-reverse md:flex-row md:items-start md:justify-between bg-white rounded-lg shadow p-6">
              <div>
                <span className="text-lg md:text-xl font-semibold text-gray-900">IELTS 6.0 (Issued by IDP Education)</span>
                <div className="text-gray-700 mt-1">Speaking 5.5; Listening 5.5; Reading 6.0; Writing 6.0</div>
              </div>
              <div className="text-gray-500 text-sm md:text-base mb-2 md:mb-0 md:text-right min-w-[100px]">04/2025</div>
            </div>
          </div>
        </section>
      </div>
      <GoToTopButton />
    </section>
  );
} 