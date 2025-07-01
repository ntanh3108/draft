import { FaFacebook, FaLinkedin, FaDownload, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-112px)] w-full max-w-screen-xl mx-auto px-4 md:px-12 py-10 gap-12 md:gap-32">
      <div className="flex justify-center md:justify-end items-center h-full">
        <Image src="/profile.webp" alt="Profile" width={448} height={448} className="w-64 aspect-square md:w-[28rem] md:aspect-square rounded-full object-cover shadow-xl" />
      </div>
      <div className="flex flex-col items-center md:items-start gap-8">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-center md:text-left">Thi Hong Loan, Dang</h1>
        <p className="text-lg md:text-xl text-gray-600 text-center md:text-left max-w-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, euismod euismod nisi nisi euismod.</p>
        <p className="text-lg md:text-xl text-gray-600 text-center md:text-left max-w-2xl">Contact me via email: .</p>
        <div className="flex flex-wrap gap-4 md:gap-6 mt-4 justify-center md:justify-start w-full max-w-xl">
          <a href="#" className="rounded-full bg-blue-600 text-white p-4 hover:bg-blue-700 transition text-2xl flex items-center justify-center" aria-label="Facebook"><FaFacebook size={28} /></a>
          <a href="#" className="rounded-full bg-blue-700 text-white p-4 hover:bg-blue-800 transition text-2xl flex items-center justify-center" aria-label="LinkedIn"><FaLinkedin size={28} /></a>
          <a href="#" className="rounded-full bg-gray-800 text-white p-4 hover:bg-gray-900 transition text-2xl flex items-center justify-center" aria-label="GitHub"><FaGithub size={28} /></a>
          <a href="#" className="rounded-full bg-blue-400 text-white p-4 hover:bg-blue-500 transition text-2xl flex items-center justify-center" aria-label="Twitter"><FaTwitter size={28} /></a>
          <a href="#" className="rounded-full bg-pink-500 text-white p-4 hover:bg-pink-600 transition text-2xl flex items-center justify-center" aria-label="Instagram"><FaInstagram size={28} /></a>
          <a href="#" className="rounded-full bg-gray-200 text-gray-700 p-4 hover:bg-gray-300 transition flex items-center gap-3 text-lg font-semibold w-full md:w-auto justify-center mt-2 md:mt-0" download><FaDownload size={24} />Download my resume</a>
        </div>
      </div>
    </section>
  );
}
