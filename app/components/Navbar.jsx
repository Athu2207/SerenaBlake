"use client";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 w-full bg-[#ffc4a8] text-black text-sm font-sans flex justify-between items-center px-5 py-2 z-[1100]">
        <p className="px-6">📞 (323) 555-0192</p>
        <p className="px-6">📍 1287 Maplewood Drive, Los Angeles, CA 90026</p>
      </div>

      <nav className="fixed top-8 w-full bg-white backdrop-blur-md flex justify-between items-center px-6 py-3 z-[1000] h-[90px]">
        <div className="ml-16 mt-2">
          <Image src="/logo.png" alt="docprof" width={120} height={60} priority />
        </div>
        <ul className="flex gap-6 mt-4 mr-20 text-gray-700 font-medium">
          <li>
            <a href="#services" className="hover:text-blue-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#faqs" className="hover:text-blue-400 transition">
              FAQs
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}